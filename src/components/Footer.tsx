import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
          
          {/* Left Side: Contact Developer */}
          <div className="text-sm text-gray-600 flex items-center space-x-1">
            <span>© 2025 ITC Mock Quiz Platform.</span>
            <a
              href="https://www.linkedin.com/in/dinuka-liyanage/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-600 hover:underline ml-2"
            >
              <span className="mr-1">Contact Developer</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right Side: Disclaimer */}
          <div className="text-xs text-gray-500 text-right max-w-sm text-wrap">
            This application was built solely for the purpose of helping fellow students prepare for LMS-based final exams.
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
