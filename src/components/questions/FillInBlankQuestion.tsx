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
      // Check if answer is getting too long
      const maxLength = 5000; // 5k characters limit for fill-in-blank
      if (value.length > maxLength) {
        if (value.length === maxLength + 1) {
          alert(`⚠️ Answer is getting very long (${value.length} characters). Fill-in-blank answers should typically be brief.`);
        }
      }
      
      saveAnswer(question.id, value);
    }
  };

  // Improved text comparison function
  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s]/g, '') // Remove punctuation
      .replace(/\s+/g, ' '); // Normalize whitespace
  };

  const isSimilarText = (userText: string, correctText: string): boolean => {
    const normalizedUser = normalizeText(userText);
    const normalizedCorrect = normalizeText(correctText);
    
    // Exact match after normalization
    if (normalizedUser === normalizedCorrect) return true;
    
    // Check for minor typos using Levenshtein distance
    const distance = levenshteinDistance(normalizedUser, normalizedCorrect);
    const maxLength = Math.max(normalizedUser.length, normalizedCorrect.length);
    
    // Allow up to 20% character differences for typos
    const threshold = Math.ceil(maxLength * 0.2);
    return distance <= threshold;
  };

  const levenshteinDistance = (str1: string, str2: string): number => {
    const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
    
    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
    
    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1, // deletion
          matrix[j - 1][i] + 1, // insertion
          matrix[j - 1][i - 1] + indicator // substitution
        );
      }
    }
    
    return matrix[str2.length][str1.length];
  };

  const isCorrect = showResults && userAnswer && isSimilarText(userAnswer, correctAnswer);
  const isWrong = showResults && userAnswer && !isCorrect;

  // Check if answer was truncated
  const wasTruncated = userAnswer.includes('... [Answer truncated due to length]');

  return (
    <div className="space-y-4">
      <div 
        className="text-lg font-medium text-gray-900 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />
      
      <div className="text-sm text-gray-600 mb-4">
        💡 <strong>Tip:</strong> Minor spelling mistakes and punctuation differences are automatically handled.
        <span className="block mt-1 text-orange-600 text-xs">
          ⚠️ Keep answers brief and to the point for fill-in-blank questions.
        </span>
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
                : userAnswer.length > 1000
                ? 'border-orange-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-100'
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

        {userAnswer.length > 1000 && !showResults && (
          <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="flex items-start space-x-2">
              <span className="text-orange-600">⚠️</span>
              <div className="text-orange-800 text-sm">
                <strong>Long Answer:</strong> Fill-in-blank answers are typically brief. 
                Consider shortening your response ({userAnswer.length} characters).
              </div>
            </div>
          </div>
        )}
        
        {showResults && (
          <div className="space-y-3">
            {userAnswer && (
              <div className={`p-3 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="text-sm font-medium text-gray-700 mb-1">Your answer:</div>
                <div className={`font-mono ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                  {userAnswer}
                </div>
                {isCorrect && (
                  <div className="text-xs text-green-600 mt-1">
                    ✓ Accepted (including minor variations)
                  </div>
                )}
                {wasTruncated && (
                  <div className="text-xs text-red-600 mt-1">
                    ⚠️ Answer was truncated for storage efficiency
                  </div>
                )}
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