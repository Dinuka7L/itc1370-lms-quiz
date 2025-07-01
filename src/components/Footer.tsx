import React from "react";
import { ArrowUpRight, Trash2 } from "lucide-react";
import { useQuizStore } from '../store/quizStore';

const Footer: React.FC = () => {
  const handleResetData = () => {
  if (window.confirm('Are you sure you want to clear all saved data? This cannot be undone.')) {
    // Clear persisted storage
    useQuizStore.persist.clearStorage();

    // Reset the in-memory state to initial default
    useQuizStore.setState(useQuizStore.getInitialState());

    // Reload the page
    window.location.reload();
  }
};

  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* About Section */}
        <div className="text-sm text-white space-y-2">
          <h3 className="font-semibold text-red-400">About This LMS</h3>
          <p>
            This Learning Management System provides interactive quizzes and study tools to help you prepare effectively for your final exams.
          </p>
          <p>
            Features include multiple question types, auto-evaluation, progress tracking, and instant feedback.
          </p>
        </div>

        {/* Disclaimer Section */}
        <div className="text-sm text-gray-300 space-y-2">
          <h3 className="font-semibold text-red-400">Data & Privacy Notice</h3>
          <p>
            Your quiz progress is saved <b>only</b> on this device using your browser's storage.
          </p>
          <p>
            If you clear your browser’s history, cookies, or site data, your progress will be permanently lost.
          </p>
          <p>
            No information is sent to any external server.
          </p>

          {/* Reset Data Button */}
          <button
            onClick={handleResetData}
            className="mt-2 inline-flex items-center text-red-300 hover:text-red-500 transition-colors duration-200"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Reset All Data
          </button>
        </div>

        {/* Contact Section */}
        <div className="text-sm text-white space-y-2 md:text-right">
          <h3 className="font-semibold text-red-400">Contact Developer</h3>
          <p>2025 Academia.</p>
          <a
            href="https://www.linkedin.com/in/dinuka-liyanage/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-red-400 hover:underline"
          >
            <span className="mr-1">Get in touch on LinkedIn</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
