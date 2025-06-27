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
}
,
{
  "id": "quiz-3",
  "title": "Information Systems Security",
  "description": "A quiz assessing knowledge of key concepts in information systems security, including threats, the CIA triad, malware, attackers, and security strategies.",
  "timeOptions": [10,25,35],
  "totalMarks": 60,
  "weight": 0,
  "category": "lesson",
  "questions": [
    {
      "id": "q1",
      "type": "multipleChoice",
      "question": "Which of the following is NOT a component of the information security triad?",
      "options": ["Confidentiality", "Integrity", "Availability", "Accountability"],
      "answer": "Accountability",
      "rationale": "The triad consists of Confidentiality, Integrity, and Availability (CIA).",
      "marks": 2
    },
    {
      "id": "q2",
      "type": "fillInBlank",
      "question": "The process of verifying the identity of a user is called ________.",
      "answer": "Authentication",
      "rationale": "Authentication verifies user identity before granting access.",
      "marks": 2
    },
    {
      "id": "q3",
      "type": "multipleChoice",
      "question": "Which term refers to the ability of authorized users to access information when needed?",
      "options": ["Confidentiality", "Integrity", "Availability", "Encryption"],
      "answer": "Availability",
      "rationale": "Availability ensures information is accessible to authorized users.",
      "marks": 2
    },
    {
      "id": "q4",
      "type": "multiSelect",
      "question": "Which of the following are examples of malicious software (malware)?",
      "options": ["Virus", "Worm", "Rootkit", "Firewall"],
      "answer": ["Virus", "Worm", "Rootkit"],
      "rationale": "Virus, Worm, and Rootkit are types of malware; Firewall is a security tool.",
      "marks": 3
    },
    {
      "id": "q5",
      "type": "fillInBlank",
      "question": "A ________ is malware that masquerades as a useful program to trick users.",
      "answer": "Trojan horse",
      "rationale": "A Trojan horse pretends to be useful software to deceive users.",
      "marks": 2
    },
    {
      "id": "q6",
      "type": "multipleChoice",
      "question": "Which type of malware encrypts files and demands payment for access?",
      "options": ["Spyware", "Ransomware", "Worm", "Rootkit"],
      "answer": "Ransomware",
      "rationale": "Ransomware encrypts data and demands a ransom for decryption.",
      "marks": 2
    },
    {
      "id": "q7",
      "type": "matching",
      "question": "Match the malware with its main characteristic.",
      "matchPairs": [
        { "id": "pair1", "left": "Virus", "right": "Requires a host program" },
        { "id": "pair2", "left": "Worm", "right": "Self-replicates over networks" },
        { "id": "pair3", "left": "Spyware", "right": "Collects user information secretly" }
      ],
      "marks": 3
    },
    {
      "id": "q8",
      "type": "multipleChoice",
      "question": "Which of the following is an example of an internal threat?",
      "options": ["Phishing", "Internal attacker", "Natural disaster", "Botnet"],
      "answer": "Internal attacker",
      "rationale": "An internal attacker is a threat originating from within the organization.",
      "marks": 2
    },
    {
      "id": "q9",
      "type": "fillInBlank",
      "question": "A ________ attack overwhelms a server or network, making it unavailable to users.",
      "answer": "Denial of Service (DoS)",
      "rationale": "A DoS attack aims to make resources unavailable by overloading them.",
      "marks": 2
    },
    {
      "id": "q10",
      "type": "multiSelect",
      "question": "Which of the following are examples of external threats?",
      "options": ["Phishing", "Keystroke loggers", "Equipment theft", "Man-in-the-middle attacks"],
      "answer": ["Phishing", "Keystroke loggers", "Man-in-the-middle attacks"],
      "rationale": "These are all external attack methods; equipment theft can be internal or external.",
      "marks": 3
    },
    {
      "id": "q11",
      "type": "dropdown",
      "question": "The [dropdown_1] is a process of encoding data so only authorized individuals can read it.",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["Encryption", "Authentication", "Backup", "Firewall"],
          "correctAnswer": "Encryption"
        }
      ],
      "rationale": "Encryption protects data by making it unreadable to unauthorized users.",
      "marks": 2
    },
    {
      "id": "q12",
      "type": "multipleChoice",
      "question": "Which of the following is NOT a method of authentication?",
      "options": ["Password", "Key card", "Firewall", "Fingerprint"],
      "answer": "Firewall",
      "rationale": "Firewall is a security tool, not an authentication method.",
      "marks": 2
    },
    {
      "id": "q13",
      "type": "fillInBlank",
      "question": "A ________ is a list of users and their permitted actions on a resource.",
      "answer": "Access Control List (ACL)",
      "rationale": "An ACL specifies user permissions for resources.",
      "marks": 2
    },
    {
      "id": "q14",
      "type": "dragDrop",
      "question": "Drag and drop the correct access control models:\n\n[blank_1] assigns permissions to roles, while [blank_2] assigns permissions to individual users.",
      "dragItems": [
        { "id": "item1", "content": "Role-Based Access Control (RBAC)", "category": "blank_1" },
        { "id": "item2", "content": "Access Control List (ACL)", "category": "blank_2" }
      ],
      "marks": 3
    },
    {
      "id": "q15",
      "type": "multipleChoice",
      "question": "Which of the following is a physical security measure?",
      "options": ["Firewall", "Biometric lock", "Encryption", "Antivirus software"],
      "answer": "Biometric lock",
      "rationale": "Physical security includes measures like biometric locks to restrict access.",
      "marks": 2
    },
    {
      "id": "q16",
      "type": "multiSelect",
      "question": "Which are examples of human error threats?",
      "options": ["Weak passwords", "Phishing", "Email misdelivery", "Coding mistakes"],
      "answer": ["Weak passwords", "Email misdelivery", "Coding mistakes"],
      "rationale": "These are common human errors that threaten security.",
      "marks": 3
    },
    {
      "id": "q17",
      "type": "fillInBlank",
      "question": "A ________ is a network of compromised computers used to launch attacks.",
      "answer": "Botnet",
      "rationale": "A botnet is a group of infected computers controlled by attackers.",
      "marks": 2
    },
    {
      "id": "q18",
      "type": "essay",
      "question": "Describe the importance of security awareness training for employees.",
      "idealKeywords": ["user behavior", "phishing", "policy", "risk reduction", "compliance"],
      "rationale": "Security awareness training is crucial for educating employees about security threats, proper procedures, and their role in maintaining organizational security. It helps reduce human error, improves compliance with security policies, and creates a security-conscious culture.",
      "marks": 5
    },
    {
      "id": "q19",
      "type": "multipleChoice",
      "question": "Which type of hacker is authorized to test systems for vulnerabilities?",
      "options": ["Black-hat", "White-hat", "Gray-hat", "Script kiddie"],
      "answer": "White-hat",
      "rationale": "White-hat hackers are ethical professionals authorized to test security.",
      "marks": 2
    },
    {
      "id": "q20",
      "type": "fillInBlank",
      "question": "The process of making copies of data to restore in case of loss is called ________.",
      "answer": "Backup",
      "rationale": "Backups allow organizations to recover data after loss or damage.",
      "marks": 2
    }
  ]
}
,
{
    id: 'python-operators-test',
    title: 'Python Operators Test',
    description: 'Comprehensive assessment covering Python fundamentals and programming concepts',
    timeOptions: [30],
    totalMarks: 25,
    weight: 0,
    category: 'lesson',
    questions: [
  {
    "id": "q1",
    "type": "multipleChoice",
    "question": "Which operator is used for exponentiation in Python?",
    "options": ["**", "//", "%", "+"],
    "answer": "**",
    "rationale": "** is the exponentiation operator in Python.",
    "marks": 2
  },
  {
    "id": "q2",
    "type": "multipleChoice",
    "question": "What will be the result of 15%% 4 in Python?",
    "options": ["3", "4", "2", "1"],
    "answer": "3",
    "rationale": "The modulus operator (%) returns the remainder, which is 3.",
    "marks": 2
  },
  {
    "id": "q3",
    "type": "multipleChoice",
    "question": "Which operator is used for floor division in Python?",
    "options": ["//", "/", "%", "**"],
    "answer": "//",
    "rationale": "// performs floor division, returning the largest whole number.",
    "marks": 2
  },
  {
    "id": "q4",
    "type": "multipleChoice",
    "question": "What is the output of 2 * 3 + 5 in Python?",
    "options": ["11", "16", "10", "21"],
    "answer": "11",
    "rationale": "Multiplication is performed first (2*3=6), then addition (6+5=11).",
    "marks": 2
  },
  {
    "id": "q5",
    "type": "multipleChoice",
    "question": "Which operator is used to get the remainder of a division?",
    "options": ["%", "//", "/", "*"],
    "answer": "%",
    "rationale": "% is the modulus operator, which gives the remainder.",
    "marks": 2
  },
  {
    "id": "q6",
    "type": "multipleChoice",
    "question": "What is the result of 7 // 2 in Python?",
    "options": ["3", "3.5", "4", "2"],
    "answer": "3",
    "rationale": "// operator gives the floor value of the division.",
    "marks": 2
  },
  {
    "id": "q7",
    "type": "multipleChoice",
    "question": "Which of the following is an arithmetic operator in Python?",
    "options": ["+", "and", "is", "not in"],
    "answer": "+",
    "rationale": "+ is an arithmetic operator; others are logical or special operators.",
    "marks": 2
  },
  {
    "id": "q8",
    "type": "multipleChoice",
    "question": "What is the output of 4 ** 2 in Python?",
    "options": ["16", "8", "6", "12"],
    "answer": "16",
    "rationale": "4 ** 2 means 4 raised to the power of 2, which is 16.",
    "marks": 2
  },
  {
    "id": "q9",
    "type": "multipleChoice",
    "question": "Which operator would you use to add two numbers in Python?",
    "options": ["+", "-", "*", "/"],
    "answer": "+",
    "rationale": "+ is used for addition.",
    "marks": 2
  },
  {
    "id": "q10",
    "type": "multipleChoice",
    "question": "What will be the result of 10 - 3 * 2 in Python?",
    "options": ["4", "14", "16", "6"],
    "answer": "4",
    "rationale": "Multiplication first (3*2=6), then subtraction (10-6=4).",
    "marks": 2
  },
  {
    "id": "q11",
    "type": "multipleChoice",
    "question": "Which operator is used for division in Python?",
    "options": ["/", "%", "//", "**"],
    "answer": "/",
    "rationale": "/ is the division operator.",
    "marks": 2
  },
  {
    "id": "q12",
    "type": "multipleChoice",
    "question": "What will be the output of 5 + 2 * 3 in Python?",
    "options": ["11", "21", "7", "15"],
    "answer": "11",
    "rationale": "Multiplication first (2*3=6), then addition (5+6=11).",
    "marks": 2
  },
  {
    "id": "q13",
    "type": "multipleChoice",
    "question": "Which of the following is NOT an arithmetic operator in Python?",
    "options": ["and", "+", "-", "*"],
    "answer": "and",
    "rationale": "and is a logical operator, not arithmetic.",
    "marks": 1
  }
]
}
,
  // Mock Final Exam Quizzes
  {
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
        rationale: 'Database normalization is the process of organizing data to reduce redundancy and improve data integrity. It eliminates data anomalies, ensures consistency, and reduces storage space by organizing data into related tables following normal forms (1NF, 2NF, 3NF).',
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
        rationale: 'User requirements define what the system should do and how it should perform. Functional requirements specify system behavior and features, while non-functional requirements define quality attributes like performance, security, and usability. Both are essential for successful system development.',
        marks: 8
      }
    ]
  }
];