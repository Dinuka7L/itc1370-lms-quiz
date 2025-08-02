import { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';

interface SubmissionRequest {
  quizId: string;
  answers: Record<string, any>;
  timeSpent?: number;
  isAutoSubmitted?: boolean;
}

interface QuestionResult {
  questionId: string;
  score: number;
  maxScore: number;
  isCorrect: boolean;
}

interface SubmissionResponse {
  score: number;
  totalMarks: number;
  percentage: number;
  results: QuestionResult[];
  timeSpent?: number;
}

let cachedDb: Db | null = null;

async function connectToDatabase(): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }

  const client = new MongoClient(process.env.MONGODB_URI!);
  await client.connect();
  
  cachedDb = client.db('itc1370-quiz-app');
  return cachedDb;
}

// Scoring functions (moved from client-side)
const normalizeText = (text: string): string => {
  if (typeof text !== 'string') return '';
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ');
};

const levenshteinDistance = (str1: string, str2: string): number => {
  if (!str1 || !str2) return Math.max(str1?.length || 0, str2?.length || 0);
  
  const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
  
  for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
  
  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + indicator
      );
    }
  }
  
  return matrix[str2.length][str1.length];
};

const isSimilarText = (userAnswer: string, correctAnswer: string): boolean => {
  if (!userAnswer || !correctAnswer) return false;
  if (typeof userAnswer !== 'string' || typeof correctAnswer !== 'string') return false;
  
  const normalizedUser = normalizeText(userAnswer);
  const normalizedCorrect = normalizeText(correctAnswer);
  
  if (normalizedUser === normalizedCorrect) return true;
  
  const distance = levenshteinDistance(normalizedUser, normalizedCorrect);
  const maxLength = Math.max(normalizedUser.length, normalizedCorrect.length);
  const threshold = Math.ceil(maxLength * 0.2);
  
  return distance <= threshold;
};

const calculateEssayScore = (userAnswer: string, idealKeywords: string[], requiredKeywords: number = 4): number => {
  if (!userAnswer || !idealKeywords || idealKeywords.length === 0) return 0;
  if (typeof userAnswer !== 'string') return 0;
  
  const normalizedAnswer = normalizeText(userAnswer);
  let matchedKeywords = 0;
  
  idealKeywords.forEach(keyword => {
    if (keyword && typeof keyword === 'string') {
      const normalizedKeyword = normalizeText(keyword);
      if (normalizedKeyword && normalizedAnswer.includes(normalizedKeyword)) {
        matchedKeywords++;
      }
    }
  });
  
  if (matchedKeywords >= requiredKeywords) {
    return 100;
  }
  
  return (matchedKeywords / requiredKeywords) * 100;
};

