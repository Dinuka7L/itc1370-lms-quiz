import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, className = '' }) => {
  const percentage = Math.min((current / total) * 100, 100);
  
  return (
    <div className={`w-full bg-gray-200 rounded-full h-3 ${className}`}>
      <div 
        className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-700 relative overflow-hidden"
        style={{ width: `${percentage}%` }}
      >
        <div className="absolute inset-0 bg-white/30 animate-pulse" />
      </div>
    </div>
  );
};

export default ProgressBar;