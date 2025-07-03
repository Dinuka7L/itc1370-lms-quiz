import { Quiz } from '../types/quiz';

// Import lesson quizzes
import { OverviewOfInformationTechnologyAndSystemsQuiz } from './lessonQuizzes/OverviewOfITSystems';
import { pythonFundamentalsQuiz } from './lessonQuizzes/pythonFundamentals';
import { networkingFundamentalsQuiz } from './lessonQuizzes/networkingFundamentals';
import { InformationSecurityQuiz } from './lessonQuizzes/InformationSecurity';
import { PythonOperatorsQuiz } from './lessonQuizzes/PythonOperators';
import { PythonConditionalStatementsQuiz } from './lessonQuizzes/PythonConditionalStatements';
import { DataAndDatabasesQuiz } from './lessonQuizzes/DataAndDatabases';
import { BusinessProcessQuiz } from './lessonQuizzes/BusinessProcess';
import { EmergingTechnologiesInITQuiz } from './lessonQuizzes/EmergingTechnologiesInIT';
import { SoftwareQuiz } from './lessonQuizzes/Software';
import { HardwareQuiz } from './lessonQuizzes/Hardware';
import { InformationSystemsDevelopmentQuiz } from './lessonQuizzes/InformationSystemsDevelopment';

// Import mock exam quizzes
import { mockFinalPart1Quiz } from './mockExamQuizzes/mockFinalPart1';
//import { mockFinalPart2Quiz } from './mockExamQuizzes/mockFinalPart2'; havnt finalized yet
//import { mockFinalPart3Quiz } from './mockExamQuizzes/mockFinalPart3'; havent finalized yet
import { mockFinalPart4Quiz } from './mockExamQuizzes/mockFinalPart4';


// Combine all quizzes
export const allQuizzes: Quiz[] = [
  // Mock exam quizzes
  mockFinalPart1Quiz,
  mockFinalPart4Quiz,
  
  // Lesson quizzes
  OverviewOfInformationTechnologyAndSystemsQuiz,
  HardwareQuiz,
  SoftwareQuiz,
  DataAndDatabasesQuiz,
  networkingFundamentalsQuiz,
  InformationSecurityQuiz,
  BusinessProcessQuiz,
  InformationSystemsDevelopmentQuiz,
  EmergingTechnologiesInITQuiz,
  pythonFundamentalsQuiz,
  PythonOperatorsQuiz,
  PythonConditionalStatementsQuiz,
  
  
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