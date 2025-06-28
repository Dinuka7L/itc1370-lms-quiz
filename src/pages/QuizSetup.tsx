import React, { useState } from 'react';
import { Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import { useQuizStore } from '../store/quizStore';

interface QuizSetupProps {
  quizId: string;
  onStart: (timeLimit: number) => void;
  onBack: () => void;
}

const QuizSetup: React.FC<QuizSetupProps> = ({ quizId, onStart, onBack }) => {
  const { quizzes } = useQuizStore();
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  
  const quiz = quizzes.find(q => q.id === quizId);
  
  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  const handleStart = () => {
    if (selectedTime) {
      onStart(selectedTime);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <Header currentQuiz={quiz.title} onNavigateHome={onBack} />
      
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200/50">
            <div className="text-center mb-8">
              <div className="p-4 bg-primary-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-10 w-10 text-primary-600" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {quiz.title}
              </h1>
              <p className="text-gray-600 mb-6">
                {quiz.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="font-medium text-gray-900">Questions</div>
                  <div>{quiz.questions.length} questions</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="font-medium text-gray-900">Total Marks</div>
                  <div>{quiz.totalMarks} marks</div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Select Time Limit
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {quiz.timeOptions.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`
                      p-4 rounded-lg border-2 transition-all duration-200 text-center
                      ${selectedTime === time
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-200 hover:border-primary-300 hover:bg-primary-25'
                      }
                    `}
                  >
                    <div className="text-2xl font-bold mb-1">{time}</div>
                    <div className="text-sm text-gray-600">minutes</div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="text-yellow-600 mt-0.5">⚠️</div>
                <div className="text-yellow-800 text-sm">
                  <div className="font-medium mb-1">Important Instructions:</div>
                  <ul className="space-y-1">
                    <li>• Once started, the timer cannot be paused</li>
                    <li>• Your quiz will auto-submit when time expires</li>
                    <li>• You can navigate between questions freely</li>
                    <li>• Make sure you don't refresh the page while a quiz (resets everything)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Dashboard</span>
              </button>
              
              <button
                onClick={handleStart}
                disabled={!selectedTime}
                className={`
                  flex items-center space-x-2 px-8 py-3 rounded-lg font-medium transition-all duration-200
                  ${selectedTime
                    ? 'bg-primary-600 hover:bg-primary-700 text-white transform hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }
                `}
              >
                <span>Start Quiz</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizSetup;