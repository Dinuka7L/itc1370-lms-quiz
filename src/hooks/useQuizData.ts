import { useState, useEffect } from 'react';
import { apiService, QuizSummary, Quiz } from '../services/api';

export const useQuizzes = (category?: 'lesson' | 'mockFinal') => {
  const [quizzes, setQuizzes] = useState<QuizSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getQuizzes(category);
        setQuizzes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load quizzes');
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, [category]);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiService.getQuizzes(category);
      setQuizzes(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load quizzes');
    } finally {
      setLoading(false);
    }
  };

  return { quizzes, loading, error, refetch };
};

export const useQuiz = (quizId: string | null) => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!quizId) {
      setQuiz(null);
      setLoading(false);
      setError(null);
      return;
    }

    const fetchQuiz = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getQuiz(quizId);
        setQuiz(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load quiz');
        setQuiz(null);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [quizId]);

  const refetch = async () => {
    if (!quizId) return;
    
    try {
      setLoading(true);
      setError(null);
      const data = await apiService.getQuiz(quizId);
      setQuiz(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load quiz');
      setQuiz(null);
    } finally {
      setLoading(false);
    }
  };

  return { quiz, loading, error, refetch };
};