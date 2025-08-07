import axios from 'axios';

// API Configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:3000/api';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const authStore = JSON.parse(localStorage.getItem('auth-store') || '{}');
    const token = authStore.state?.accessToken;
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('auth-store');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await apiClient.post('/auth-api/login', { email, password });
    return response.data;
  },

  register: async (userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    const response = await apiClient.post('/auth-api/register', userData);
    return response.data;
  },

  verifyToken: async (token: string) => {
    const response = await apiClient.get('/auth-api/verify', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  }
};

// Quiz API
export const quizAPI = {
  getQuizzesBySubject: async (subjectId?: string, filters?: {
    category?: string;
    difficulty?: string;
  }) => {
    const params = new URLSearchParams();
    if (subjectId) params.append('subjectId', subjectId);
    if (filters?.category) params.append('category', filters.category);
    if (filters?.difficulty) params.append('difficulty', filters.difficulty);
    
    const response = await apiClient.get(`/quiz-api/getQuizzesBySubject?${params}`);
    return response.data;
  },

  getQuiz: async (quizId: string) => {
    const response = await apiClient.get(`/quiz-api/getQuiz?id=${quizId}`);
    return response.data;
  },

  submitQuiz: async (quizId: string, answers: Record<string, any>, timeSpent?: number) => {
    const response = await apiClient.post('/quiz-api/submitQuiz', {
      quizId,
      answers,
      timeSpent
    });
    return response.data;
  },

  createQuiz: async (quizData: any) => {
    const response = await apiClient.post('/quiz-api/createQuiz', quizData);
    return response.data;
  }
};

// Analytics API
export const analyticsAPI = {
  getUserStats: async (userId?: string) => {
    const params = userId ? `?userId=${userId}` : '';
    const response = await apiClient.get(`/analytics-api/userStats${params}`);
    return response.data;
  },

  generateDailyMix: async (settings?: {
    totalQuestions?: number;
    difficulty?: string;
    subjects?: string[];
    questionTypes?: string[];
    regenerate?: boolean;
  }) => {
    const response = await apiClient.post('/analytics-api/dailyMix', settings);
    return response.data;
  },

  getDailyMix: async () => {
    const response = await apiClient.get('/analytics-api/dailyMix');
    return response.data;
  }
};

// Subject API (placeholder for future implementation)
export const subjectAPI = {
  getSubjects: async () => {
    // This will be implemented when we add subject management
    return { subjects: [] };
  },

  getSubject: async (subjectId: string) => {
    // This will be implemented when we add subject management
    return { subject: null };
  }
};

export default apiClient;