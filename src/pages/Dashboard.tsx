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
    getTotalWeightedProgress,
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
  
  const totalWeightedProgress = getTotalWeightedProgress();
  const totalMarksObtained = getTotalMarksObtained();
  const totalPossibleMarks = getTotalPossibleMarks();
  const totalWeight = lessonQuizzes.reduce((sum, quiz) => sum + quiz.weight, 0);

  const mockFinalProgress = getMockFinalProgress();
  const mockFinalMarksObtained = getMockFinalMarksObtained();
  const mockFinalTotalMarks = getMockFinalTotalMarks();

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
              Each quiz contributes to your overall grade.
            </p>
          </div>
          
          {/* Overall Progress Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 rounded-full">
                  <TrendingUp className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Overall Progress</h2>
                  <p className="text-gray-600">Your weighted progress across all lesson quizzes</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary-600">
                  {totalWeightedProgress.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-500">of {totalWeight}% total weight</div>
              </div>
            </div>
            
            <ProgressBar current={totalWeightedProgress} total={100} className="mb-4" />
            
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Weighted Progress: {totalWeightedProgress.toFixed(1)}% Complete</span>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span>Target: 100%</span>
                </div>
              </div>
            </div>
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
                Marks Progress: {totalPossibleMarks > 0 ? ((totalMarksObtained / totalPossibleMarks) * 100).toFixed(1) : 0}% Complete
              </span>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span>Average: {lessonQuizzes.length > 0 ? (totalMarksObtained / lessonQuizzes.filter(q => getQuizProgress(q.id) === 100).length || 0).toFixed(1) : 0} marks/quiz</span>
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
              <p className="text-gray-600">Comprehensive practice tests to prepare for your final examination</p>
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
              <p className="text-gray-600">Topic-specific assessments covering individual course modules</p>
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