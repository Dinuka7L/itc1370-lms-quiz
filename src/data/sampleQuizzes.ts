import { Quiz } from '../types/quiz';

export const sampleQuizzes: Quiz[] = [
  {
  id: 'quiz-1',
  title: 'Python Fundamentals',
  description: 'Assess your understanding of basic Python programming concepts.',
  timeOptions: [5, 10, 15],
  totalMarks: 50,
  weight: 20,
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
      question: 'Choose the correct operator to complete the expression:\n\nif age [dropdown_1] 18:',
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
      question: 'What will the following code print if the user enters 7?\n\na = int(input("Enter a number: "))\nif a % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")',
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
}
,
  {
    id: 'quiz-2',
    title: 'JavaScript Essentials',
    description: 'Fundamental JavaScript concepts and programming',
    timeOptions: [10, 15, 20],
    totalMarks: 60,
    weight: 17.5,
    category: 'lesson',
    questions: [
      {
        id: 'js1',
        type: 'multipleChoice',
        question: 'Which of the following is the correct way to declare a variable in JavaScript?',
        options: ['var myVar;', 'variable myVar;', 'v myVar;', 'declare myVar;'],
        answer: 'var myVar;',
        rationale: 'In JavaScript, variables are declared using var, let, or const keywords.',
        marks: 5
      },
      {
        id: 'js2',
        type: 'dropdown',
        question: 'In JavaScript, the [dropdown_1] method adds elements to the end of an array, while [dropdown_2] removes the last element. The [dropdown_3] method is used to combine arrays.',
        dropdownBlanks: [
          {
            id: 'dropdown_1',
            options: ['push()', 'pop()', 'shift()', 'unshift()', 'concat()'],
            correctAnswer: 'push()'
          },
          {
            id: 'dropdown_2',
            options: ['push()', 'pop()', 'shift()', 'unshift()', 'concat()'],
            correctAnswer: 'pop()'
          },
          {
            id: 'dropdown_3',
            options: ['push()', 'pop()', 'shift()', 'unshift()', 'concat()'],
            correctAnswer: 'concat()'
          }
        ],
        rationale: 'push() adds elements to the end, pop() removes from the end, and concat() combines arrays.',
        marks: 10
      },
      {
        id: 'js3',
        type: 'dragDrop',
        question: 'In Python, the data structure used to store data temporarily is called a [blank_1]. The [blank_2] function is used to get user input, and [blank_3] is used to display output to the console.',
        dragItems: [
          { id: 'concept1', content: 'variable', category: 'blank_1' },
          { id: 'concept2', content: 'input()', category: 'blank_2' },
          { id: 'concept3', content: 'print()', category: 'blank_3' }
        ],
        marks: 10
      },
      {
        id: 'js4',
        type: 'essay',
        question: 'Explain the concept of closures in JavaScript with an example.',
        idealKeywords: ['scope', 'function', 'inner', 'outer', 'variable', 'access', 'lexical'],
        marks: 20
      },
      {
        id: 'js5',
        type: 'multiSelect',
        question: 'Which of the following are JavaScript data types?',
        options: ['string', 'number', 'boolean', 'undefined', 'null', 'symbol', 'integer'],
        answer: ['string', 'number', 'boolean', 'undefined', 'null', 'symbol'],
        rationale: 'JavaScript has primitive data types: string, number, boolean, undefined, null, symbol, and bigint. Integer is not a separate data type in JavaScript.',
        marks: 10
      },
      {
        id: 'js6',
        type: 'matching',
        question: 'Match the array methods with their descriptions:',
        matchPairs: [
          { id: 'method1', left: 'map()', right: 'Creates new array with transformed elements' },
          { id: 'method2', left: 'filter()', right: 'Creates new array with elements that pass test' },
          { id: 'method3', left: 'reduce()', right: 'Reduces array to single value' },
          { id: 'method4', left: 'forEach()', right: 'Executes function for each element' }
        ],
        marks: 5
      }
    ]
  },
  {
    id: 'quiz-3',
    title: 'Database Design & SQL',
    description: 'Database concepts, design principles, and SQL queries',
    timeOptions: [15, 20, 25],
    totalMarks: 70,
    weight: 17.5,
    category: 'lesson',
    questions: [
      {
        id: 'db1',
        type: 'multipleChoice',
        question: 'What does SQL stand for?',
        options: [
          'Structured Query Language',
          'Simple Query Language',
          'Standard Query Language',
          'System Query Language'
        ],
        answer: 'Structured Query Language',
        rationale: 'SQL stands for Structured Query Language, used for managing relational databases.',
        marks: 5
      },
      {
        id: 'db2',
        type: 'dragDrop',
        question: 'In database design, the process of organizing data to reduce [blank_1] is called normalization. The [blank_2] constraint ensures each record is unique, while [blank_3] links tables together.',
        dragItems: [
          { id: 'db_concept1', content: 'redundancy', category: 'blank_1' },
          { id: 'db_concept2', content: 'PRIMARY KEY', category: 'blank_2' },
          { id: 'db_concept3', content: 'FOREIGN KEY', category: 'blank_3' }
        ],
        marks: 15
      },
      {
        id: 'db3',
        type: 'dropdown',
        question: 'The SQL command [dropdown_1] is used to retrieve data, [dropdown_2] is used to add new records, and [dropdown_3] is used to modify existing data.',
        dropdownBlanks: [
          {
            id: 'dropdown_1',
            options: ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'CREATE'],
            correctAnswer: 'SELECT'
          },
          {
            id: 'dropdown_2',
            options: ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'CREATE'],
            correctAnswer: 'INSERT'
          },
          {
            id: 'dropdown_3',
            options: ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'CREATE'],
            correctAnswer: 'UPDATE'
          }
        ],
        rationale: 'SELECT retrieves data, INSERT adds new records, and UPDATE modifies existing data.',
        marks: 15
      },
      {
        id: 'db4',
        type: 'essay',
        question: 'Explain the concept of database normalization and its benefits.',
        idealKeywords: ['redundancy', 'integrity', 'consistency', '1NF', '2NF', '3NF', 'anomalies'],
        marks: 25
      },
      {
        id: 'db5',
        type: 'matching',
        question: 'Match the database constraints with their purposes:',
        matchPairs: [
          { id: 'constraint1', left: 'PRIMARY KEY', right: 'Uniquely identifies each record' },
          { id: 'constraint2', left: 'FOREIGN KEY', right: 'Links to primary key of another table' },
          { id: 'constraint3', left: 'NOT NULL', right: 'Ensures field cannot be empty' },
          { id: 'constraint4', left: 'UNIQUE', right: 'Ensures all values are different' }
        ],
        marks: 10
      }
    ]
  },
  {
    id: 'quiz-4',
    title: 'System Analysis & Design',
    description: 'Software development lifecycle and system design principles',
    timeOptions: [15, 20, 30],
    totalMarks: 80,
    weight: 17.5,
    category: 'lesson',
    questions: [
      {
        id: 'sad1',
        type: 'essay',
        question: 'Compare and contrast Waterfall and Agile software development methodologies.',
        idealKeywords: ['sequential', 'iterative', 'flexibility', 'documentation', 'testing', 'requirements'],
        marks: 30
      },
      {
        id: 'sad2',
        type: 'dropdown',
        question: 'In the Software Development Life Cycle, [dropdown_1] comes first, followed by [dropdown_2], then [dropdown_3], and finally [dropdown_4].',
        dropdownBlanks: [
          {
            id: 'dropdown_1',
            options: ['Requirements Analysis', 'Design', 'Implementation', 'Testing', 'Maintenance'],
            correctAnswer: 'Requirements Analysis'
          },
          {
            id: 'dropdown_2',
            options: ['Requirements Analysis', 'Design', 'Implementation', 'Testing', 'Maintenance'],
            correctAnswer: 'Design'
          },
          {
            id: 'dropdown_3',
            options: ['Requirements Analysis', 'Design', 'Implementation', 'Testing', 'Maintenance'],
            correctAnswer: 'Implementation'
          },
          {
            id: 'dropdown_4',
            options: ['Requirements Analysis', 'Design', 'Implementation', 'Testing', 'Maintenance'],
            correctAnswer: 'Testing'
          }
        ],
        rationale: 'The typical SDLC phases follow this sequential order, though some methodologies may overlap or iterate.',
        marks: 20
      },
      {
        id: 'sad3',
        type: 'dragDrop',
        question: 'In software engineering, the process of breaking down complex systems into smaller parts is called [blank_1]. The [blank_2] diagram shows system interactions, while [blank_3] testing verifies individual components.',
        dragItems: [
          { id: 'sad_concept1', content: 'decomposition', category: 'blank_1' },
          { id: 'sad_concept2', content: 'use case', category: 'blank_2' },
          { id: 'sad_concept3', content: 'unit', category: 'blank_3' }
        ],
        marks: 15
      },
      {
        id: 'sad4',
        type: 'multiSelect',
        question: 'Which of the following are UML diagram types?',
        options: ['Use Case Diagram', 'Class Diagram', 'Sequence Diagram', 'Entity Relationship Diagram', 'Activity Diagram'],
        answer: ['Use Case Diagram', 'Class Diagram', 'Sequence Diagram', 'Activity Diagram'],
        rationale: 'Use Case, Class, Sequence, and Activity diagrams are UML diagram types. ERD is not a UML diagram.',
        marks: 12
      },
      {
        id: 'sad5',
        type: 'matching',
        question: 'Match the SDLC phases with their primary activities:',
        matchPairs: [
          { id: 'phase1', left: 'Analysis', right: 'Understanding requirements' },
          { id: 'phase2', left: 'Design', right: 'Creating system architecture' },
          { id: 'phase3', left: 'Implementation', right: 'Writing code' },
          { id: 'phase4', left: 'Testing', right: 'Finding and fixing bugs' }
        ],
        marks: 3
      }
    ]
  },
  // Mock Final Exam Quizzes
  {
    id: 'mock-final-1',
    title: 'Mock Final Exam - Part 1',
    description: 'Comprehensive assessment covering Python fundamentals and programming concepts',
    timeOptions: [30, 45, 60],
    totalMarks: 25,
    weight: 25,
    category: 'mockFinal',
    questions: [
      {
        id: 'mf1-q1',
        type: 'multipleChoice',
        question: 'What is the output of the following Python code?\n\nx = 10\ny = 3\nprint(x // y)',
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
        marks: 8
      }
    ]
  },
  {
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
  },
  {
    id: 'mock-final-3',
    title: 'Mock Final Exam - Part 3',
    description: 'Database concepts and SQL fundamentals',
    timeOptions: [30, 45, 60],
    totalMarks: 25,
    weight: 25,
    category: 'mockFinal',
    questions: [
      {
        id: 'mf3-q1',
        type: 'multipleChoice',
        question: 'Which SQL command is used to retrieve data from a database?',
        options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
        answer: 'SELECT',
        rationale: 'SELECT is the SQL command used to query and retrieve data from database tables.',
        marks: 5
      },
      {
        id: 'mf3-q2',
        type: 'essay',
        question: 'Explain the concept of database normalization. Why is it important and what problems does it solve?',
        idealKeywords: ['redundancy', 'consistency', 'integrity', 'anomalies', '1NF', '2NF', '3NF', 'dependencies'],
        marks: 12
      },
      {
        id: 'mf3-q3',
        type: 'fillInBlank',
        question: 'A ________ key uniquely identifies each record in a database table.',
        answer: 'primary',
        rationale: 'A primary key is a unique identifier for each record in a database table.',
        marks: 4
      },
      {
        id: 'mf3-q4',
        type: 'multiSelect',
        question: 'Which of the following are valid SQL data types?',
        options: ['VARCHAR', 'INTEGER', 'BOOLEAN', 'DATE', 'FLOAT', 'STRING'],
        answer: ['VARCHAR', 'INTEGER', 'BOOLEAN', 'DATE', 'FLOAT'],
        rationale: 'All options except STRING are valid SQL data types. VARCHAR is used for variable-length strings.',
        marks: 4
      }
    ]
  },
  {
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
        marks: 8
      }
    ]
  }
];