const calculateQuestionScore = (question: any, userAnswer: any): { score: number; maxScore: number } => {
  try {
    const maxScore = question.marks || 0;
    
    if (!question || typeof question !== 'object') {
      return { score: 0, maxScore };
    }

    if (userAnswer === undefined || userAnswer === null || userAnswer === '') {
      return { score: 0, maxScore };
    }

    switch (question.type) {
      case 'essay': {
        if (question.idealKeywords && Array.isArray(question.idealKeywords) && question.idealKeywords.length > 0) {
          const requiredKeywords = 4;
          const essayScore = calculateEssayScore(userAnswer, question.idealKeywords, requiredKeywords);
          return { score: (essayScore / 100) * maxScore, maxScore };
        }
        return { score: 0, maxScore };
      }

      case 'multipleChoice': {
        if (!question.answer) {
          return { score: 0, maxScore };
        }
        return { score: userAnswer === question.answer ? maxScore : 0, maxScore };
      }

      case 'multiSelect': {
        if (!Array.isArray(question.answer)) {
          return { score: 0, maxScore };
        }
        if (!Array.isArray(userAnswer)) {
          return { score: 0, maxScore };
        }
        
        const correctAnswers = question.answer.sort();
        const userAnswers = userAnswer.sort();
        const isCorrect = JSON.stringify(correctAnswers) === JSON.stringify(userAnswers);
        return { score: isCorrect ? maxScore : 0, maxScore };
      }

      case 'fillInBlank': {
        if (!question.answer || typeof question.answer !== 'string') {
          return { score: 0, maxScore };
        }
        if (typeof userAnswer !== 'string') {
          return { score: 0, maxScore };
        }
        
        const isCorrect = isSimilarText(userAnswer, question.answer);
        return { score: isCorrect ? maxScore : 0, maxScore };
      }

      case 'dragDrop': {
        if (!Array.isArray(question.dragItems)) {
          return { score: 0, maxScore };
        }
        if (!userAnswer || typeof userAnswer !== 'object') {
          return { score: 0, maxScore };
        }
        
        let correctCount = 0;
        let totalBlanks = 0;
        
        question.dragItems.forEach((item: any) => {
          if (item && item.category && item.id) {
            totalBlanks++;
            if (userAnswer[item.category] === item.id) {
              correctCount++;
            }
          }
        });
        
        const isCorrect = correctCount === totalBlanks && totalBlanks > 0;
        return { score: isCorrect ? maxScore : 0, maxScore };
      }

      case 'matching': {
        if (!Array.isArray(question.matchPairs)) {
          return { score: 0, maxScore };
        }
        if (!userAnswer || typeof userAnswer !== 'object') {
          return { score: 0, maxScore };
        }
        
        let correctCount = 0;
        let totalPairs = question.matchPairs.length;
        
        question.matchPairs.forEach((pair: any) => {
          if (pair && pair.left && pair.right) {
            if (userAnswer[pair.left] === pair.right) {
              correctCount++;
            }
          }
        });
        
        const isCorrect = correctCount === totalPairs && totalPairs > 0;
        return { score: isCorrect ? maxScore : 0, maxScore };
      }

      case 'dropdown': {
        if (!Array.isArray(question.dropdownBlanks)) {
          return { score: 0, maxScore };
        }
        if (!userAnswer || typeof userAnswer !== 'object') {
          return { score: 0, maxScore };
        }
        
        let correctCount = 0;
        let totalBlanks = question.dropdownBlanks.length;
        
        question.dropdownBlanks.forEach((blank: any) => {
          if (blank && blank.id && blank.correctAnswer) {
            if (userAnswer[blank.id] === blank.correctAnswer) {
              correctCount++;
            }
          }
        });
        
        const isCorrect = correctCount === totalBlanks && totalBlanks > 0;
        return { score: isCorrect ? maxScore : 0, maxScore };
      }

      default:
        return { score: 0, maxScore };
    }
  } catch (error) {
    return { score: 0, maxScore: question.marks || 0 };
  }
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { quizId, answers, timeSpent, isAutoSubmitted }: SubmissionRequest = req.body;

    if (!quizId || !answers) {
      return res.status(400).json({ error: 'Quiz ID and answers are required' });
    }

    const db = await connectToDatabase();
    const quiz = await db.collection('quizzes').findOne({ id: quizId });

    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    // Calculate scores
    let totalScore = 0;
    let totalMarks = 0;
    const results: QuestionResult[] = [];

    quiz.questions.forEach((question: any) => {
      try {
        const userAnswer = answers[question.id];
        const result = calculateQuestionScore(question, userAnswer);
        
        totalMarks += result.maxScore;
        totalScore += result.score;

        results.push({
          questionId: question.id,
          score: result.score,
          maxScore: result.maxScore,
          isCorrect: result.score === result.maxScore
        });
      } catch (error) {
        totalMarks += question.marks || 0;
        results.push({
          questionId: question.id,
          score: 0,
          maxScore: question.marks || 0,
          isCorrect: false
        });
      }
    });

    const percentage = totalMarks > 0 ? (totalScore / totalMarks) * 100 : 0;
    const roundedScore = Math.round(totalScore * 100) / 100;
    const roundedPercentage = Math.round(percentage * 100) / 100;

    const response: SubmissionResponse = {
      score: roundedScore,
      totalMarks,
      percentage: roundedPercentage,
      results,
      timeSpent
    };

    // Optionally store submission in database
    await db.collection('submissions').insertOne({
      quizId,
      answers,
      score: roundedScore,
      percentage: roundedPercentage,
      timeSpent,
      isAutoSubmitted,
      submittedAt: new Date(),
      results
    });

    res.status(200).json(response);
  } catch (error) {
    console.error('Error submitting quiz:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}