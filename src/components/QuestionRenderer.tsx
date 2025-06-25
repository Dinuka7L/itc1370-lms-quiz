import React from 'react';
import { Question } from '../types/quiz';
import MultipleChoiceQuestion from './questions/MultipleChoiceQuestion';
import MultiSelectQuestion from './questions/MultiSelectQuestion';
import FillInBlankQuestion from './questions/FillInBlankQuestion';
import EssayQuestion from './questions/EssayQuestion';
import DragDropQuestion from './questions/DragDropQuestion';
import MatchingQuestion from './questions/MatchingQuestion';
import DropdownQuestion from './questions/DropdownQuestion';

interface QuestionRendererProps {
  question: Question;
  showResults?: boolean;
}

const QuestionRenderer: React.FC<QuestionRendererProps> = ({ question, showResults = false }) => {
  const renderQuestion = () => {
    switch (question.type) {
      case 'multipleChoice':
        return <MultipleChoiceQuestion question={question} showResults={showResults} />;
      case 'multiSelect':
        return <MultiSelectQuestion question={question} showResults={showResults} />;
      case 'fillInBlank':
        return <FillInBlankQuestion question={question} showResults={showResults} />;
      case 'essay':
        return <EssayQuestion question={question} showResults={showResults} />;
      case 'dragDrop':
        return <DragDropQuestion question={question} showResults={showResults} />;
      case 'matching':
        return <MatchingQuestion question={question} showResults={showResults} />;
      case 'dropdown':
        return <DropdownQuestion question={question} showResults={showResults} />;
      default:
        return <div className="text-red-500">Unsupported question type: {question.type}</div>;
    }
  };

  const getQuestionTypeLabel = (type: string): string => {
    const labels: Record<string, string> = {
      multipleChoice: 'Multiple Choice',
      multiSelect: 'Multiple Select',
      fillInBlank: 'Fill in the Blank',
      essay: 'Essay',
      dragDrop: 'Drag & Drop',
      matching: 'Matching',
      dropdown: 'Dropdown'
    };
    return labels[type] || type;
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
            {getQuestionTypeLabel(question.type)}
          </div>
          <div className="text-sm text-gray-600">
            {question.marks} {question.marks === 1 ? 'mark' : 'marks'}
          </div>
        </div>
      </div>
      
      {renderQuestion()}
    </div>
  );
};

export default QuestionRenderer;