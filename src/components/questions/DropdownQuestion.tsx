import React from 'react';
import { Question } from '../../types/quiz';
import { useQuizStore } from '../../store/quizStore';

interface DropdownQuestionProps {
  question: Question;
  showResults?: boolean;
}

const DropdownQuestion: React.FC<DropdownQuestionProps> = ({ 
  question, 
  showResults = false 
}) => {
  const { currentAttempt, saveAnswer } = useQuizStore();
  const userAnswers = (currentAttempt?.answers[question.id] as Record<string, string>) || {};

  const handleDropdownChange = (blankId: string, value: string) => {
    if (showResults) return;
    
    const newAnswers = { ...userAnswers };
    newAnswers[blankId] = value;
    
    saveAnswer(question.id, newAnswers);
  };

  const getDropdownBlank = (blankId: string) => {
    return question.dropdownBlanks?.find(blank => blank.id === blankId);
  };

  const isCorrectAnswer = (blankId: string): boolean => {
    const blank = getDropdownBlank(blankId);
    return blank ? userAnswers[blankId] === blank.correctAnswer : false;
  };

  const isWrongAnswer = (blankId: string): boolean => {
    const blank = getDropdownBlank(blankId);
    return blank ? userAnswers[blankId] && userAnswers[blankId] !== blank.correctAnswer : false;
  };

  // Parse the question text to identify dropdown blanks
  const parseQuestionWithDropdowns = (questionText: string) => {
    const parts = questionText.split(/(\[dropdown_\d+\])/g);
    return parts.map((part, index) => {
      const dropdownMatch = part.match(/\[dropdown_(\d+)\]/);
      if (dropdownMatch) {
        const blankId = `dropdown_${dropdownMatch[1]}`;
        const blank = getDropdownBlank(blankId);
        
        if (!blank) return <span key={index} className="text-red-500">[Invalid dropdown]</span>;
        
        const selectedValue = userAnswers[blankId] || '';
        const isCorrect = showResults && isCorrectAnswer(blankId);
        const isWrong = showResults && isWrongAnswer(blankId);
        
        return (
          <select
            key={index}
            value={selectedValue}
            onChange={(e) => handleDropdownChange(blankId, e.target.value)}
            disabled={showResults}
            className={`
              mx-1 px-3 py-1 border-2 rounded-md font-medium transition-all duration-200
              ${showResults
                ? isCorrect
                  ? 'border-green-500 bg-green-50 text-green-800'
                  : isWrong
                  ? 'border-red-500 bg-red-50 text-red-800'
                  : 'border-gray-300 bg-gray-50'
                : 'border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200'
              }
            `}
          >
            <option value="">Select...</option>
            {blank.options.map((option, optionIndex) => (
              <option key={optionIndex} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-lg font-medium text-gray-900 leading-relaxed">
        {parseQuestionWithDropdowns(question.question)}
      </div>
      
      <div className="text-sm text-gray-600">
        Select the correct option from each dropdown menu to complete the sentence.
      </div>
      
      {showResults && (
        <div className="space-y-4">
          {question.dropdownBlanks?.map((blank, index) => {
            const userAnswer = userAnswers[blank.id];
            const isCorrect = userAnswer === blank.correctAnswer;
            
            return (
              <div key={blank.id} className={`p-3 rounded-lg border ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                <div className="text-sm font-medium text-gray-700 mb-1">
                  {blank.id.replace('dropdown_', 'Dropdown ')}:
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-600">Your answer: </span>
                    <span className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                      {userAnswer || 'Not answered'}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Correct: </span>
                    <span className="font-medium text-green-800">{blank.correctAnswer}</span>
                  </div>
                </div>
              </div>
            );
          })}
          
          {question.rationale && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="font-medium text-blue-900 mb-2">Explanation:</div>
              <div className="text-blue-800">{question.rationale}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownQuestion;