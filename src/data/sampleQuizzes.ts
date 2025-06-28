import { Quiz } from '../types/quiz';

export const sampleQuizzes: Quiz[] = [
  {
  id: 'quiz-1',
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
}
,
{
  "id": "quiz-2",
  "title": "Networking and Communication Fundamentals",
  "description": "A comprehensive quiz covering key concepts in networking and communication, including network types, devices, protocols, and applications.",
  "timeOptions": [10,25,35],
  "totalMarks": 60,
  "weight": 0,
  "category": "lesson",
  "questions": [
    {
      "id": "q1",
      "type": "multipleChoice",
      "question": "Which of the following is NOT a type of wired networking media?",
      "options": ["Twisted-pair cable", "Coaxial cable", "Fiber-optic cable", "Wi-Fi"],
      "answer": "Wi-Fi",
      "rationale": "Wi-Fi is a wireless networking medium, not a wired one.",
      "marks": 2
    },
    {
      "id": "q2",
      "type": "fillInBlank",
      "question": "A ________ is a device that connects multiple devices together and forwards packets within a local network.",
      "answer": "Switch",
      "rationale": "A switch connects devices and forwards packets based on their destination within the local network.",
      "marks": 2
    },
    {
      "id": "q3",
      "type": "multipleChoice",
      "question": "What does LAN stand for?",
      "options": ["Local Area Network", "Large Area Network", "Low Access Network", "Linked Area Network"],
      "answer": "Local Area Network",
      "rationale": "LAN stands for Local Area Network, which connects devices in a limited geographical area.",
      "marks": 2
    },
    {
      "id": "q4",
      "type": "multiSelect",
      "question": "Which of the following are examples of wireless networking media?",
      "options": ["Bluetooth", "Wi-Fi", "Coaxial cable", "Microwave"],
      "answer": ["Bluetooth", "Wi-Fi", "Microwave"],
      "rationale": "Bluetooth, Wi-Fi, and Microwave are all wireless media; coaxial cable is wired.",
      "marks": 3
    },
    {
      "id": "q5",
      "type": "fillInBlank",
      "question": "The protocol used for transferring files over the Internet is ________.",
      "answer": "FTP",
      "rationale": "FTP (File Transfer Protocol) is used for file transfers.",
      "marks": 2
    },
    {
      "id": "q6",
      "type": "multipleChoice",
      "question": "Which device manages the flow of data between different networks?",
      "options": ["Switch", "Router", "Hub", "Access Point"],
      "answer": "Router",
      "rationale": "A router directs data between networks.",
      "marks": 2
    },
    {
      "id": "q7",
      "type": "matching",
      "question": "Match the network type with its typical coverage area.",
      "matchPairs": [
        { "id": "pair1", "left": "PAN", "right": "Personal workspace" },
        { "id": "pair2", "left": "LAN", "right": "Office building" },
        { "id": "pair3", "left": "WAN", "right": "Large geographic area" }
      ],
      "marks": 3
    },
    {
      "id": "q8",
      "type": "multipleChoice",
      "question": "Which networking standard is most widely used for wired LANs?",
      "options": ["Ethernet", "Wi-Fi", "Bluetooth", "NFC"],
      "answer": "Ethernet",
      "rationale": "Ethernet is the standard for wired LANs.",
      "marks": 2
    },
    {
      "id": "q9",
      "type": "fillInBlank",
      "question": "A ________ is a private, secure path across a public network for authorized users.",
      "answer": "VPN",
      "rationale": "VPN stands for Virtual Private Network.",
      "marks": 2
    },
    {
      "id": "q10",
      "type": "multiSelect",
      "question": "Which of the following are communication protocols?",
      "options": ["TCP/IP", "HTTP", "Ethernet", "SMTP"],
      "answer": ["TCP/IP", "HTTP", "SMTP"],
      "rationale": "TCP/IP, HTTP, and SMTP are communication protocols; Ethernet is a networking standard.",
      "marks": 3
    },
    {
      "id": "q11",
      "type": "dropdown",
      "question": "The [dropdown_1] protocol is used to send emails over the Internet.",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["FTP", "SMTP", "HTTP", "TCP"],
          "correctAnswer": "SMTP"
        }
      ],
      "rationale": "SMTP (Simple Mail Transfer Protocol) is used for sending emails.",
      "marks": 2
    },
    {
      "id": "q12",
      "type": "multipleChoice",
      "question": "What does DNS stand for?",
      "options": ["Domain Name System", "Data Network Service", "Direct Network Setup", "Digital Name Server"],
      "answer": "Domain Name System",
      "rationale": "DNS translates domain names to IP addresses.",
      "marks": 2
    },
    {
      "id": "q13",
      "type": "fillInBlank",
      "question": "The unique identification number assigned to every device on the Internet is called an ________.",
      "answer": "IP address",
      "rationale": "An IP address uniquely identifies each device on the Internet.",
      "marks": 2
    },
    {
      "id": "q14",
      "type": "dragDrop",
      "question": "Drag and drop the correct network types:\n\n[blank_1] connects devices in a city, while [blank_2] connects devices in a home.",
      "dragItems": [
        { "id": "item1", "content": "MAN", "category": "blank_1" },
        { "id": "item2", "content": "LAN", "category": "blank_2" }
      ],
      "marks": 3
    },
    {
      "id": "q15",
      "type": "multipleChoice",
      "question": "Which of the following is a function of a Wireless Access Point (WAP)?",
      "options": [
        "Connects wireless devices to a wired network",
        "Assigns IP addresses",
        "Stores user data",
        "Monitors network traffic"
      ],
      "answer": "Connects wireless devices to a wired network",
      "rationale": "A WAP connects wireless devices to a wired LAN.",
      "marks": 2
    },
    {
      "id": "q16",
      "type": "multiSelect",
      "question": "Which are examples of collaborative computing applications?",
      "options": ["Google Docs", "Zoom", "Microsoft Word", "Slack"],
      "answer": ["Google Docs", "Slack"],
      "rationale": "Google Docs and Slack enable collaborative work.",
      "marks": 3
    },
    {
      "id": "q17",
      "type": "fillInBlank",
      "question": "The ________ protocol is used for secure file transfers.",
      "answer": "SFTP",
      "rationale": "SFTP (Secure File Transfer Protocol) is used for secure file transfers.",
      "marks": 2
    },
    {
      "id": "q18",
      "type": "essay",
      "question": "Explain the difference between client-server and peer-to-peer network architectures.",
      "idealKeywords": ["central server", "clients", "direct access", "functional level", "cost", "complexity"],
      "rationale": "Client-server architecture uses a central server to manage resources and provide services to client computers, while peer-to-peer allows direct communication between computers without a central server. Client-server offers better security and centralized management but is more expensive, while P2P is simpler and cheaper but less secure.",
      "marks": 5
    },
    {
      "id": "q19",
      "type": "multipleChoice",
      "question": "Which technology allows short-range communication between compatible devices, such as contactless payments?",
      "options": ["Wi-Fi", "Bluetooth", "NFC", "Ethernet"],
      "answer": "NFC",
      "rationale": "NFC (Near Field Communication) is used for short-range communication.",
      "marks": 2
    },
    {
      "id": "q20",
      "type": "fillInBlank",
      "question": "The latest generation and standard for wireless networking is ________.",
      "answer": "Wi-Fi 6",
      "rationale": "Wi-Fi 6 is the latest wireless networking standard.",
      "marks": 2
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
        rationale: 'User requirements define what the system should do and how it should perform. Functional requirements specify system behavior and features, while non-functional requirements define quality attributes like performance, security, and usability. Both are essential for successful system development.',
        marks: 8
      }
    ]
  }
];