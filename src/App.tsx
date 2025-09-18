import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import { lazy, Suspense } from 'react';
import QuizSetup from './pages/QuizSetup';
import QuizInterface from './pages/QuizInterface';
import QuizResults from './pages/QuizResults';
import { useQuizStore } from './store/quizStore';
import { loadQuiz, loadAllQuizzes } from './utils/quizLoader';
import { useThemeStore } from './store/themeStore';

type AppState = 'home' | 'dashboard' | 'setup' | 'quiz' | 'results' | 'make-quiz';
// Only import MakeQuiz in dev mode
const isDev = import.meta.env && import.meta.env.DEV;
const MakeQuiz = isDev ? lazy(() => import('./pages/MakeQuiz')) : lazy(() => import('./pages/MakeQuiz'));
//set : undefined to not load quiz builder page in production

function App() {
  const [currentState, setCurrentState] = useState<AppState>('home');
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [quizzesLoaded, setQuizzesLoaded] = useState(false);
  
  const { startQuiz, submitQuiz, resetQuiz, hasInProgressQuiz, resumeQuiz, setQuizzes } = useQuizStore();
  const { isDarkMode } = useThemeStore();

  // Load all quizzes on app initialization
  useEffect(() => {
    const initializeQuizzes = async () => {
      if (quizzesLoaded) return;
      
      try {
        const allQuizzes = await loadAllQuizzes();
        setQuizzes(allQuizzes);
        setQuizzesLoaded(true);
      } catch (error) {
        console.error('Failed to initialize quizzes:', error);
      }
    };

    initializeQuizzes();
  }, [setQuizzes, quizzesLoaded]);

  // Listen for continue quiz event
  useEffect(() => {
    const handleContinueQuiz = () => {
      setCurrentState('quiz');
    };

    window.addEventListener('continueQuiz', handleContinueQuiz);
    
    return () => {
      window.removeEventListener('continueQuiz', handleContinueQuiz);
    };
  }, []);

  const handleStartQuiz = async (quizId: string) => {
    setLoading(true);
    try {
      // Check if quiz is already loaded in the store
      const { quizzes } = useQuizStore.getState();
      const existingQuiz = quizzes.find(q => q.id === quizId);
      
      if (!existingQuiz) {
        // If quiz not found, reload all quizzes
        const allQuizzes = await loadAllQuizzes();
        setQuizzes(allQuizzes);
        
        const quiz = allQuizzes.find(q => q.id === quizId);
        if (!quiz) {
          throw new Error(`Quiz with ID "${quizId}" not found`);
        }
      }
    } catch (error) {
      console.error('Failed to load quiz:', error);
      alert('Failed to load quiz. Please try again.');
      setLoading(false);
      return;
    }
    setLoading(false);
    
    setSelectedQuizId(quizId);
    
    // Check if there's an in-progress quiz
    if (hasInProgressQuiz(quizId)) {
      setCurrentState('setup'); // Go to setup to show continue option
    } else {
      setCurrentState('setup');
    }
  };

  const handleBeginQuiz = (timeLimit: number) => {
    if (selectedQuizId) {
      startQuiz(selectedQuizId, timeLimit);
      setCurrentState('quiz');
    }
  };

  const handleSubmitQuiz = () => {
    submitQuiz();
    setCurrentState('results');
  };

  const handleReturnHome = () => {
    resetQuiz();
    setSelectedQuizId(null);
    setCurrentState('home');
  };

  const handleRetakeQuiz = () => {
    resetQuiz();
    setCurrentState('setup');
  };

  const handleBackToDashboard = () => {
    resetQuiz();
    setSelectedQuizId(null);
    setCurrentState('home');
  };


  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 dark:border-primary-400 mx-auto mb-4 transition-colors duration-300"></div>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Loading quiz...</p>
        </div>
      </div>
    );
  }

  const renderCurrentState = () => {
    switch (currentState) {
      case 'home':
        return <Home onStartQuiz={handleStartQuiz} onMakeQuiz={isDev ? () => setCurrentState('make-quiz') : undefined} />;
      case 'make-quiz':
        if (isDev && MakeQuiz) {
          return (
            <Suspense fallback={<div className="p-8 text-center">Loading Make Quiz...</div>}>
              <MakeQuiz />
            </Suspense>
          );
        }
        return <div className="p-8 text-center">Not available in production.</div>;
      case 'setup':
        return selectedQuizId ? (
          <QuizSetup
            quizId={selectedQuizId}
            onStart={handleBeginQuiz}
            onBack={handleBackToDashboard}
            onViewResults={(quizId) => {
              const { attempts, quizzes, setCurrentAttemptAndQuiz } = useQuizStore.getState();
              const attempt = attempts.find(
                (a) => a.quizId === quizId && a.isCompleted
              );
              const quiz = quizzes.find((q) => q.id === quizId);
              if (attempt && quiz) {
                setCurrentAttemptAndQuiz(attempt, quiz);
                setCurrentState('results');
              }
            }}
          />
        ) : null;
      case 'quiz':
        return <QuizInterface onSubmit={handleSubmitQuiz} onNavigateHome={handleReturnHome} />;
      case 'results':
        return (
          <QuizResults
            onGoHome={handleReturnHome}
            onRetakeQuiz={handleRetakeQuiz}
          />
        );
      default:
        return <Home onStartQuiz={handleStartQuiz} onMakeQuiz={isDev ? () => setCurrentState('make-quiz') : undefined} />;
    }
  };

  return (
    <div className="font-inter">
      {renderCurrentState()}
    </div>
  );
}

export default App;