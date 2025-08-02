import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import QuizSetup from './pages/QuizSetup';
import QuizInterface from './pages/QuizInterface';
import QuizResults from './pages/QuizResults';
import { useQuizStore } from './store/quizStore';
import { useQuiz } from './hooks/useQuizData';

type AppState = 'dashboard' | 'setup' | 'quiz' | 'results';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('dashboard');
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  const { quiz: selectedQuiz, loading: quizLoading } = useQuiz(selectedQuizId);
  
  const { startQuiz, submitQuiz, resetQuiz, hasInProgressQuiz, resumeQuiz } = useQuizStore();

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

  const handleStartQuiz = (quizId: string) => {
    setSelectedQuizId(quizId);
    
    // Check if there's an in-progress quiz
    if (hasInProgressQuiz(quizId)) {
      setCurrentState('setup'); // Go to setup to show continue option
    } else {
      setCurrentState('setup');
    }
  };

  const handleBeginQuiz = (timeLimit: number) => {
    if (selectedQuiz) {
      startQuiz(selectedQuiz, timeLimit);
      setCurrentState('quiz');
    }
  };

  const handleSubmitQuiz = () => {
    submitQuiz()
      .then(() => {
        setCurrentState('results');
      })
      .catch((error) => {
        console.error('Quiz submission failed:', error);
        // Handle submission error - could show a retry dialog
        // For now, we'll stay on the quiz interface
      });
  };

  const handleReturnHome = () => {
    resetQuiz();
    setSelectedQuizId(null);
    setCurrentState('dashboard');
  };

  const handleRetakeQuiz = () => {
    resetQuiz();
    setCurrentState('setup');
  };

  const handleBackToDashboard = () => {
    resetQuiz();
    setSelectedQuizId(null);
    setCurrentState('dashboard');
  };

  const renderCurrentState = () => {
    switch (currentState) {
      case 'dashboard':
        return <Dashboard onStartQuiz={handleStartQuiz} />;
      
      case 'setup':
        return selectedQuizId && !quizLoading ? (
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
        ) : quizLoading ? (
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200/50 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading Quiz...</h2>
              <p className="text-gray-600">Please wait while we prepare your quiz.</p>
            </div>
          </div>
        ) : null;

      
      case 'quiz':
        return <QuizInterface onSubmit={handleSubmitQuiz} onNavigateHome={handleReturnHome} />;
      
      case 'results':
        return (
          <QuizResults
            onReturnHome={handleReturnHome}
            onRetakeQuiz={handleRetakeQuiz}
          />
        );
      
      default:
        return <Dashboard onStartQuiz={handleStartQuiz} />;
    }
  };

  return (
    <div className="font-inter">
      {renderCurrentState()}
    </div>
  );
}

export default App;