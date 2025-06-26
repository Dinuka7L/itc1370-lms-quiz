import { create } from 'zustand';
import { Quiz, QuizAttempt, QuizState, QuestionStatus } from '../types/quiz';
import { sampleQuizzes } from '../data/sampleQuizzes';

interface QuizStore extends QuizState {
  // Actions
  startQuiz: (quizId: string, timeLimit: number) => void;
  setCurrentQuestion: (index: number) => void;
  saveAnswer: (questionId: string, answer: any) => void;
  toggleQuestionFlag: (questionId: string) => void;
  submitQuiz: () => void;
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
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  // Initial state
  quizzes: sampleQuizzes,
  attempts: [],
  currentQuiz: null,
  currentAttempt: null,
  currentQuestionIndex: 0,
  questionStatuses: {},
  timeRemaining: 0,
  isTimerRunning: false,

  // Actions
  startQuiz: (quizId: string, timeLimit: number) => {
    const quiz = get().quizzes.find(q => q.id === quizId);
    if (!quiz) return;

    const attempt: QuizAttempt = {
      quizId,
      answers: {},
      startTime: new Date(),
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

  submitQuiz: () => {
    const { currentAttempt, currentQuiz, attempts } = get();
    if (!currentAttempt || !currentQuiz) return;

    // Calculate score
    let score = 0;
    let totalMarks = 0;

    currentQuiz.questions.forEach(question => {
      totalMarks += question.marks;
      const userAnswer = currentAttempt.answers[question.id];
      
      if (question.type === 'essay') {
        // Essay questions are not auto-evaluated
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
        if (userAnswer?.toLowerCase().trim() === (question.answer as string)?.toLowerCase().trim()) {
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

    const percentage = (score / totalMarks) * 100;

    const completedAttempt: QuizAttempt = {
      ...currentAttempt,
      endTime: new Date(),
      score,
      percentage,
      isCompleted: true,
      isSubmitted: true,
    };

    const updatedAttempts = [...attempts.filter(a => a.quizId !== currentAttempt.quizId), completedAttempt];

    set({
      attempts: updatedAttempts,
      currentAttempt: completedAttempt,
      isTimerRunning: false,
    });
  },

  setTimeRemaining: (time: number) => {
    set({ timeRemaining: time });
    if (time <= 0) {
      get().submitQuiz();
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
    return attempts.reduce((sum, attempt) => {
      return attempt.isCompleted ? sum + (attempt.score || 0) : sum;
    }, 0);
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
    
    return mockFinalQuizzes.reduce((sum, quiz) => {
      const attempt = attempts.find(a => a.quizId === quiz.id && a.isCompleted);
      return sum + (attempt?.score || 0);
    }, 0);
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
}));