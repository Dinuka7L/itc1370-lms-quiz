import React from 'react';
import { Question } from '../../types/quiz';
import { useQuizStore } from '../../store/quizStore';

interface EssayQuestionProps {
  question: Question;
  showResults?: boolean;
}

const EssayQuestion: React.FC<EssayQuestionProps> = ({ 
  question, 
  showResults = false 
}) => {
  const { currentAttempt, saveAnswer } = useQuizStore();
  const userAnswer = (currentAttempt?.answers[question.id] as string) || '';

  const handleAnswerChange = (value: string) => {
    if (!showResults) {
      saveAnswer(question.id, value);
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-lg font-medium text-gray-900 leading-relaxed">
        {question.question}
      </div>
      
      <div className="text-sm text-gray-600 mb-4">
        This is an essay question. Provide a comprehensive answer in the text area below.
      </div>
      
      <div className="space-y-4">
        <textarea
          value={userAnswer}
          onChange={(e) => handleAnswerChange(e.target.value)}
          disabled={showResults}
          placeholder="Write your answer here..."
          rows={8}
          className={`
            w-full p-4 border-2 rounded-lg text-base leading-relaxed resize-vertical transition-all duration-200
            ${showResults
              ? 'border-gray-300 bg-gray-50'
              : 'border-gray-300 focus:border-primary-500 focus:ring-4 focus:ring-primary-100'
            }
          `}
        />
        
        <div className="flex justify-between text-sm text-gray-500">
          <span>
            {userAnswer.length} characters
          </span>
          <span>
            {userAnswer.split(/\s+/).filter(word => word.length > 0).length} words
          </span>
        </div>
      </div>
      
      {showResults && (
        <div className="mt-6 space-y-4">
          {userAnswer && (
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="font-medium text-gray-900 mb-2">Your answer:</div>
              <div className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                {userAnswer}
              </div>
            </div>
          )}
          
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="font-medium text-yellow-900 mb-2">
              ⚠️ Cannot auto-evaluate
            </div>
            <div className="text-yellow-800">
              Essay questions require manual evaluation. Your answer should ideally include the following concepts:
            </div>
            {question.idealKeywords && (
              <div className="mt-3 flex flex-wrap gap-2">
                {question.idealKeywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EssayQuestion;