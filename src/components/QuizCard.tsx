import React from 'react';
import { Clock, CheckCircle, Circle, Play } from 'lucide-react';
import { Quiz } from '../types/quiz';

interface QuizCardProps {
  quiz: Quiz;
  progress: number;
  score: number;
  onStart: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz, progress, score, onStart }) => {
  const isCompleted = progress === 100;

  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
      
      <div className="relative bg-white/70 backdrop-blur-sm border border-white/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{quiz.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{quiz.description}</p>
          </div>
          
          <div className="flex items-center space-x-2">
            {isCompleted ? (
              <CheckCircle className="h-6 w-6 text-green-500" />
            ) : (
              <Circle className="h-6 w-6 text-gray-300" />
            )}
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium text-gray-900">{progress}%</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Score</span>
            <span className="font-medium text-gray-900">
              {score.toFixed(1)}% (Weight: {quiz.weight}%)
            </span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{quiz.timeOptions.join(', ')} minutes available</span>
          </div>
        </div>
        
        <button
          onClick={onStart}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 group"
        >
          <Play className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
          <span>{isCompleted ? 'Retake Quiz' : 'Start Quiz'}</span>
        </button>
      </div>
    </div>
  );
};

export default QuizCard;