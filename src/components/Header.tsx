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
          
          {/* Breadcrumb Navigation */}
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

          {/* Logo + Website Name on the Right */}
          <div className="flex items-center space-x-2">
            {/* Logo Image or Icon */}
            <div className="w-6 h-6 rounded-full bg-red-800 flex items-center justify-center text-white font-bold text-xs">
              👨🏻‍💻
            </div>
            {/* Website Name */}
            <div className="text-sm font-medium text-gray-700 whitespace-nowrap">
              IT-Sprint LMS
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
