import { create } from 'zustand';
import { Quiz, QuizAttempt, QuizState, QuestionStatus } from '../types/quiz';
import { allQuizzes } from '../data/quizLoader';
import { persist, createJSONStorage } from 'zustand/middleware';




interface QuizStore extends QuizState {
  // Actions
  startQuiz: (quizId: string, timeLimit: number) => void;
  setCurrentQuestion: (index: number) => void;
  saveAnswer: (questionId: string, answer: any) => void;
  toggleQuestionFlag: (questionId: string) => void;
  submitQuiz: (isAutoSubmit?: boolean) => void;
  setTimeRemaining: (time: number) => void;
  setTimerRunning: (running: boolean) => void;
  resetQuiz: () => void;
  getQuizProgress: (quizId: string) => number;
  getQuizScore: (quizId: string) => number;
  getTotalMarksObtained: () => number;
  getTotalPossibleMarks: () => number;
  // Methods for mock final exams
  getMockFinalProgress: () => number;
  getMockFinalMarksObtained: () => number;
  getMockFinalTotalMarks: () => number;
  getLessonQuizzes: () => Quiz[];
  getMockFinalQuizzes: () => Quiz[];
  // New method for calculating actual time remaining
  calculateTimeRemaining: () => number;
}

// Function to shuffle array using Fisher-Yates algorithm
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Function to normalize text for comparison (handles typos and variations)
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .replace(/\s+/g, ' '); // Normalize whitespace
};

// Function to check if two strings are similar (handles minor typos)
const isSimilarText = (userAnswer: string, correctAnswer: string): boolean => {
  const normalizedUser = normalizeText(userAnswer);
  const normalizedCorrect = normalizeText(correctAnswer);
  
  // Exact match after normalization
  if (normalizedUser === normalizedCorrect) return true;
  
  // Check for minor typos using Levenshtein distance
  const distance = levenshteinDistance(normalizedUser, normalizedCorrect);
  const maxLength = Math.max(normalizedUser.length, normalizedCorrect.length);
  
  // Allow up to 20% character differences for typos
  const threshold = Math.ceil(maxLength * 0.2);
  return distance <= threshold;
};

// Levenshtein distance algorithm for typo detection
const levenshteinDistance = (str1: string, str2: string): number => {
  const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
  
  for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
  
  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1, // deletion
        matrix[j - 1][i] + 1, // insertion
        matrix[j - 1][i - 1] + indicator // substitution
      );
    }
  }
  
  return matrix[str2.length][str1.length];
};

// Updated function to calculate essay score based on keywords with custom threshold
const calculateEssayScore = (userAnswer: string, idealKeywords: string[], requiredKeywords: number = 4): number => {
  if (!userAnswer || !idealKeywords || idealKeywords.length === 0) return 0;
  
  const normalizedAnswer = normalizeText(userAnswer);
  let matchedKeywords = 0;
  
  idealKeywords.forEach(keyword => {
    const normalizedKeyword = normalizeText(keyword);
    if (normalizedAnswer.includes(normalizedKeyword)) {
      matchedKeywords++;
    }
  });
  
  // If matched keywords meet or exceed the required threshold, give full marks
  if (matchedKeywords >= requiredKeywords) {
    return 100;
  }
  
  // Otherwise, give partial marks based on the percentage of required keywords found
  return (matchedKeywords / requiredKeywords) * 100;
};

