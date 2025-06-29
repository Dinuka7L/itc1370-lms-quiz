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

  // Calculate keyword match with custom threshold (default 4 keywords required for full marks)
  const calculateKeywordScore = (requiredKeywords: number = 4): { score: number; matchedCount: number } => {
    if (!userAnswer || !question.idealKeywords || question.idealKeywords.length === 0) {
      return { score: 0, matchedCount: 0 };
    }
    
    const normalizedAnswer = userAnswer.toLowerCase();
    let matchedKeywords = 0;
    
    question.idealKeywords.forEach(keyword => {
      if (normalizedAnswer.includes(keyword.toLowerCase())) {
        matchedKeywords++;
      }
    });
    
    // If matched keywords meet or exceed the required threshold, give full score
    if (matchedKeywords >= requiredKeywords) {
      return { score: 100, matchedCount: matchedKeywords };
    }
    
    // Otherwise, give partial score based on the percentage of required keywords found
    const score = (matchedKeywords / requiredKeywords) * 100;
    return { score, matchedCount: matchedKeywords };
  };

  const requiredKeywords = 4; // You can make this configurable per question if needed
  const { score: keywordScore, matchedCount } = showResults ? calculateKeywordScore(requiredKeywords) : { score: 0, matchedCount: 0 };
  const earnedMarks = showResults ? Math.round((keywordScore / 100) * question.marks * 100) / 100 : 0;

  return (
    <div className="space-y-4">
      <div 
        className="text-lg font-medium text-gray-900 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />
      
      <div className="text-sm text-gray-600 mb-4">
        This is an essay question. Provide a comprehensive answer in the text area below.
        {question.idealKeywords && question.idealKeywords.length > 0 && (
          <span className="block mt-1 text-blue-600">
            💡 Try to include key concepts related to the topic for better scoring. (Need {requiredKeywords} key concepts for full marks)
          </span>
        )}
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
          
          <div className={`p-4 border rounded-lg ${keywordScore >= 70 ? 'bg-green-50 border-green-200' : keywordScore >= 40 ? 'bg-yellow-50 border-yellow-200' : 'bg-red-50 border-red-200'}`}>
            <div className={`font-medium mb-2 ${keywordScore >= 70 ? 'text-green-900' : keywordScore >= 40 ? 'text-yellow-900' : 'text-red-900'}`}>
              📊 Auto-Evaluation Results
            </div>
            <div className={`mb-3 ${keywordScore >= 70 ? 'text-green-800' : keywordScore >= 40 ? 'text-yellow-800' : 'text-red-800'}`}>
              <div className="flex items-center justify-between">
                <span>Keywords Found: {matchedCount}/{requiredKeywords} required (Total available: {question.idealKeywords?.length || 0})</span>
                <span className="font-bold">Score: {earnedMarks}/{question.marks} marks</span>
              </div>
              <div className="text-sm mt-1">
                {matchedCount >= requiredKeywords 
                  ? `✅ Full marks awarded! Found ${matchedCount} keywords (${requiredKeywords} required)`
                  : `⚠️ Partial marks: ${((matchedCount / requiredKeywords) * 100).toFixed(1)}% of required keywords found`
                }
              </div>
            </div>
            
            {question.idealKeywords && (
              <div>
                <div className="font-medium text-gray-700 mb-2">Key concepts to include:</div>
                <div className="flex flex-wrap gap-2">
                  {question.idealKeywords.map((keyword, index) => {
                    const isIncluded = userAnswer.toLowerCase().includes(keyword.toLowerCase());
                    return (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          isIncluded 
                            ? 'bg-green-100 text-green-800 border border-green-300' 
                            : 'bg-gray-100 text-gray-600 border border-gray-300'
                        }`}
                      >
                        {isIncluded ? '✓' : '○'} {keyword}
                      </span>
                    );
                  })}
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  Note: You need {requiredKeywords} keywords for full marks, but including more shows deeper understanding.
                </div>
              </div>
            )}
          </div>

          {question.rationale && (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="font-medium text-blue-900 mb-2">Explanation:</div>
              <div className="text-blue-800">{question.rationale}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EssayQuestion;