// API service for communicating with Vercel serverless functions

export interface QuizSummary {
  id: string;
  title: string;
  description: string;
  timeOptions: number[];
  totalMarks: number;
  weight: number;
  category: 'lesson' | 'mockFinal';
  questionCount: number;
}

export interface Quiz {
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
  }>;
}

export interface SubmissionResult {
  score: number;
  totalMarks: number;
  percentage: number;
  results: Array<{
    questionId: string;
    score: number;
    maxScore: number;
    isCorrect: boolean;
  }>;
  timeSpent?: number;
}

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-vercel-app.vercel.app/api'
  : '/api';

class ApiService {
  private async fetchWithTimeout(url: string, options: RequestInit = {}, timeout = 10000): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  async getQuizzes(category?: 'lesson' | 'mockFinal'): Promise<QuizSummary[]> {
    try {
      const url = category 
        ? `${API_BASE_URL}/getQuizzes?category=${category}`
        : `${API_BASE_URL}/getQuizzes`;
      
      const response = await this.fetchWithTimeout(url);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch quizzes: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      throw new Error('Failed to load quizzes. Please check your connection and try again.');
    }
  }

  async getQuiz(quizId: string): Promise<Quiz> {
    try {
      const response = await this.fetchWithTimeout(`${API_BASE_URL}/getQuiz?id=${quizId}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Quiz not found');
        }
        throw new Error(`Failed to fetch quiz: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching quiz:', error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to load quiz. Please check your connection and try again.');
    }
  }

  async submitQuiz(
    quizId: string, 
    answers: Record<string, any>, 
    timeSpent?: number, 
    isAutoSubmitted?: boolean
  ): Promise<SubmissionResult> {
    try {
      const response = await this.fetchWithTimeout(`${API_BASE_URL}/submitQuiz`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quizId,
          answers,
          timeSpent,
          isAutoSubmitted,
        }),
      }, 30000); // 30 second timeout for submissions
      
      if (!response.ok) {
        throw new Error(`Failed to submit quiz: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error submitting quiz:', error);
      throw new Error('Failed to submit quiz. Please check your connection and try again.');
    }
  }
}

export const apiService = new ApiService();