export const useQuizStore = create<QuizStore>()(
  persist(
    (set, get) => ({
  // Initial state - now using dynamically loaded quizzes
  quizzes: allQuizzes,
  attempts: [],
  currentQuiz: null,
  currentAttempt: null,
  currentQuestionIndex: 0,
  questionStatuses: {},
  timeRemaining: 0,
  isTimerRunning: false,

  // Actions
  startQuiz: (quizId: string, timeLimit: number) => {
    const originalQuiz = get().quizzes.find(q => q.id === quizId);
    if (!originalQuiz) return;

    // Create a new quiz instance with shuffled questions
    const shuffledQuestions = shuffleArray(originalQuiz.questions);
    const quiz: Quiz = {
      ...originalQuiz,
      questions: shuffledQuestions
    };

    const startTime = new Date();
    const attempt: QuizAttempt = {
      quizId,
      answers: {},
      startTime,
      timeLimit,
      isCompleted: false,
      isSubmitted: false,
    };

    const questionStatuses: Record<string, QuestionStatus> = {};
    quiz.questions.forEach(q => {
      questionStatuses[q.id] = {
        answered: false,
        flagged: false,
        visited: false,
      };
    });

    set({
      currentQuiz: quiz,
      currentAttempt: attempt,
      currentQuestionIndex: 0,
      questionStatuses,
      timeRemaining: timeLimit * 60,
      isTimerRunning: true,
    });
  },

  setCurrentQuestion: (index: number) => {
    const { currentQuiz, questionStatuses } = get();
    if (!currentQuiz || index < 0 || index >= currentQuiz.questions.length) return;

    const questionId = currentQuiz.questions[index].id;
    const updatedStatuses = {
      ...questionStatuses,
      [questionId]: {
        ...questionStatuses[questionId],
        visited: true,
      },
    };

    set({
      currentQuestionIndex: index,
      questionStatuses: updatedStatuses,
    });
  },

  saveAnswer: (questionId: string, answer: any) => {
    const { currentAttempt, questionStatuses } = get();
    if (!currentAttempt) return;

    const updatedAttempt = {
      ...currentAttempt,
      answers: {
        ...currentAttempt.answers,
        [questionId]: answer,
      },
    };

    const updatedStatuses = {
      ...questionStatuses,
      [questionId]: {
        ...questionStatuses[questionId],
        answered: true,
      },
    };

    set({
      currentAttempt: updatedAttempt,
      questionStatuses: updatedStatuses,
    });
  },

  toggleQuestionFlag: (questionId: string) => {
    const { questionStatuses } = get();
    const updatedStatuses = {
      ...questionStatuses,
      [questionId]: {
        ...questionStatuses[questionId],
        flagged: !questionStatuses[questionId]?.flagged,
      },
    };

    set({ questionStatuses: updatedStatuses });
  },

  submitQuiz: (isAutoSubmit = false) => {
    const { currentAttempt, currentQuiz, attempts, isTimerRunning } = get();
    if (!currentAttempt || !currentQuiz || currentAttempt.isSubmitted) return;

    // Stop the timer immediately
    set({ isTimerRunning: false });

    // Calculate score
    let score = 0;
    let totalMarks = 0;

    currentQuiz.questions.forEach(question => {
      totalMarks += question.marks;
      const userAnswer = currentAttempt.answers[question.id];
      
      if (question.type === 'essay') {
        // Essay questions are now auto-evaluated based on keywords with custom threshold
        if (userAnswer && question.idealKeywords && question.idealKeywords.length > 0) {
          // Use 4 as default required keywords, or you can make this configurable per question
          const requiredKeywords = 4;
          const essayScore = calculateEssayScore(userAnswer, question.idealKeywords, requiredKeywords);
          score += (essayScore / 100) * question.marks;
        }
        return;
      }

      if (question.type === 'multipleChoice') {
        if (userAnswer === question.answer) {
          score += question.marks;
        }
      } else if (question.type === 'multiSelect') {
        const correctAnswers = question.answer as string[];
        const userAnswers = userAnswer as string[] || [];
        if (JSON.stringify(correctAnswers.sort()) === JSON.stringify(userAnswers.sort())) {
          score += question.marks;
        }
      } else if (question.type === 'fillInBlank') {
        // Use improved text comparison for fill-in-blank questions
        if (userAnswer && isSimilarText(userAnswer, question.answer as string)) {
          score += question.marks;
        }
      } else if (question.type === 'dragDrop') {
        // Check drag and drop answers
        const userAnswers = userAnswer as Record<string, string> || {};
        let correctCount = 0;
        let totalBlanks = 0;
        
        question.dragItems?.forEach(item => {
          totalBlanks++;
          if (userAnswers[item.category] === item.id) {
            correctCount++;
          }
        });
        
        if (correctCount === totalBlanks && totalBlanks > 0) {
          score += question.marks;
        }
      } else if (question.type === 'matching') {
        // Check matching answers
        const userAnswers = userAnswer as Record<string, string> || {};
        let correctCount = 0;
        let totalPairs = question.matchPairs?.length || 0;
        
        question.matchPairs?.forEach(pair => {
          if (userAnswers[pair.left] === pair.right) {
            correctCount++;
          }
        });
        
        if (correctCount === totalPairs && totalPairs > 0) {
          score += question.marks;
        }
      } else if (question.type === 'dropdown') {
        // Check dropdown answers
        const userAnswers = userAnswer as Record<string, string> || {};
        let correctCount = 0;
        let totalBlanks = question.dropdownBlanks?.length || 0;
        
        question.dropdownBlanks?.forEach(blank => {
          if (userAnswers[blank.id] === blank.correctAnswer) {
            correctCount++;
          }
        });
        
        if (correctCount === totalBlanks && totalBlanks > 0) {
          score += question.marks;
        }
      }
    });

    const percentage = totalMarks > 0 ? (score / totalMarks) * 100 : 0;

    const completedAttempt: QuizAttempt = {
      ...currentAttempt,
      endTime: new Date(),
      score: Math.round(score * 100) / 100, // Round to 2 decimal places
      percentage: Math.round(percentage * 100) / 100,
      isCompleted: true,
      isSubmitted: true,
      isAutoSubmitted: isAutoSubmit, // Track if it was auto-submitted
    };

    const updatedAttempts = [...attempts.filter(a => a.quizId !== currentAttempt.quizId), completedAttempt];

    set({
      attempts: updatedAttempts,
      currentAttempt: completedAttempt,
      timeRemaining: 0,
    });
  },

  // New method to calculate actual time remaining based on timestamps
  calculateTimeRemaining: () => {
    const { currentAttempt, isTimerRunning } = get();
    if (!currentAttempt || !isTimerRunning) return 0;

    const now = new Date();
    const elapsedSeconds = Math.floor((now.getTime() - currentAttempt.startTime.getTime()) / 1000);
    const totalTimeInSeconds = currentAttempt.timeLimit * 60;
    const remainingTime = Math.max(0, totalTimeInSeconds - elapsedSeconds);

    return remainingTime;
  },

  setTimeRemaining: (time: number) => {
    const { isTimerRunning } = get();
    
    // Only update time if timer is still running and quiz hasn't been submitted
    if (!isTimerRunning) return;
    
    set({ timeRemaining: Math.max(0, time) });
    
    // Auto-submit when time reaches 0
    if (time <= 0) {
      get().submitQuiz(true); // Pass true to indicate auto-submit
    }
  },

  setTimerRunning: (running: boolean) => {
    set({ isTimerRunning: running });
  },

  resetQuiz: () => {
    set({
      currentQuiz: null,
      currentAttempt: null,
      currentQuestionIndex: 0,
      questionStatuses: {},
      timeRemaining: 0,
      isTimerRunning: false,
    });
  },

  getQuizProgress: (quizId: string) => {
    const attempt = get().attempts.find(a => a.quizId === quizId);
    return attempt?.isCompleted ? 100 : 0;
  },

  getQuizScore: (quizId: string) => {
    const attempt = get().attempts.find(a => a.quizId === quizId && a.isCompleted);
    return attempt?.percentage || 0;
  },

  getTotalMarksObtained: () => {
    const { attempts } = get();
    return Math.round(attempts.reduce((sum, attempt) => {
      return attempt.isCompleted ? sum + (attempt.score || 0) : sum;
    }, 0) * 100) / 100;
  },

  getTotalPossibleMarks: () => {
    const { quizzes } = get();
    return quizzes.reduce((sum, quiz) => sum + quiz.totalMarks, 0);
  },

  // Methods for mock final exams
  getMockFinalProgress: () => {
    const { attempts } = get();
    const mockFinalQuizzes = get().getMockFinalQuizzes();
    const completedQuizzes = mockFinalQuizzes.filter(quiz => 
      attempts.some(a => a.quizId === quiz.id && a.isCompleted)
    );
    
    return mockFinalQuizzes.length > 0 ? (completedQuizzes.length / mockFinalQuizzes.length) * 100 : 0;
  },

  getMockFinalMarksObtained: () => {
    const { attempts } = get();
    const mockFinalQuizzes = get().getMockFinalQuizzes();
    
    return Math.round(mockFinalQuizzes.reduce((sum, quiz) => {
      const attempt = attempts.find(a => a.quizId === quiz.id && a.isCompleted);
      return sum + (attempt?.score || 0);
    }, 0) * 100) / 100;
  },

  getMockFinalTotalMarks: () => {
    const mockFinalQuizzes = get().getMockFinalQuizzes();
    return mockFinalQuizzes.reduce((sum, quiz) => sum + quiz.totalMarks, 0);
  },

  getLessonQuizzes: () => {
    return get().quizzes.filter(q => q.category === 'lesson');
  },

  getMockFinalQuizzes: () => {
    return get().quizzes.filter(q => q.category === 'mockFinal');
  },
}),
    {
      name: 'quiz-store', // The key to store in local storage
      storage: createJSONStorage(() => localStorage),
    }
  )
);


// Dev Notes:
// Storage Type	Survives refresh	Survives tab close	Survives browser restart
// sessionStorage	✅	❌	❌
// localStorage	✅	✅	✅

// ✅ So localStorage is perfect if you want persistence across sessions.