import React, { useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import { useQuizStore } from '../store/quizStore';

const Timer: React.FC = () => {
  const { timeRemaining, isTimerRunning, setTimeRemaining, submitQuiz } = useQuizStore();

  useEffect(() => {
    if (!isTimerRunning) return;

    // If time has already run out, submit immediately
    if (timeRemaining <= 0) {
      submitQuiz();
      return;
    }

    const interval = setInterval(() => {
      setTimeRemaining(timeRemaining - 1);
      
      // Check if time just ran out and submit
      if (timeRemaining - 1 <= 0) {
        submitQuiz();
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining, isTimerRunning, setTimeRemaining, submitQuiz]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(Math.max(0, seconds) / 60);
    const remainingSeconds = Math.max(0, seconds) % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const isLowTime = timeRemaining < 300; // Less than 5 minutes
  const isCritical = timeRemaining < 60; // Less than 1 minute
  const isTimeUp = timeRemaining <= 0;

  return (
    <div className={`
      bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 transition-all duration-300
      ${isTimeUp ? 'border-red-600 bg-red-100/90' : isCritical ? 'border-red-500 bg-red-50/90' : isLowTime ? 'border-yellow-500 bg-yellow-50/90' : 'border-gray-200'}
    `}>
      <div className="flex items-center space-x-3">
        <div className={`
          p-2 rounded-full transition-colors duration-300
          ${isTimeUp ? 'bg-red-200' : isCritical ? 'bg-red-100' : isLowTime ? 'bg-yellow-100' : 'bg-gray-100'}
        `}>
          {isTimeUp || isCritical ? (
            <AlertTriangle className={`h-5 w-5 ${isTimeUp ? 'text-red-700' : 'text-red-600'}`} />
          ) : (
            <Clock className="h-5 w-5 text-gray-600" />
          )}
        </div>
        
        <div>
          <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
            Time Remaining
          </div>
          <div className={`
            text-2xl font-bold tabular-nums transition-colors duration-300
            ${isTimeUp ? 'text-red-700' : isCritical ? 'text-red-600' : isLowTime ? 'text-yellow-600' : 'text-gray-900'}
          `}>
            {formatTime(timeRemaining)}
          </div>
        </div>
      </div>
      
      {isTimeUp && (
        <div className="mt-2 text-xs font-medium text-red-700 animate-pulse">
          🚨 Time's up! Submitting quiz...
        </div>
      )}
      {!isTimeUp && isLowTime && (
        <div className={`
          mt-2 text-xs font-medium animate-pulse
          ${isCritical ? 'text-red-600' : 'text-yellow-600'}
        `}>
          {isCritical ? '⚠️ Critical time!' : '⏰ Time is running low'}
        </div>
      )}
    </div>
  );
};

export default Timer;