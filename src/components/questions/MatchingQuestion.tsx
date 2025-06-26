import React, { useState, useMemo } from 'react';
import { Question, MatchPair } from '../../types/quiz';
import { useQuizStore } from '../../store/quizStore';

interface MatchingQuestionProps {
  question: Question;
  showResults?: boolean;
}

const MatchingQuestion: React.FC<MatchingQuestionProps> = ({ 
  question, 
  showResults = false 
}) => {
  const { currentAttempt, saveAnswer } = useQuizStore();
  const userAnswers = (currentAttempt?.answers[question.id] as Record<string, string>) || {};
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);

  // Memoize the shuffled right items to prevent re-shuffling on re-renders
  const shuffledRightItems = useMemo(() => {
    const rightItems = question.matchPairs?.map(p => p.right) || [];
    // Create a stable shuffle based on question ID to ensure consistency
    const items = [...rightItems];
    let seed = 0;
    for (let i = 0; i < question.id.length; i++) {
      seed += question.id.charCodeAt(i);
    }
    
    // Simple seeded shuffle
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor((seed * (i + 1)) % (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
      seed = (seed * 9301 + 49297) % 233280;
    }
    
    return items;
  }, [question.id, question.matchPairs]);

  const handleLeftClick = (leftItem: string) => {
    if (showResults) return;
    setSelectedLeft(selectedLeft === leftItem ? null : leftItem);
  };

  const handleRightClick = (rightItem: string) => {
    if (showResults || !selectedLeft) return;
    
    const newAnswers = { ...userAnswers };
    
    // Remove any existing match for this right item
    Object.keys(newAnswers).forEach(left => {
      if (newAnswers[left] === rightItem) {
        delete newAnswers[left];
      }
    });
    
    // Add new match
    newAnswers[selectedLeft] = rightItem;
    
    saveAnswer(question.id, newAnswers);
    setSelectedLeft(null);
  };

  const getMatchForLeft = (leftItem: string): string | undefined => {
    return userAnswers[leftItem];
  };

  const getCorrectMatchForLeft = (leftItem: string): string => {
    const pair = question.matchPairs?.find(p => p.left === leftItem);
    return pair?.right || '';
  };

  const isCorrectMatch = (leftItem: string): boolean => {
    return userAnswers[leftItem] === getCorrectMatchForLeft(leftItem);
  };

  const leftItems = question.matchPairs?.map(p => p.left) || [];

  return (
    <div className="space-y-6">
      <div 
        className="text-lg font-medium text-gray-900 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />
      
      <div className="text-sm text-gray-600">
        Click on items from the left column, then click on the corresponding item from the right column to create matches.
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-3">
          <div className="font-medium text-gray-700 text-center mb-4">Match these items:</div>
          {leftItems.map((leftItem, index) => {
            const isSelected = selectedLeft === leftItem;
            const matchedRight = getMatchForLeft(leftItem);
            const isMatched = !!matchedRight;
            const isCorrect = showResults && isCorrectMatch(leftItem);
            
            let itemClass = "p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ";
            
            if (showResults) {
              if (isCorrect) {
                itemClass += "border-green-500 bg-green-50 ";
              } else if (isMatched) {
                itemClass += "border-red-500 bg-red-50 ";
              } else {
                itemClass += "border-gray-300 bg-gray-50 ";
              }
            } else {
              if (isSelected) {
                itemClass += "border-primary-500 bg-primary-100 ";
              } else if (isMatched) {
                itemClass += "border-blue-500 bg-blue-50 ";
              } else {
                itemClass += "border-gray-300 hover:border-primary-300 hover:bg-primary-25 ";
              }
            }
            
            return (
              <div
                key={index}
                onClick={() => handleLeftClick(leftItem)}
                className={itemClass}
              >
                <div className="font-medium">{leftItem}</div>
                {matchedRight && (
                  <div className="text-sm text-gray-600 mt-2">
                    → {matchedRight}
                    {showResults && (
                      <span className={`ml-2 font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        {isCorrect ? '✓' : '✗'}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Right Column */}
        <div className="space-y-3">
          <div className="font-medium text-gray-700 text-center mb-4">With these items:</div>
          {shuffledRightItems.map((rightItem, index) => {
            const isUsed = Object.values(userAnswers).includes(rightItem);
            const canSelect = selectedLeft && !showResults;
            
            let itemClass = "p-4 rounded-lg border-2 transition-all duration-200 ";
            
            if (showResults) {
              itemClass += "border-gray-300 bg-gray-50 ";
            } else {
              if (canSelect) {
                itemClass += "border-primary-300 bg-primary-25 hover:border-primary-500 hover:bg-primary-50 cursor-pointer ";
              } else if (isUsed) {
                itemClass += "border-blue-300 bg-blue-25 cursor-not-allowed ";
              } else {
                itemClass += "border-gray-300 bg-gray-50 cursor-not-allowed ";
              }
            }
            
            return (
              <div
                key={index}
                onClick={() => handleRightClick(rightItem)}
                className={itemClass}
              >
                <div className="font-medium">{rightItem}</div>
                {isUsed && !showResults && (
                  <div className="text-xs text-blue-600 mt-1">Used</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {showResults && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="font-medium text-blue-900 mb-3">Correct matches:</div>
          <div className="space-y-2">
            {question.matchPairs?.map((pair, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-white rounded border">
                <span className="font-medium">{pair.left}</span>
                <span className="text-gray-500">→</span>
                <span className="font-medium">{pair.right}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchingQuestion;