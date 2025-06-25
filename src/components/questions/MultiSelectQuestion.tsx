import React from 'react';
import { Question } from '../../types/quiz';
import { useQuizStore } from '../../store/quizStore';

interface MultiSelectQuestionProps {
  question: Question;
  showResults?: boolean;
}

const MultiSelectQuestion: React.FC<MultiSelectQuestionProps> = ({ 
  question, 
  showResults = false 
}) => {
  const { currentAttempt, saveAnswer } = useQuizStore();
  const selectedAnswers = (currentAttempt?.answers[question.id] as string[]) || [];
  const correctAnswers = question.answer as string[];

  const handleAnswerChange = (option: string) => {
    if (showResults) return;
    
    const newAnswers = selectedAnswers.includes(option)
      ? selectedAnswers.filter(answer => answer !== option)
      : [...selectedAnswers, option];
    
    saveAnswer(question.id, newAnswers);
  };

  return (
    <div className="space-y-4">
      <div className="text-lg font-medium text-gray-900 leading-relaxed">
        {question.question}
      </div>
      
      <div className="text-sm text-gray-600 mb-4">
        Select all that apply
      </div>
      
      <div className="space-y-3">
        {question.options?.map((option, index) => {
          const isSelected = selectedAnswers.includes(option);
          const isCorrect = showResults && correctAnswers.includes(option);
          const shouldBeSelected = showResults && correctAnswers.includes(option);
          const isWrong = showResults && isSelected && !correctAnswers.includes(option);
          
          let optionClass = "flex items-center p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ";
          
          if (showResults) {
            if (isCorrect && isSelected) {
              optionClass += "border-green-500 bg-green-50 ";
            } else if (shouldBeSelected && !isSelected) {
              optionClass += "border-yellow-500 bg-yellow-50 ";
            } else if (isWrong) {
              optionClass += "border-red-500 bg-red-50 ";
            } else {
              optionClass += "border-gray-200 bg-gray-50 ";
            }
          } else {
            if (isSelected) {
              optionClass += "border-primary-500 bg-primary-50 ";
            } else {
              optionClass += "border-gray-200 hover:border-primary-300 hover:bg-primary-25 ";
            }
          }
          
          return (
            <label key={index} className={optionClass}>
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleAnswerChange(option)}
                disabled={showResults}
                className="sr-only"
              />
              
              <div className={`
                w-5 h-5 rounded border-2 mr-3 flex items-center justify-center transition-all duration-200
                ${showResults
                  ? isCorrect && isSelected
                    ? 'border-green-500 bg-green-500'
                    : shouldBeSelected && !isSelected
                    ? 'border-yellow-500 bg-yellow-500'
                    : isWrong
                    ? 'border-red-500 bg-red-500'
                    : 'border-gray-300'
                  : isSelected
                  ? 'border-primary-500 bg-primary-500'
                  : 'border-gray-300'
                }
              `}>
                {isSelected && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              
              <span className="text-gray-900 flex-1">{option}</span>
              
              {showResults && isCorrect && isSelected && (
                <div className="ml-2 text-green-600 font-medium text-sm">✓ Correct</div>
              )}
              {showResults && shouldBeSelected && !isSelected && (
                <div className="ml-2 text-yellow-600 font-medium text-sm">⚠ Missed</div>
              )}
              {showResults && isWrong && (
                <div className="ml-2 text-red-600 font-medium text-sm">✗ Wrong</div>
              )}
            </label>
          );
        })}
      </div>
      
      {showResults && question.rationale && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="font-medium text-blue-900 mb-2">Explanation:</div>
          <div className="text-blue-800">{question.rationale}</div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectQuestion;