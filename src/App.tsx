import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import QuizSetup from './pages/QuizSetup';
import QuizInterface from './pages/QuizInterface';
import QuizResults from './pages/QuizResults';
import { useQuizStore } from './store/quizStore';

type AppState = 'dashboard' | 'setup' | 'quiz' | 'results';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('dashboard');
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  
  const { startQuiz, submitQuiz, resetQuiz } = useQuizStore();

  const handleStartQuiz = (quizId: string) => {
    setSelectedQuizId(quizId);
    setCurrentState('setup');
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