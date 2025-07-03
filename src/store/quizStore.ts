import { create } from 'zustand';
import { Quiz, QuizAttempt, QuizState, QuestionStatus } from '../types/quiz';
import { allQuizzes } from '../data/quizLoader';
import { persist, createJSONStorage } from 'zustand/middleware';


interface QuizStore extends QuizState {
  randomizeQuestions: boolean;
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
  setRandomizeQuestions: (value: boolean) => void;
  setCurrentAttemptAndQuiz: (attempt: QuizAttempt, quiz: Quiz) => void;
  // New methods for progress saving
  pauseQuiz: () => void;
  resumeQuiz: (quizId: string) => void;
  hasInProgressQuiz: (quizId: string) => boolean;
  getInProgressAttempt: (quizId: string) => QuizAttempt | null;
  saveProgress: () => void;
  // Debug methods
  getSubmissionDebugInfo: () => any;
}

const createInitialState = (): QuizState & {
  randomizeQuestions: boolean;
  // ...other properties
} => ({
  randomizeQuestions: true,
  quizzes: allQuizzes,
  attempts: [],
  currentQuiz: null,
  currentAttempt: null,
  currentQuestionIndex: 0,
  questionStatuses: {},
  timeRemaining: 0,
  isTimerRunning: false,
  // no actions here, just state
});


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
  if (typeof text !== 'string') return '';
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .replace(/\s+/g, ' '); // Normalize whitespace
};

// Function to check if two strings are similar (handles minor typos)
const isSimilarText = (userAnswer: string, correctAnswer: string): boolean => {
  if (!userAnswer || !correctAnswer) return false;
  if (typeof userAnswer !== 'string' || typeof correctAnswer !== 'string') return false;
  
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
  if (!str1 || !str2) return Math.max(str1?.length || 0, str2?.length || 0);
  
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
  
  // If matched keywords meet or exceed the required threshold, give full marks
  if (matchedKeywords >= requiredKeywords) {
    return 100;
  }
  
  // Otherwise, give partial marks based on the percentage of required keywords found
  return (matchedKeywords / requiredKeywords) * 100;
};

