import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface HeaderProps {
  currentQuiz?: string;
}

const Header: React.FC<HeaderProps> = ({ currentQuiz }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <nav className="flex items-center space-x-2 text-sm">
            <Home className="h-4 w-4 text-gray-500" />
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">Year I</span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">Semester I</span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">ITC 1370</span>
            {currentQuiz && (
              <>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {currentQuiz}
                </span>
              </>
            )}
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              ITC1370 Mock Final Exam Practice LMS - Non Offical
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;