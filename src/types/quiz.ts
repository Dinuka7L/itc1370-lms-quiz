export interface Question {
  id: string;
  type: 'multipleChoice' | 'multiSelect' | 'fillInBlank' | 'essay' | 'dragDrop' | 'matching' | 'dropdown';
  question: string;
  image?: string; // Optional image URL or path
  imageAlt?: string; // Optional alt text for accessibility
  options?: string[];
  answer?: string | string[];
  rationale?: string;
  idealKeywords?: string[];
  marks: number;
  dragItems?: DragItem[];
  matchPairs?: MatchPair[];
  dropdownBlanks?: DropdownBlank[];
}

export interface DragItem {
  id: string;
  content: string;
  category: string;
}

export interface MatchPair {
  id: string;
  left: string;
  right: string;
}

export interface DropdownBlank {
  id: string;
  options: string[];
  correctAnswer: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  timeOptions: number[];
  questions: Question[];
  totalMarks: number;
  weight: number; // out of 70%
  category: 'lesson' | 'mockFinal';
}

export interface QuizAttempt {
  quizId: string;
  answers: Record<string, any>;
  startTime: Date;
  endTime?: Date;
  timeLimit: number; // in minutes
  score?: number;
  percentage?: number;
  isCompleted: boolean;
  isSubmitted: boolean;
  isAutoSubmitted?: boolean; // Track if quiz was auto-submitted due to timeout
}

export interface QuestionStatus {
  answered: boolean;
  flagged: boolean;
  visited: boolean;
}

export interface QuizState {
  quizzes: Quiz[];
  attempts: QuizAttempt[];
  currentQuiz: Quiz | null;
  currentAttempt: QuizAttempt | null;
  currentQuestionIndex: number;
  questionStatuses: Record<string, QuestionStatus>;
  timeRemaining: number;
  isTimerRunning: boolean;
}