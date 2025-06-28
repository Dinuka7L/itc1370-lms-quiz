import { Quiz } from '../../types/quiz';

export const mockFinalPart4Quiz: Quiz = {
  id: 'mock-final-4',
  title: 'Mock Final Exam - Part 4',
  description: 'System analysis, design principles, and software development',
  timeOptions: [30, 45, 60],
  totalMarks: 25,
  weight: 25,
  category: 'mockFinal',
  questions: [
    {
      id: 'mf4-q1',
      type: 'dropdown',
      question: 'The [dropdown_1] methodology follows a sequential approach, while [dropdown_2] is iterative. [dropdown_3] focuses on individuals and interactions over processes and tools.',
      dropdownBlanks: [
        {
          id: 'dropdown_1',
          options: ['Waterfall', 'Agile', 'Scrum', 'Kanban', 'Spiral'],
          correctAnswer: 'Waterfall'
        },
        {
          id: 'dropdown_2',
          options: ['Waterfall', 'Agile', 'Scrum', 'Kanban', 'Spiral'],
          correctAnswer: 'Agile'
        },
        {
          id: 'dropdown_3',
          options: ['Waterfall', 'Agile', 'Scrum', 'Kanban', 'Spiral'],
          correctAnswer: 'Agile'
        }
      ],
      rationale: 'Waterfall is sequential, Agile is iterative and emphasizes individuals and interactions.',
      marks: 9
    },
    {
      id: 'mf4-q2',
      type: 'matching',
      question: 'Match the SDLC phase with its primary deliverable:',
      matchPairs: [
        { id: 'sdlc1', left: 'Requirements Analysis', right: 'Requirements Document' },
        { id: 'sdlc2', left: 'Design', right: 'System Architecture' },
        { id: 'sdlc3', left: 'Implementation', right: 'Source Code' },
        { id: 'sdlc4', left: 'Testing', right: 'Test Reports' }
      ],
      marks: 8
    },
    {
      id: 'mf4-q3',
      type: 'essay',
      question: 'Describe the importance of user requirements in system development. How do functional and non-functional requirements differ?',
      idealKeywords: ['stakeholder', 'functional', 'non-functional', 'performance', 'usability', 'security', 'specifications'],
      rationale: 'User requirements define what the system should do and how it should perform. Functional requirements specify system behavior and features, while non-functional requirements define quality attributes like performance, security, and usability. Both are essential for successful system development.',
      marks: 8
    }
  ]
};