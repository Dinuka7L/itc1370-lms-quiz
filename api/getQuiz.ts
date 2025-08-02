import { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';

interface Quiz {
  _id: string;
  id: string;
  title: string;
  description: string;
  timeOptions: number[];
  totalMarks: number;
  weight: number;
  category: 'lesson' | 'mockFinal';
  questions: Array<{
    id: string;
    type: string;
    question: string;
    image?: string;
    imageAlt?: string;
    options?: string[];
    marks: number;
    dragItems?: any[];
    matchPairs?: any[];
    dropdownBlanks?: any[];
    // Note: answers, rationale, idealKeywords are NOT included here
  }>;
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.query;

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Quiz ID is required' });
    }

    const db = await connectToDatabase();
    const quiz = await db.collection('quizzes').findOne({ id });

    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    // Remove sensitive data (answers, rationale, idealKeywords) from questions
    const sanitizedQuestions = quiz.questions.map((question: any) => {
      const { answer, rationale, idealKeywords, ...sanitizedQuestion } = question;
      return sanitizedQuestion;
    });

    const sanitizedQuiz: Quiz = {
      _id: quiz._id,
      id: quiz.id,
      title: quiz.title,
      description: quiz.description,
      timeOptions: quiz.timeOptions,
      totalMarks: quiz.totalMarks,
      weight: quiz.weight,
      category: quiz.category,
      questions: sanitizedQuestions
    };

    res.status(200).json(sanitizedQuiz);
  } catch (error) {
    console.error('Error fetching quiz:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}