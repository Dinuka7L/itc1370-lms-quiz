import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeaderProps {
  currentQuiz?: string;
}

const Header: React.FC<HeaderProps> = ({ currentQuiz }) => {
  return (
    <header className="relative bg-white/60 backdrop-blur-md border-b border-gray-200/50 shadow-md sticky top-0 z-50">
      {/* Gradient Red Overlay on Left */}
      <div className="absolute inset-y-0 left-0 w-[200px] bg-gradient-to-r from-red-500/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left Side: Large ITC1370 Text */}
          <div className="text-2xl font-bold text-gray-800 z-10">ITC1370</div>

          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm z-10">
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

            {/* Right Side: Large Website Logo Only */}
            <div className="z-10">
              <img
                src="/Academia-logo.png"
                alt="Website Logo"
                className="md:w-30 h-16 rounded-full object-cover"
              />
            </div>



        </div>
      </div>
    </header>
  );
};

export default Header;
