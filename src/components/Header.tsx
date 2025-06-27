import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeaderProps {
  currentQuiz?: string;
}

const Header: React.FC<HeaderProps> = ({ currentQuiz }) => {
  return (
    <header className="relative bg-white/60 backdrop-blur-md border-b border-gray-200/50 shadow-md sticky top-0 z-50">
      {/* Gradient Red Overlay on Left */}
      <div className="absolute inset-y-0 left-0 w-[150px] sm:w-[200px] bg-gradient-to-r from-red-500/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between min-h-[4rem] gap-y-2">

          {/* Left Side: Large ITC1370 Text */}
          <div className="text-xl sm:text-2xl font-bold text-gray-800 z-10">
            ITC1370
          </div>

          {/* Breadcrumb Navigation */}
          <nav className="flex flex-wrap items-center space-x-1 sm:space-x-2 text-xs sm:text-sm z-10 overflow-x-auto max-w-full">
            <span className="text-gray-600 whitespace-nowrap">Year I</span>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
            <span className="text-gray-600 whitespace-nowrap">Semester I</span>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
            <span className="text-gray-600 whitespace-nowrap">ITC 1370</span>
            {currentQuiz && (
              <>
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                <span className="bg-primary-600 text-white px-2 sm:px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap">
                  {currentQuiz}
                </span>
              </>
            )}
          </nav>

          {/* Right Side: Website Logo Only */}
          <div className="z-10 shrink-0">
            <img
              src="/Academia-logo.png"
              alt="Website Logo"
              className="w-12 sm:w-16 md:w-20 h-auto rounded-full object-cover"
            />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
