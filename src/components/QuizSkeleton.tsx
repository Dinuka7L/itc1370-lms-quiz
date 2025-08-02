import React from 'react';

const QuizSkeleton: React.FC = () => {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-xl p-6 shadow-lg animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded mb-4 w-full"></div>
        </div>
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between text-sm">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2"></div>

        <div className="flex items-center justify-between text-sm">
          <div className="h-4 bg-gray-200 rounded w-12"></div>
          <div className="h-4 bg-gray-200 rounded w-16"></div>
        </div>

        <div className="flex items-center text-sm">
          <div className="w-4 h-4 bg-gray-200 rounded mr-1"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>
      </div>

      <div className="w-full h-12 bg-gray-300 rounded-lg"></div>
    </div>
  );
};

export default QuizSkeleton;