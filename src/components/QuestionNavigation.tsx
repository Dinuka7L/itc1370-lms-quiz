import React from 'react';
import { Flag, CheckCircle, Circle, AlertCircle } from 'lucide-react';
import { useQuizStore } from '../store/quizStore';

const QuestionNavigation: React.FC = () => {
  const { 
    currentQuiz, 
    currentQuestionIndex, 
    questionStatuses, 
    setCurrentQuestion,
    toggleQuestionFlag 
  } = useQuizStore();

  if (!currentQuiz) return null;

  const getQuestionIcon = (questionId: string, index: number) => {
    const status = questionStatuses[questionId];
    const isCurrent = index === currentQuestionIndex;
    
    if (status?.answered) {
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    } else if (status?.visited) {
      return <AlertCircle className="h-4 w-4 text-yellow-500" />;
    } else {
      return <Circle className="h-4 w-4 text-gray-300" />;
    }
  };

  const getQuestionButtonClass = (questionId: string, index: number) => {
    const status = questionStatuses[questionId];
    const isCurrent = index === currentQuestionIndex;
    
    let baseClass = "relative flex items-center justify-between p-3 rounded-lg transition-all duration-200 ";
    
    if (isCurrent) {
      baseClass += "bg-primary-100 border-2 border-primary-500 ";
    } else if (status?.answered) {
      baseClass += "bg-green-50 border border-green-200 hover:bg-green-100 ";
    } else if (status?.visited) {
      baseClass += "bg-yellow-50 border border-yellow-200 hover:bg-yellow-100 ";
    } else {
      baseClass += "bg-white border border-gray-200 hover:bg-gray-50 ";
    }
    
    return baseClass;
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Questions</h3>
        <div className="text-sm text-gray-600">
          {currentQuestionIndex + 1} of {currentQuiz.questions.length}
        </div>
      </div>
      
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {currentQuiz.questions.map((question, index) => {
          const status = questionStatuses[question.id];
          
          return (
            <div key={question.id} className="relative">
              <button
                onClick={() => setCurrentQuestion(index)}
                className={getQuestionButtonClass(question.id, index)}
              >
                <div className="flex items-center space-x-3">
                  {getQuestionIcon(question.id, index)}
                  <span className="text-sm font-medium">Q{index + 1}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  {status?.flagged && (
                    <Flag className="h-4 w-4 text-red-500 fill-red-500" />
                  )}
                  <span className="text-xs text-gray-500">{question.marks}pts</span>
                </div>
              </button>
              
              <button
                onClick={() => toggleQuestionFlag(question.id)}
                className="absolute -top-1 -right-1 p-1 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-200"
                title={status?.flagged ? 'Remove flag' : 'Flag for review'}
              >
                <Flag className={`h-3 w-3 ${status?.flagged ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
              </button>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-3 w-3 text-green-500" />
            <span className="text-gray-600">Answered</span>
          </div>
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-3 w-3 text-yellow-500" />
            <span className="text-gray-600">Visited</span>
          </div>
          <div className="flex items-center space-x-2">
            <Circle className="h-3 w-3 text-gray-300" />
            <span className="text-gray-600">Not visited</span>
          </div>
          <div className="flex items-center space-x-2">
            <Flag className="h-3 w-3 text-red-500 fill-red-500" />
            <span className="text-gray-600">Flagged</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionNavigation;