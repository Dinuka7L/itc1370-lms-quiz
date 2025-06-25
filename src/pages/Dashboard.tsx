import React from 'react';
import { Award, TrendingUp, Target } from 'lucide-react';
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
    quizzes, 
    getQuizProgress, 
    getQuizScore, 
    getTotalWeightedProgress,
    getTotalMarksObtained,
    getTotalPossibleMarks
  } = useQuizStore();

  const totalWeightedProgress = getTotalWeightedProgress();
  const totalMarksObtained = getTotalMarksObtained();
  const totalPossibleMarks = getTotalPossibleMarks();
  const totalWeight = quizzes.reduce((sum, quiz) => sum + quiz.weight, 0);

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
                  <p className="text-gray-600">Your weighted progress across all quizzes</p>
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
                  <span>Average: {quizzes.length > 0 ? (totalMarksObtained / quizzes.filter(q => getQuizProgress(q.id) === 100).length || 0).toFixed(1) : 0} marks/quiz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {quizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              progress={getQuizProgress(quiz.id)}
              score={getQuizScore(quiz.id)}
              onStart={() => onStartQuiz(quiz.id)}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;