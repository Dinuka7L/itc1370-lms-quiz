import { Quiz } from '../../types/quiz';

export const pythonFundamentalsQuiz: Quiz = {
  id: 'quiz-python fundamentals',
  title: 'Python Fundamentals',
  description: 'Assess your understanding of basic Python programming concepts.',
  timeOptions: [5, 10, 15],
  totalMarks: 50,
  weight: 0,
  category: 'lesson',
  questions: [
    {
      id: 'q1',
      type: 'multipleChoice',
      question: 'Which of the following data types is used to store whole numbers in Python?',
      options: ['int', 'float', 'str', 'bool'],
      answer: 'int',
      rationale: 'The "int" type is used to represent whole numbers (integers) in Python.',
      marks: 5
    },
    {
      id: 'q2',
      type: 'multiSelect',
      question: 'Which of the following are valid Python variable names?',
      options: ['my_var', '2ndPlace', 'firstName', '_total', 'class'],
      answer: ['my_var', 'firstName', '_total'],
      rationale: 'Variable names cannot begin with numbers or use reserved keywords like "class".',
      marks: 6
    },
    {
      id: 'q3',
      type: 'fillInBlank',
      question: 'In Python, the keyword used to define a function is ________.',
      answer: 'def',
      rationale: 'Functions in Python are defined using the "def" keyword.',
      marks: 4
    },
    {
      id: 'q4',
      type: 'essay',
      question: 'Describe what an IDE is and list two examples. How does it help beginner programmers?',
      idealKeywords: ['integrated development environment', 'IDLE', 'VS Code', 'debugging', 'editor', 'run code'],
      rationale: 'An IDE (Integrated Development Environment) is a software application that provides comprehensive facilities for software development. Examples include IDLE, VS Code, PyCharm, etc. IDEs help beginners by providing syntax highlighting, debugging tools, code completion, and integrated terminals.',
      marks: 8
    },
    {
      id: 'q5',
      type: 'matching',
      question: 'Match each Python concept with its correct description:',
      matchPairs: [
        { id: 'pair1', left: 'Variable', right: 'Named storage for data' },
        { id: 'pair2', left: 'Function', right: 'Reusable block of code' },
        { id: 'pair3', left: 'Boolean', right: 'Data type with True/False values' },
        { id: 'pair4', left: 'Operator', right: 'Used to perform operations on values' }
      ],
      marks: 6
    },
    {
      id: 'q6',
      type: 'dragDrop',
      question: 'Drag and drop the correct items to complete the sentence:\nIn Python, the [blank_1] operator is used for equality, while [blank_2] is used for assignment.',
      dragItems: [
        { id: 'item1', content: '==', category: 'blank_1' },
        { id: 'item2', content: '=', category: 'blank_2' }
      ],
      marks: 5
    },
    {
      id: 'q7',
      type: 'dropdown',
      question: 'Choose the correct operator to complete the expression:\n\n```python\nif age _____ 18:\n    print("you are an adult")\n```[dropdown_1]',
      dropdownBlanks: [
        {
          id: 'dropdown_1',
          options: ['>', '<', '==', '!=', '>='],
          correctAnswer: '>='
        }
      ],
      rationale: 'To check if age is 18 or older, the correct operator is ">=".',
      marks: 3
    },  
    {
      id: 'q8',
      type: 'multipleChoice',
      question: 'What will the following code print if the user enters 7?\n\n```python\na = int(input("Enter a number: "))\nif a % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")\n```',
      options: ['7', 'Even', 'Error', 'Odd'],
      answer: 'Odd',
      rationale: '7 is not divisible by 2, so the program will print "Odd".',
      marks: 5
    },
    {
      id: 'q9',
      type: 'multiSelect',
      question: 'Which of the following are examples of IDEs for Python?',
      options: ['IDLE', 'Jupyter Notebook', 'Google Colab', 'Sublime Paint', 'JDoodle'],
      answer: ['IDLE', 'Jupyter Notebook', 'Google Colab', 'JDoodle'],
      rationale: 'All options except "Sublime Paint" are commonly used IDEs or editors for Python.',
      marks: 5
    },
    {
      id: 'q10',
      type: 'fillInBlank',
      question: 'To get input from the user in Python, we use the ________ function.',
      answer: 'input',
      rationale: 'The "input()" function is used to accept input from the user.',
      marks: 3
    }
  ]
};