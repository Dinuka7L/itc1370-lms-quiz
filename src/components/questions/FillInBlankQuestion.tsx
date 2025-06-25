import React from 'react';
import { Question } from '../../types/quiz';
import { useQuizStore } from '../../store/quizStore';

interface FillInBlankQuestionProps {
  question: Question;
  showResults?: boolean;
}

const FillInBlankQuestion: React.FC<FillInBlankQuestionProps> = ({ 
  question, 
  showResults = false 
}) => {
  const { currentAttempt, saveAnswer } = useQuizStore();
  const userAnswer = (currentAttempt?.answers[question.id] as string) || '';
  const correctAnswer = question.answer as string;

  const handleAnswerChange = (value: string) => {
    if (!showResults) {
      saveAnswer(question.id, value);
    }
  };

  const isCorrect = showResults && userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
  const isWrong = showResults && userAnswer && !isCorrect;

  return (
    <div className="space-y-4">
      <div className="text-lg font-medium text-gray-900 leading-relaxed">
        {question.question}
      </div>
      
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => handleAnswerChange(e.target.value)}
            disabled={showResults}
            placeholder="Type your answer here..."
            className={`
              w-full p-4 border-2 rounded-lg text-lg font-mono transition-all duration-200
              ${showResults
                ? isCorrect
                  ? 'border-green-500 bg-green-50 text-green-900'
                  : isWrong
                  ? 'border-red-500 bg-red-50 text-red-900'
                  : 'border-gray-300 bg-gray-50'
                : 'border-gray-300 focus:border-primary-500 focus:ring-4 focus:ring-primary-100'
              }
            `}
          />
          
          {showResults && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {isCorrect ? (
                <div className="text-green-600 font-bold">✓</div>
              ) : isWrong ? (
                <div className="text-red-600 font-bold">✗</div>
              ) : null}
            </div>
          )}
        </div>
        
        {showResults && (
          <div className="space-y-3">
            {userAnswer && (
              <div className={`p-3 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="text-sm font-medium text-gray-700 mb-1">Your answer:</div>
                <div className={`font-mono ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                  {userAnswer}
                </div>
              </div>
            )}
            
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="text-sm font-medium text-gray-700 mb-1">Correct answer:</div>
              <div className="font-mono text-green-800">{correctAnswer}</div>
            </div>
          </div>
        )}
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

export default FillInBlankQuestion;