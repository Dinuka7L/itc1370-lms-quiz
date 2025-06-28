import { Quiz } from '../../types/quiz';

export const mockFinalPart1Quiz: Quiz = {
    id: 'mock-final-1',
    title: 'Mock Final Exam - Part 1',
    description: 'Comprehensive assessment covering Python fundamentals and programming concepts',
    timeOptions: [30],
    totalMarks: 25,
    weight: 25,
    category: 'mockFinal',
    questions: [
      {
        id: 'mf1-q1',
        type: 'multipleChoice',
        question: 'What is the output of the following Python code?\n\n```python\nx = 10\ny = 3\nprint(x // y)\n```',
        options: ['3.33', '3', '4', 'Error'],
        answer: '3',
        rationale: 'The // operator performs floor division, which returns the largest integer less than or equal to the result.',
        marks: 5
      },
      {
        id: 'mf1-q2',
        type: 'multiSelect',
        question: 'Which of the following are mutable data types in Python?',
        options: ['list', 'tuple', 'dict', 'set', 'str'],
        answer: ['list', 'dict', 'set'],
        rationale: 'Lists, dictionaries, and sets are mutable in Python, while tuples and strings are immutable.',
        marks: 8
      },
      {
        id: 'mf1-q3',
        type: 'fillInBlank',
        question: 'The ________ function is used to convert a string to an integer in Python.',
        answer: 'int',
        rationale: 'The int() function converts a string representation of a number to an integer.',
        marks: 4
      },
      {
        id: 'mf1-q4',
        type: 'essay',
        question: 'Explain the difference between a while loop and a for loop in Python. Provide examples of when you would use each.',
        idealKeywords: ['iteration', 'condition', 'counter', 'sequence', 'range', 'indefinite', 'definite'],
        rationale: 'A while loop continues as long as a condition is true (indefinite iteration), while a for loop iterates over a sequence for a predetermined number of times (definite iteration). While loops are used when you don\'t know how many iterations you need, for loops are used when iterating over collections or a known range.',
        marks: 8
      }
    ]
  }