import React from 'react';
import { Question } from '../../types/quiz';
import { useQuizStore } from '../../store/quizStore';

interface MultipleChoiceQuestionProps {
  question: Question;
  showResults?: boolean;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({ 
  question, 
  showResults = false 
}) => {
  const { currentAttempt, saveAnswer } = useQuizStore();
  const selectedAnswer = currentAttempt?.answers[question.id] as string;

  const handleAnswerChange = (answer: string) => {
    if (!showResults) {
      saveAnswer(question.id, answer);
    }
  };

  return (
    <div className="space-y-4">
      <div 
        className="text-lg font-medium text-gray-900 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />
      
      <div className="space-y-3">
        {question.options?.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = showResults && option === question.answer;
          const isWrong = showResults && isSelected && option !== question.answer;
          
          let optionClass = "flex items-center p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ";
          
          if (showResults) {
            if (isCorrect) {
              optionClass += "border-green-500 bg-green-50 ";
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
                type="radio"
                name={question.id}
                value={option}
                checked={isSelected}
                onChange={() => handleAnswerChange(option)}
                disabled={showResults}
                className="sr-only"
              />
              
              <div className={`
                w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-all duration-200
                ${showResults
                  ? isCorrect
                    ? 'border-green-500 bg-green-500'
                    : isWrong
                    ? 'border-red-500 bg-red-500'
                    : 'border-gray-300'
                  : isSelected
                  ? 'border-primary-500 bg-primary-500'
                  : 'border-gray-300'
                }
              `}>
                {(isSelected || (showResults && isCorrect)) && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              
              <span className="text-gray-900 flex-1">{option}</span>
              
              {showResults && isCorrect && (
                <div className="ml-2 text-green-600 font-medium text-sm">✓ Correct</div>
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

export default MultipleChoiceQuestion;