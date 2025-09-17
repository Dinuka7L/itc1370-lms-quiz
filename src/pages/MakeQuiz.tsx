import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Quiz, Question } from '../types/quiz';

const defaultQuiz: Omit<Quiz, 'questions'> = {
  id: '',
  title: '',
  description: '',
  timeOptions: [],
  totalMarks: 0,
  weight: 0,
  category: 'lesson',
};


export default function MakeQuiz() {
  const [quiz, setQuiz] = useState<Omit<Quiz, 'questions'>>(defaultQuiz);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  // MCQ form state
  const [mcqForm, setMcqForm] = useState({
    question: '',
    options: ['', '', '', ''],
    answer: '',
    marks: 1,
    image: '',
    imageAlt: '',
  });

  // Handlers for quiz metadata
  const handleQuizChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (name === 'timeOptions') {
      // Accept comma-separated values and convert to number[]
      setQuiz((prev) => ({
        ...prev,
        timeOptions: value.split(',').map((v) => Number(v.trim())).filter((v) => !isNaN(v)),
      }));
    } else {
      setQuiz((prev) => ({
        ...prev,
        [name]: type === 'number' ? Number(value) : value,
      }));
    }
  };

  // Add question logic (to be expanded)
  const handleAddQuestion = () => {
    setEditingIndex(null);
    setMcqForm({ question: '', options: ['', '', '', ''], answer: '', marks: 1, image: '', imageAlt: '' });
    setShowQuestionForm(true);
  };

  const handleEditQuestion = (index: number) => {
    const q = questions[index];
    if (q.type === 'multipleChoice') {
      setMcqForm({
        question: q.question,
        options: q.options ? [...q.options] : ['', '', '', ''],
        answer: typeof q.answer === 'string' ? q.answer : '',
        marks: q.marks,
        image: q.image || '',
        imageAlt: q.imageAlt || '',
      });
      setEditingIndex(index);
      setShowQuestionForm(true);
    }
  };

  const handleDeleteQuestion = (index: number) => {
    setQuestions(qs => qs.filter((_, i) => i !== index));
  };

  const handleMcqFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMcqForm(prev => ({ ...prev, [name]: value }));
  };

  const handleOptionChange = (idx: number, value: string) => {
    setMcqForm(prev => {
      const newOptions = [...prev.options];
      newOptions[idx] = value;
      return { ...prev, options: newOptions };
    });
  };

  const handleSaveMcq = () => {
    const newQuestion: Question = {
      id: editingIndex !== null ? questions[editingIndex].id : uuidv4(),
      type: 'multipleChoice',
      question: mcqForm.question,
      options: mcqForm.options,
      answer: mcqForm.answer,
      marks: mcqForm.marks,
      image: mcqForm.image || undefined,
      imageAlt: mcqForm.imageAlt || undefined,
    };
    if (editingIndex !== null) {
      setQuestions(qs => qs.map((q, i) => (i === editingIndex ? newQuestion : q)));
    } else {
      setQuestions(qs => [...qs, newQuestion]);
    }
    setShowQuestionForm(false);
    setEditingIndex(null);
    setMcqForm({ question: '', options: ['', '', '', ''], answer: '', marks: 1, image: '', imageAlt: '' });
  };

  // Download quiz as JSON
  const handleDownload = () => {
    const quizData: Quiz = { ...quiz, questions };
    const blob = new Blob([JSON.stringify(quizData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${quiz.id || 'quiz'}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col transition-colors duration-300">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-600/50 transition-colors duration-300 mt-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300 text-center">Create a New Quiz</h1>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <input name="id" value={quiz.id} onChange={handleQuizChange} placeholder="Quiz ID" className="input input-bordered" />
              <input name="title" value={quiz.title} onChange={handleQuizChange} placeholder="Title" className="input input-bordered" />
              <input name="description" value={quiz.description} onChange={handleQuizChange} placeholder="Description" className="input input-bordered" />
              <input name="category" value={quiz.category} onChange={handleQuizChange} placeholder="Category (lesson/mockFinal)" className="input input-bordered" />
              <input name="timeOptions" value={quiz.timeOptions.join(',')} onChange={handleQuizChange} placeholder="Time options (comma separated, e.g. 10,20,30)" className="input input-bordered" />
              <input name="totalMarks" value={quiz.totalMarks} onChange={handleQuizChange} placeholder="Total Marks" type="number" className="input input-bordered" />
              <input name="weight" value={quiz.weight} onChange={handleQuizChange} placeholder="Weight" type="number" className="input input-bordered" />
            </div>
            <div className="mb-4 flex justify-between items-center">
              <h2 className="font-semibold text-lg">Questions</h2>
              <button className="btn btn-primary border-2 border-primary-600 dark:border-primary-400 shadow-sm hover:shadow-lg focus:ring-2 focus:ring-primary-300 transition-all duration-200" onClick={handleAddQuestion}>
                <span className="font-semibold tracking-wide">+ Add Question</span>
              </button>
            </div>
            <div className="mb-4">
              {questions.length === 0 && <div className="text-gray-500">No questions added yet.</div>}
              <ul>
                {questions.map((q, i) => (
                  <li key={i} className="mb-2 border-b border-gray-200 py-2 flex items-center justify-between">
                    <span>{q.type === 'multipleChoice' ? 'MCQ' : q.type}: {q.question || 'Untitled Question'}</span>
                    <div className="flex gap-2">
                      <button className="btn btn-xs btn-outline" onClick={() => handleEditQuestion(i)}>Edit</button>
                      <button className="btn btn-xs btn-error" onClick={() => handleDeleteQuestion(i)}>Delete</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="btn btn-success w-full border-2 border-green-600 dark:border-green-400 shadow-sm hover:shadow-lg focus:ring-2 focus:ring-green-300 transition-all duration-200 font-semibold tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
              onClick={handleDownload}
              disabled={questions.length === 0 || !quiz.id}
            >
              <span>⬇ Download Quiz JSON</span>
            </button>
            {/* Question form modal (to be implemented) */}
            {showQuestionForm && (
              <div className="fixed inset-0 bg-black/40 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-colors duration-300">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl w-full max-w-lg transition-colors duration-300">
                  <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{editingIndex !== null ? 'Edit' : 'Add'} MCQ</h3>
                  <div className="space-y-4">
                    <div className="mb-4">
                      <label className="block font-semibold mb-2 text-primary-700 dark:text-primary-300">Question</label>
                      <textarea
                        name="question"
                        value={mcqForm.question}
                        onChange={handleMcqFormChange}
                        className="input input-bordered w-full min-h-[60px] border-2 border-primary-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200"
                        placeholder="Enter question..."
                        autoFocus
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block font-semibold mb-2 text-primary-700 dark:text-primary-300">Options</label>
                      <div className="grid grid-cols-1 gap-2">
                        {mcqForm.options.map((opt, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/40 rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-700">
                            <span className="font-bold text-gray-500 dark:text-gray-400 mr-2">{String.fromCharCode(65 + idx)}.</span>
                            <input
                              type="text"
                              className="input input-bordered flex-1 border-2 border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200"
                              value={opt}
                              onChange={e => handleOptionChange(idx, e.target.value)}
                              placeholder={`Option ${String.fromCharCode(65 + idx)}`}
                            />
                            <input
                              type="radio"
                              name="answer"
                              checked={mcqForm.answer === opt}
                              onChange={() => setMcqForm(prev => ({ ...prev, answer: opt }))}
                              className="radio radio-primary border-2 border-primary-500"
                              title="Mark as correct answer"
                            />
                            <span className="text-xs text-primary-700 dark:text-primary-300">Correct</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4 mb-4">
                      <div className="flex-1">
                        <label className="block font-semibold mb-2 text-primary-700 dark:text-primary-300">Marks</label>
                        <input
                          type="number"
                          name="marks"
                          value={mcqForm.marks}
                          min={1}
                          onChange={handleMcqFormChange}
                          className="input input-bordered w-full border-2 border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block font-semibold mb-2 text-primary-700 dark:text-primary-300">Image (optional)</label>
                        <input
                          type="text"
                          name="image"
                          value={mcqForm.image}
                          onChange={handleMcqFormChange}
                          className="input input-bordered w-full border-2 border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200"
                          placeholder="Image URL"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block font-semibold mb-2 text-primary-700 dark:text-primary-300">Image Alt Text (optional)</label>
                      <input
                        type="text"
                        name="imageAlt"
                        value={mcqForm.imageAlt}
                        onChange={handleMcqFormChange}
                        className="input input-bordered w-full border-2 border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200"
                        placeholder="Alt text for accessibility"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-8">
                    <button
                      className="btn btn-secondary border-2 border-gray-400 hover:border-gray-600 shadow-sm hover:shadow-lg focus:ring-2 focus:ring-gray-300 transition-all duration-200"
                      onClick={() => setShowQuestionForm(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="btn btn-primary border-2 border-primary-600 dark:border-primary-400 shadow-sm hover:shadow-lg focus:ring-2 focus:ring-primary-300 transition-all duration-200 font-semibold"
                      onClick={handleSaveMcq}
                      disabled={!mcqForm.question || mcqForm.options.some(opt => !opt) || !mcqForm.answer}
                    >
                      {editingIndex !== null ? 'Update' : 'Save'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
