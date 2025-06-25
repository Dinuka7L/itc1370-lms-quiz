import React from 'react';
import { ChevronUp, ChevronDown, HelpCircle } from 'lucide-react';
import { useQuizStore } from '../store/quizStore';

const QuickNavigation: React.FC = () => {
  const { currentQuiz, currentQuestionIndex, setCurrentQuestion } = useQuizStore();

  if (!currentQuiz) return null;

  const canGoUp = currentQuestionIndex > 0;
  const canGoDown = currentQuestionIndex < currentQuiz.questions.length - 1;

  const handlePrevious = () => {
    if (canGoUp) {
      setCurrentQuestion(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (canGoDown) {
      setCurrentQuestion(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200/50">
      <div className="flex flex-col space-y-2">
        <button
          onClick={handlePrevious}
          disabled={!canGoUp}
          className={`
            p-3 rounded-lg transition-all duration-200 flex items-center justify-center
            ${canGoUp 
              ? 'bg-primary-50 hover:bg-primary-100 text-primary-600 hover:scale-105' 
              : 'bg-gray-50 text-gray-300 cursor-not-allowed'
            }
          `}
          title="Previous question"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
        
        <button
          onClick={handleNext}
          disabled={!canGoDown}
          className={`
            p-3 rounded-lg transition-all duration-200 flex items-center justify-center
            ${canGoDown 
              ? 'bg-primary-50 hover:bg-primary-100 text-primary-600 hover:scale-105' 
              : 'bg-gray-50 text-gray-300 cursor-not-allowed'
            }
          `}
          title="Next question"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
        
        <button
          className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-all duration-200 hover:scale-105"
          title="Help"
        >
          <HelpCircle className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default QuickNavigation;