// Robust scoring function with comprehensive error handling
const calculateQuestionScore = (question: any, userAnswer: any): { score: number; maxScore: number; error?: string } => {
  try {
    const maxScore = question.marks || 0;
    
    if (!question || typeof question !== 'object') {
      return { score: 0, maxScore, error: 'Invalid question object' };
    }

    if (userAnswer === undefined || userAnswer === null || userAnswer === '') {
      return { score: 0, maxScore, error: 'No answer provided' };
    }

    switch (question.type) {
      case 'essay': {
        if (question.idealKeywords && Array.isArray(question.idealKeywords) && question.idealKeywords.length > 0) {
          const requiredKeywords = 4;
          const essayScore = calculateEssayScore(userAnswer, question.idealKeywords, requiredKeywords);
          return { score: (essayScore / 100) * maxScore, maxScore };
        }
        return { score: 0, maxScore, error: 'Essay question missing ideal keywords' };
      }

      case 'multipleChoice': {
        if (!question.answer) {
          return { score: 0, maxScore, error: 'Question missing correct answer' };
        }
        return { score: userAnswer === question.answer ? maxScore : 0, maxScore };
      }

      case 'multiSelect': {
        if (!Array.isArray(question.answer)) {
          return { score: 0, maxScore, error: 'MultiSelect question answer is not an array' };
        }
        if (!Array.isArray(userAnswer)) {
          return { score: 0, maxScore, error: 'User answer for multiSelect is not an array' };
        }
        
        const correctAnswers = question.answer.sort();
        const userAnswers = userAnswer.sort();
        const isCorrect = JSON.stringify(correctAnswers) === JSON.stringify(userAnswers);
        return { score: isCorrect ? maxScore : 0, maxScore };
      }

      case 'fillInBlank': {
        if (!question.answer || typeof question.answer !== 'string') {
          return { score: 0, maxScore, error: 'FillInBlank question missing string answer' };
        }
        if (typeof userAnswer !== 'string') {
          return { score: 0, maxScore, error: 'User answer for fillInBlank is not a string' };
        }
        
        const isCorrect = isSimilarText(userAnswer, question.answer);
        return { score: isCorrect ? maxScore : 0, maxScore };
      }

      case 'dragDrop': {
        if (!Array.isArray(question.dragItems)) {
          return { score: 0, maxScore, error: 'DragDrop question missing dragItems array' };
        }
        if (!userAnswer || typeof userAnswer !== 'object') {
          return { score: 0, maxScore, error: 'User answer for dragDrop is not an object' };
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
          return { score: 0, maxScore, error: 'Matching question missing matchPairs array' };
        }
        if (!userAnswer || typeof userAnswer !== 'object') {
          return { score: 0, maxScore, error: 'User answer for matching is not an object' };
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
          return { score: 0, maxScore, error: 'Dropdown question missing dropdownBlanks array' };
        }
        if (!userAnswer || typeof userAnswer !== 'object') {
          return { score: 0, maxScore, error: 'User answer for dropdown is not an object' };
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
        return { score: 0, maxScore, error: `Unknown question type: ${question.type}` };
    }
  } catch (error) {
    console.error('Error calculating question score:', error);
    return { score: 0, maxScore: question.marks || 0, error: `Calculation error: ${error.message}` };
  }
};

export const useQuizStore = create<QuizStore>()(
  persist(
    (set, get) => ({
      ...createInitialState(),

  // Actions
  setCurrentAttemptAndQuiz: (attempt, quiz) => {
  set({
    currentAttempt: attempt,
    currentQuiz: quiz
  });
  },

  startQuiz: (quizId: string, timeLimit: number) => {
    const originalQuiz = get().quizzes.find(q => q.id === quizId);
    if (!originalQuiz) return;

    // Create a new quiz instance with shuffled questions
    const shuffledQuestions = get().randomizeQuestions
    ? shuffleArray(originalQuiz.questions)
    : originalQuiz.questions;

    
    const quiz: Quiz = {
      ...originalQuiz,
      questions: shuffledQuestions
    };

    const startTime = new Date();
    
    // Handle unlimited time (timeLimit = -1)
    const isUnlimited = timeLimit === -1;
    
    const attempt: QuizAttempt = {
      quizId,
      answers: {},
      startTime,
      timeLimit: isUnlimited ? 0 : timeLimit, // Store 0 for unlimited
      isCompleted: false,
      isSubmitted: false,
      isUnlimited, // Add flag to track unlimited quizzes
      isPaused: false,
      timeSpent: 0,
      currentQuestionIndex: 0,
    };

    const questionStatuses: Record<string, QuestionStatus> = {};
    quiz.questions.forEach(q => {
      questionStatuses[q.id] = {
        answered: false,
        flagged: false,
        visited: false,
      };
    });

    // Remove any existing in-progress attempt for this quiz
    const updatedAttempts = get().attempts.filter(a => !(a.quizId === quizId && !a.isCompleted));
    
    set({
      currentQuiz: quiz,
      currentAttempt: attempt,
      currentQuestionIndex: 0,
      questionStatuses,
      timeRemaining: isUnlimited ? 0 : timeLimit * 60,
      isTimerRunning: !isUnlimited, // Don't run timer for unlimited quizzes
      attempts: [...updatedAttempts, attempt],
    });
  },

  resumeQuiz: (quizId: string) => {
    const inProgressAttempt = get().getInProgressAttempt(quizId);
    const originalQuiz = get().quizzes.find(q => q.id === quizId);
    
    if (!inProgressAttempt || !originalQuiz) return;

    // Restore the quiz with the same question order as when it was started
    const quiz: Quiz = {
      ...originalQuiz,
      questions: originalQuiz.questions // Keep original order for now - could be enhanced to save shuffled order
    };

    // Calculate remaining time
    let timeRemaining = 0;
    if (!inProgressAttempt.isUnlimited && inProgressAttempt.timeLimit > 0) {
      const totalTimeInSeconds = inProgressAttempt.timeLimit * 60;
      const timeSpentSoFar = inProgressAttempt.timeSpent || 0;
      timeRemaining = Math.max(0, totalTimeInSeconds - timeSpentSoFar);
    }

    // Update the attempt to mark it as resumed
    const updatedAttempt = {
      ...inProgressAttempt,
      isPaused: false,
      pausedTime: undefined,
    };

    // Update attempts array
    const updatedAttempts = get().attempts.map(a => 
      a.quizId === quizId && !a.isCompleted ? updatedAttempt : a
    );

    set({
      currentQuiz: quiz,
      currentAttempt: updatedAttempt,
      currentQuestionIndex: inProgressAttempt.currentQuestionIndex || 0,
      questionStatuses: inProgressAttempt.questionStatuses || {},
      timeRemaining,
      isTimerRunning: !inProgressAttempt.isUnlimited,
      attempts: updatedAttempts,
    });
  },

  pauseQuiz: () => {
    const { currentAttempt, timeRemaining, isTimerRunning } = get();
    if (!currentAttempt || currentAttempt.isCompleted) return;

    // Calculate time spent so far
    const now = new Date();
    let timeSpent = currentAttempt.timeSpent || 0;
    
    if (isTimerRunning && !currentAttempt.isUnlimited) {
      const sessionTime = Math.floor((now.getTime() - currentAttempt.startTime.getTime()) / 1000);
      const totalTimeInSeconds = currentAttempt.timeLimit * 60;
      timeSpent = totalTimeInSeconds - timeRemaining;
    }

    const pausedAttempt = {
      ...currentAttempt,
      isPaused: true,
      pausedTime: now,
      timeSpent,
      currentQuestionIndex: get().currentQuestionIndex,
      questionStatuses: get().questionStatuses,
    };

    // Update attempts array
    const updatedAttempts = get().attempts.map(a => 
      a.quizId === currentAttempt.quizId && !a.isCompleted ? pausedAttempt : a
    );

    set({
      attempts: updatedAttempts,
      currentAttempt: pausedAttempt,
      isTimerRunning: false,
    });
  },

  saveProgress: () => {
    const { currentAttempt, currentQuestionIndex, questionStatuses, timeRemaining, isTimerRunning } = get();
    if (!currentAttempt || currentAttempt.isCompleted) return;

    // Calculate time spent so far
    let timeSpent = currentAttempt.timeSpent || 0;
    
    if (isTimerRunning && !currentAttempt.isUnlimited) {
      const now = new Date();
      const sessionTime = Math.floor((now.getTime() - currentAttempt.startTime.getTime()) / 1000);
      const totalTimeInSeconds = currentAttempt.timeLimit * 60;
      timeSpent = totalTimeInSeconds - timeRemaining;
    }

    const updatedAttempt = {
      ...currentAttempt,
      currentQuestionIndex,
      questionStatuses,
      timeSpent,
    };

    // Update attempts array
    const updatedAttempts = get().attempts.map(a => 
      a.quizId === currentAttempt.quizId && !a.isCompleted ? updatedAttempt : a
    );

    set({
      attempts: updatedAttempts,
      currentAttempt: updatedAttempt,
    });
  },

  hasInProgressQuiz: (quizId: string) => {
    return get().attempts.some(a => a.quizId === quizId && !a.isCompleted && !a.isSubmitted);
  },

  getInProgressAttempt: (quizId: string) => {
    return get().attempts.find(a => a.quizId === quizId && !a.isCompleted && !a.isSubmitted) || null;
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

    // Auto-save progress
    setTimeout(() => get().saveProgress(), 100);
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

    // Auto-save progress
    setTimeout(() => get().saveProgress(), 100);
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

    // Auto-save progress
    setTimeout(() => get().saveProgress(), 100);
  },

  submitQuiz: (isAutoSubmit = false) => {
    const { currentAttempt, currentQuiz, attempts, isTimerRunning } = get();
    
    console.log('🚀 Starting quiz submission...', {
      hasCurrentAttempt: !!currentAttempt,
      hasCurrentQuiz: !!currentQuiz,
      isAlreadySubmitted: currentAttempt?.isSubmitted,
      quizId: currentAttempt?.quizId,
      quizTitle: currentQuiz?.title
    });

    if (!currentAttempt || !currentQuiz) {
      console.error('❌ Submission failed: Missing current attempt or quiz');
      return;
    }

    if (currentAttempt.isSubmitted) {
      console.warn('⚠️ Quiz already submitted, skipping...');
      return;
    }

    try {
      // Stop the timer immediately (only if it was running)
      if (isTimerRunning) {
        console.log('⏹️ Stopping timer...');
        set({ isTimerRunning: false });
      }

      // Calculate score with comprehensive error handling
      let totalScore = 0;
      let totalMarks = 0;
      const scoringDetails: any[] = [];

      console.log('📊 Starting score calculation...');
      console.log('📝 Questions to evaluate:', currentQuiz.questions.length);
      console.log('📋 User answers:', Object.keys(currentAttempt.answers).length);

      currentQuiz.questions.forEach((question, index) => {
        try {
          const userAnswer = currentAttempt.answers[question.id];
          const result = calculateQuestionScore(question, userAnswer);
          
          totalMarks += result.maxScore;
          totalScore += result.score;
          
          scoringDetails.push({
            questionIndex: index + 1,
            questionId: question.id,
            questionType: question.type,
            userAnswer,
            maxScore: result.maxScore,
            earnedScore: result.score,
            error: result.error
          });

          if (result.error) {
            console.warn(`⚠️ Question ${index + 1} scoring issue:`, result.error);
          }
        } catch (error) {
          console.error(`❌ Error scoring question ${index + 1}:`, error);
          scoringDetails.push({
            questionIndex: index + 1,
            questionId: question.id,
            error: `Scoring error: ${error.message}`,
            maxScore: question.marks || 0,
            earnedScore: 0
          });
          totalMarks += question.marks || 0;
        }
      });

      console.log('📊 Scoring complete:', {
        totalScore: totalScore.toFixed(2),
        totalMarks,
        percentage: totalMarks > 0 ? ((totalScore / totalMarks) * 100).toFixed(2) : 0
      });

      const percentage = totalMarks > 0 ? (totalScore / totalMarks) * 100 : 0;
      const roundedScore = Math.round(totalScore * 100) / 100;
      const roundedPercentage = Math.round(percentage * 100) / 100;

      const completedAttempt: QuizAttempt = {
        ...currentAttempt,
        endTime: new Date(),
        score: roundedScore,
        percentage: roundedPercentage,
        isCompleted: true,
        isSubmitted: true,
        isAutoSubmitted: isAutoSubmit,
        isPaused: false,
        scoringDetails, // Store detailed scoring info for debugging
      };

      console.log('✅ Creating completed attempt:', {
        score: roundedScore,
        percentage: roundedPercentage,
        isAutoSubmitted: isAutoSubmit
      });

      // Update attempts array - remove any incomplete attempts and add the completed one
      const filteredAttempts = attempts.filter(a => !(a.quizId === currentAttempt.quizId && !a.isCompleted));
      const updatedAttempts = [...filteredAttempts, completedAttempt];

      console.log('💾 Updating store with completed attempt...');

      set({
        attempts: updatedAttempts,
        currentAttempt: completedAttempt,
        timeRemaining: 0,
      });

      console.log('🎉 Quiz submission completed successfully!');

      // Log detailed scoring for debugging
      console.log('📋 Detailed scoring breakdown:', scoringDetails);

    } catch (error) {
      console.error('💥 Critical error during quiz submission:', error);
      
      // Emergency fallback - still mark as submitted to prevent infinite loops
      const emergencyAttempt: QuizAttempt = {
        ...currentAttempt,
        endTime: new Date(),
        score: 0,
        percentage: 0,
        isCompleted: true,
        isSubmitted: true,
        isAutoSubmitted: isAutoSubmit,
        isPaused: false,
        submissionError: error.message,
      };

      const filteredAttempts = attempts.filter(a => !(a.quizId === currentAttempt.quizId && !a.isCompleted));
      const updatedAttempts = [...filteredAttempts, emergencyAttempt];

      set({
        attempts: updatedAttempts,
        currentAttempt: emergencyAttempt,
        timeRemaining: 0,
        isTimerRunning: false,
      });

      console.log('🚨 Emergency submission completed with error handling');
    }
  },

  // Debug method to get submission info
  getSubmissionDebugInfo: () => {
    const { currentAttempt, currentQuiz } = get();
    return {
      hasCurrentAttempt: !!currentAttempt,
      hasCurrentQuiz: !!currentQuiz,
      currentAttempt,
      currentQuiz: currentQuiz ? {
        id: currentQuiz.id,
        title: currentQuiz.title,
        questionCount: currentQuiz.questions.length,
        totalMarks: currentQuiz.totalMarks
      } : null
    };
  },

  // New method to calculate actual time remaining based on timestamps
  calculateTimeRemaining: () => {
    const { currentAttempt, isTimerRunning } = get();
    if (!currentAttempt || !isTimerRunning || currentAttempt.isUnlimited) return 0;

    const now = new Date();
    const elapsedSeconds = Math.floor((now.getTime() - currentAttempt.startTime.getTime()) / 1000);
    const totalTimeInSeconds = currentAttempt.timeLimit * 60;
    const timeSpentBefore = currentAttempt.timeSpent || 0;
    const remainingTime = Math.max(0, totalTimeInSeconds - timeSpentBefore - elapsedSeconds);

    return remainingTime;
  },

  setTimeRemaining: (time: number) => {
    const { isTimerRunning, currentAttempt } = get();
    
    // Only update time if timer is still running, quiz hasn't been submitted, and it's not unlimited
    if (!isTimerRunning || currentAttempt?.isUnlimited) return;
    
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

  setRandomizeQuestions: (value: boolean) => {
  set({ randomizeQuestions: value });
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
    version: 7, // Updated to version 7 with robust submission system
    name: 'quiz-store', // The key to store in local storage
    storage: createJSONStorage(() => localStorage),
    migrate: (persistedState, version) => {
      if (version === 7) {
        // This means storage already matches the new version
        return persistedState;
      }
      console.log('Detected old version of quiz store. Resetting storage for robust submission system...');
      return {
        ...createInitialState(),
        // Optionally: preserve quizzes array if needed
        quizzes: allQuizzes,
      };
    },
  }
  )
);

export { createInitialState };



// Dev Notes:
// --------------------------------------------------------------------------------------------------
// Storage Type       |	Survives refresh    |   	Survives tab close |     Survives browser restart
// sessionStorage	    |         ✅	         |              ❌       |                 	❌
// localStorage       |        	✅	         |              ✅	      |                  ✅

// ✅ So localStorage is perfect if you want persistence across sessions.