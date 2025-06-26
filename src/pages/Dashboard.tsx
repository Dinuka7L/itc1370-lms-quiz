import React from 'react';
import { Award, TrendingUp, Target, GraduationCap, BookOpen } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuizCard from '../components/QuizCard';
import ProgressBar from '../components/ProgressBar';
import { useQuizStore } from '../store/quizStore';

interface DashboardProps {
  onStartQuiz: (quizId: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onStartQuiz }) => {
  const { 
    getQuizProgress, 
    getQuizScore, 
    getTotalMarksObtained,
    getTotalPossibleMarks,
    getMockFinalProgress,
    getMockFinalMarksObtained,
    getMockFinalTotalMarks,
    getLessonQuizzes,
    getMockFinalQuizzes
  } = useQuizStore();

  const lessonQuizzes = getLessonQuizzes();
  const mockFinalQuizzes = getMockFinalQuizzes();
  
  const totalMarksObtained = getTotalMarksObtained();
  const totalPossibleMarks = getTotalPossibleMarks();

  const mockFinalProgress = getMockFinalProgress();
  const mockFinalMarksObtained = getMockFinalMarksObtained();
  const mockFinalTotalMarks = getMockFinalTotalMarks();

  // Calculate lesson quiz completion
  const completedLessonQuizzes = lessonQuizzes.filter(q => getQuizProgress(q.id) === 100).length;
  const lessonQuizProgress = lessonQuizzes.length > 0 ? (completedLessonQuizzes / lessonQuizzes.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ITC1370: Information Technology for Business 
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete all quiz assessments to evaluate your understanding of IT subjects focused for the final exams. 
              Practice with lesson quizzes and test your knowledge with mock final exams.
            </p>
          </div>
          
          {/* Total Marks Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Total Marks</h2>
                  <p className="text-gray-600">Your cumulative score across all completed quizzes</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">
                  {totalMarksObtained}
                </div>
                <div className="text-sm text-gray-500">out of {totalPossibleMarks} marks</div>
              </div>
            </div>
            
            <ProgressBar 
              current={totalMarksObtained} 
              total={totalPossibleMarks} 
              className="mb-4" 
            />
            
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>
                Overall Progress: {totalPossibleMarks > 0 ? ((totalMarksObtained / totalPossibleMarks) * 100).toFixed(1) : 0}% Complete
              </span>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span>Average: {(completedLessonQuizzes + mockFinalQuizzes.filter(q => getQuizProgress(q.id) === 100).length) > 0 ? (totalMarksObtained / (completedLessonQuizzes + mockFinalQuizzes.filter(q => getQuizProgress(q.id) === 100).length)).toFixed(1) : 0} marks/quiz</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mock Final Exam Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-full">
              <GraduationCap className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Final Exam Mock Quizzes</h2>
              <p className="text-gray-600">Comprehensive practice tests to prepare for your final examination (Total: 100 marks)</p>
            </div>
          </div>

          {/* Mock Final Progress Card */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/50 rounded-xl p-6 shadow-lg mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-full">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Mock Final Exam Progress</h3>
                  <p className="text-gray-600">Your progress through the comprehensive final exam practice</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-purple-600">
                  {mockFinalMarksObtained}
                </div>
                <div className="text-sm text-gray-500">out of 100 marks</div>
              </div>
            </div>
            
            <ProgressBar 
              current={mockFinalMarksObtained} 
              total={100} 
              className="mb-4" 
            />
            
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>
                Mock Final Progress: {mockFinalProgress.toFixed(1)}% Complete ({mockFinalQuizzes.filter(q => getQuizProgress(q.id) === 100).length}/{mockFinalQuizzes.length} quizzes)
              </span>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span>Score: {mockFinalTotalMarks > 0 ? ((mockFinalMarksObtained / mockFinalTotalMarks) * 100).toFixed(1) : 0}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {mockFinalQuizzes.map((quiz) => (
              <QuizCard
                key={quiz.id}
                quiz={quiz}
                progress={getQuizProgress(quiz.id)}
                score={getQuizScore(quiz.id)}
                onStart={() => onStartQuiz(quiz.id)}
              />
            ))}
          </div>
        </div>

        {/* Lesson Quizzes Section */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-full">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Lesson Quizzes</h2>
              <p className="text-gray-600">Topic-specific assessments covering individual course modules (Practice only)</p>
            </div>
          </div>

          {/* Lesson Quiz Progress Card */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-xl p-6 shadow-lg mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Lesson Quiz Progress</h3>
                  <p className="text-gray-600">Your progress through topic-specific practice quizzes</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">
                  {completedLessonQuizzes}
                </div>
                <div className="text-sm text-gray-500">out of {lessonQuizzes.length} quizzes</div>
              </div>
            </div>
            
            <ProgressBar 
              current={completedLessonQuizzes} 
              total={lessonQuizzes.length} 
              className="mb-4" 
            />
            
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>
                Lesson Progress: {lessonQuizProgress.toFixed(1)}% Complete
              </span>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span>For practice and concept reinforcement</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {lessonQuizzes.map((quiz) => (
              <QuizCard
                key={quiz.id}
                quiz={quiz}
                progress={getQuizProgress(quiz.id)}
                score={getQuizScore(quiz.id)}
                onStart={() => onStartQuiz(quiz.id)}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;