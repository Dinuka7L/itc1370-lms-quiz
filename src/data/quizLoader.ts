import { Quiz } from '../types/quiz';

// Import lesson quizzes
import { pythonFundamentalsQuiz } from './lessonQuizzes/pythonFundamentals';
import { networkingFundamentalsQuiz } from './lessonQuizzes/networkingFundamentals';
import { InformationSecurityQuiz } from './lessonQuizzes/InformationSecurity';
import { PythonOperatorsQuiz } from './lessonQuizzes/PythonOperators';
import { PythonConditionalStatementsQuiz } from './lessonQuizzes/PythonConditionalStatements';

// Import mock exam quizzes
import { mockFinalPart1Quiz } from './mockExamQuizzes/mockFinalPart1';
import { mockFinalPart2Quiz } from './mockExamQuizzes/mockFinalPart2';
import { mockFinalPart3Quiz } from './mockExamQuizzes/mockFinalPart3';
import { mockFinalPart4Quiz } from './mockExamQuizzes/mockFinalPart4';


// Combine all quizzes
export const allQuizzes: Quiz[] = [
  // Lesson quizzes
  pythonFundamentalsQuiz,
  networkingFundamentalsQuiz,
  InformationSecurityQuiz,
  PythonOperatorsQuiz,
  PythonConditionalStatementsQuiz,
  
  // Mock exam quizzes
  mockFinalPart1Quiz,
  mockFinalPart2Quiz,
  mockFinalPart3Quiz,
  mockFinalPart4Quiz,
];

// Helper functions to get specific quiz types
export const getLessonQuizzes = (): Quiz[] => {
  return allQuizzes.filter(quiz => quiz.category === 'lesson');
};

export const getMockExamQuizzes = (): Quiz[] => {
  return allQuizzes.filter(quiz => quiz.category === 'mockFinal');
};

// Function to get quiz by ID
export const getQuizById = (id: string): Quiz | undefined => {
  return allQuizzes.find(quiz => quiz.id === id);
};

// Function to get all quiz IDs
export const getAllQuizIds = (): string[] => {
  return allQuizzes.map(quiz => quiz.id);
};