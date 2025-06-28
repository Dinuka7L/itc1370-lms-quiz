import { Quiz } from '../../types/quiz';

export const mockFinalPart2Quiz: Quiz = {
    id: 'mock-final-2',
    title: 'Mock Final Exam - Part 2',
    description: 'Advanced programming concepts and data structures',
    timeOptions: [30, 45, 60],
    totalMarks: 25,
    weight: 25,
    category: 'mockFinal',
    questions: [
      {
        id: 'mf2-q1',
        type: 'dragDrop',
        question: 'Complete the function definition: A [blank_1] is a collection of statements that perform a specific task. Functions help in code [blank_2] and make programs more [blank_3].',
        dragItems: [
          { id: 'func1', content: 'function', category: 'blank_1' },
          { id: 'func2', content: 'reusability', category: 'blank_2' },
          { id: 'func3', content: 'modular', category: 'blank_3' }
        ],
        marks: 10
      },
      {
        id: 'mf2-q2',
        type: 'dropdown',
        question: 'In Python, [dropdown_1] is used to handle exceptions, [dropdown_2] contains the code that might raise an exception, and [dropdown_3] contains cleanup code.',
        dropdownBlanks: [
          {
            id: 'dropdown_1',
            options: ['try-except', 'if-else', 'while', 'for', 'def'],
            correctAnswer: 'try-except'
          },
          {
            id: 'dropdown_2',
            options: ['try', 'except', 'finally', 'else', 'raise'],
            correctAnswer: 'try'
          },
          {
            id: 'dropdown_3',
            options: ['try', 'except', 'finally', 'else', 'raise'],
            correctAnswer: 'finally'
          }
        ],
        rationale: 'Exception handling uses try-except blocks, with try containing risky code and finally containing cleanup code.',
        marks: 9
      },
      {
        id: 'mf2-q3',
        type: 'matching',
        question: 'Match the Python data structure with its characteristics:',
        matchPairs: [
          { id: 'ds1', left: 'List', right: 'Ordered, mutable, allows duplicates' },
          { id: 'ds2', left: 'Tuple', right: 'Ordered, immutable, allows duplicates' },
          { id: 'ds3', left: 'Set', right: 'Unordered, mutable, no duplicates' },
          { id: 'ds4', left: 'Dictionary', right: 'Key-value pairs, mutable, keys unique' }
        ],
        marks: 6
      }
    ]
  }