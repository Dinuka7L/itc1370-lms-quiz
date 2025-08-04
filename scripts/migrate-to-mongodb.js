// Migration script to populate MongoDB with quiz data
// Run this script once to migrate your quiz data to MongoDB

import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // Load variables from .env

// Sample quiz data - you'll need to add all your quiz data here
const quizData = [
{
  "id": "quiz-lesson-01-overview-of-it-systems",
  "title": "Lesson 1 - Overview of Information Technology",
  "description": "covers fundamental concepts of Information Technology and Information Systems, including components, eras, ICT4D, and strategic IT roles.",
  "timeOptions": [45, 60, 90],
  "totalMarks": 100,
  "weight": 0,
  "category": "lesson",
  "questions": [
    {
      "id": "q1",
      "type": "dropdown",
      "question": "Fill in the blanks:<br><br>I. An information system (IS) can be defined as a set of interrelated components that collect, process, store, and distribute information to support __________________ and control in an organization: [dropdown_1]<br><br>II. The tangible, physical portion of an information system is known as __________________: [dropdown_2]<br><br>III. High-level, aggregate information for senior management to make strategic decisions is typically provided by ______________________: [dropdown_3]<br><br>IV. Analytical tools that help managers make unique, non-routine decisions are found in ___________________: [dropdown_4]<br><br>V. A __________________ is a series of steps undertaken to achieve a desired outcome: [dropdown_5]",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["data storage", "decision making", "software", "networking"],
          "correctAnswer": "decision making"
        },
        {
          "id": "dropdown_2",
          "options": ["software", "hardware", "networking", "database"],
          "correctAnswer": "hardware"
        },
        {
          "id": "dropdown_3",
          "options": ["Management Information Systems", "Executive Information Systems", "Transaction Processing Systems", "Decision Support Systems"],
          "correctAnswer": "Executive Information Systems"
        },
        {
          "id": "dropdown_4",
          "options": ["Expert Systems", "Decision Support Systems", "Executive Information Systems", "Transaction Processing Systems"],
          "correctAnswer": "Decision Support Systems"
        },
        {
          "id": "dropdown_5",
          "options": ["process", "procedure", "program", "system"],
          "correctAnswer": "process"
        }
      ],
      "rationale": "These are standard definitions and concepts in Information Systems: decision making is supported by IS; hardware is the physical part; Executive Information Systems provide high-level summaries; Decision Support Systems help with unique decisions; a process is a sequence of steps.",
      "marks": 5
    },
    {
      "id": "q2",
      "type": "fillInBlank",
      "question": "The tangible, physical portion of an information system is known as ________.",
      "answer": "hardware",
      "rationale": "Hardware refers to the physical components of an information system.",
      "marks": 2
    },
    {
      "id": "q3",
      "type": "fillInBlank",
      "question": "High-level, aggregate information for senior management to make strategic decisions is typically provided by ________.",
      "answer": "executive information systems",
      "rationale": "Executive Information Systems provide strategic-level information to senior management.",
      "marks": 2
    },
    {
      "id": "q4",
      "type": "fillInBlank",
      "question": "Analytical tools that help managers make unique, non-routine decisions are found in ________.",
      "answer": "decision support systems",
      "rationale": "Decision Support Systems (DSS) help managers with non-routine decisions.",
      "marks": 2
    },
    {
      "id": "q5",
      "type": "fillInBlank",
      "question": "A ________ is a series of steps undertaken to achieve a desired outcome.",
      "answer": "process",
      "rationale": "A process consists of sequential steps to accomplish a goal.",
      "marks": 2
    },
    {
      "id": "q6",
      "type": "essay",
      "question": "Provide two distinct examples of how Information Technology is integrated into our corporate world.",
      "idealKeywords": ["e-business", "online sales", "e-health", "electronic health records", "e-governance", "online government services"],
      "marks": 6
    },
    {
      "id": "q7",
      "type": "multipleChoice",
      "question": "What does ICT4D primarily aim to achieve?",
      "options": [
        "a) Exclusive corporate profit maximization",
        "b) Socio-economic development and humanitarianism",
        "c) Military technological advancement",
        "d) Personal entertainment only"
      ],
      "answer": "b) Socio-economic development and humanitarianism",
      "rationale": "ICT4D focuses on socio-economic development and humanitarian goals.",
      "marks": 3
    },
    {
      "id": "q8",
      "type": "multipleChoice",
      "question": "Which of the following best describes \"Data\" in the context of Information Systems?",
      "options": [
        "a) Organized information used for decision-making",
        "b) A collection of raw, unorganized facts",
        "c) Programs that operate hardware",
        "d) The individuals who interact with the system"
      ],
      "answer": "b) A collection of raw, unorganized facts",
      "rationale": "Data are raw facts before processing into information.",
      "marks": 3
    },
    {
      "id": "q9",
      "type": "multiSelect",
      "question": "What are the five major components of an Information System?",
      "options": ["Hardware", "Process", "Software", "People", "Data", "Networks", "Internet"],
      "answer": ["Hardware", "Process", "Software", "People", "Data"],
      "rationale": "The five major components are hardware, software, data, people, and process.",
      "marks": 5
    },
    {
    "id": "q10",
    "type": "dropdown",
    "question": "State whether these statements are TRUE or FALSE:<br>I. Decision Support Systems (DSS) are primarily used for processing large volumes of routine daily business transactions. [dropdown_1]<br><br>II. Information Technology (IT) is a broader concept than Information Systems (IS). [dropdown_2]<br><br>III. Transaction Processing Systems (TPS) are designed to support strategic decision-making for senior executives. [dropdown_3]<br><br>IV. An Information System cannot function without people. [dropdown_4]",
    "dropdownBlanks": [
        {
        "id": "dropdown_1",
        "options": ["True", "False"],
        "correctAnswer": "False"
        },
        {
        "id": "dropdown_2",
        "options": ["True", "False"],
        "correctAnswer": "False"
        },
        {
        "id": "dropdown_3",
        "options": ["True", "False"],
        "correctAnswer": "False"
        },
        {
        "id": "dropdown_4",
        "options": ["True", "False"],
        "correctAnswer": "True"
        }
    ],
    "rationale": "DSS are for non-routine decisions, IT is narrower than IS, TPS support operational decisions, and people are essential for IS.",
    "marks": 4
    },

    {
      "id": "q11",
      "type": "multipleChoice",
      "question": "Which era saw the widespread adoption of the Internet and the rise of online businesses?",
      "options": [
        "a) PC Revolution",
        "b) Client-Server Era",
        "c) Internet/WWW/E-commerce Era",
        "d) Post PC Era"
      ],
      "answer": "c) Internet/WWW/E-commerce Era",
      "rationale": "This era is defined by Internet adoption and e-commerce growth.",
      "marks": 3
    },
    {
      "id": "q12",
      "type": "multipleChoice",
      "question": "What does \"E-learning\" represent in terms of IT integration?",
      "options": [
        "a) Conducting business transactions online",
        "b) Delivering education through electronic media",
        "c) Managing government services digitally",
        "d) Providing healthcare remotely"
      ],
      "answer": "b) Delivering education through electronic media",
      "rationale": "E-learning is education delivered via electronic means.",
      "marks": 3
    },
    {
      "id": "q13",
      "type": "fillInBlank",
      "question": "ICT4D is the use of ________ and ________ technologies in the fields of socio-economic development, international development, and humanitarianism.",
      "answer": ["information", "communication"],
      "rationale": "ICT4D stands for Information and Communication Technologies for Development.",
      "marks": 3
    },
    {
      "id": "q14",
      "type": "multipleChoice",
      "question": "Consider the scenario where a pharmaceutical company invests heavily in IT systems to develop a novel drug delivery method, which allows them to offer a unique solution in the market. This primarily illustrates IT's role in achieving:",
      "options": [
        "a) Improved decision making",
        "b) Survival by meeting legal requirements",
        "c) New products, services, and business models",
        "d) Operational excellence through cost reduction"
      ],
      "answer": "c) New products, services, and business models",
      "rationale": "IT enables innovation in products and business models.",
      "marks": 3
    },
    {
      "id": "q15",
      "type": "multipleChoice",
      "question": "When an organization uses Information Systems to significantly reduce its operating costs and increase efficiency, it is primarily achieving which key business objective of IT?",
      "options": [
        "a) New products, services, and business models",
        "b) Customer and supplier intimacy",
        "c) Operational excellence",
        "d) Improved decision making"
      ],
      "answer": "c) Operational excellence",
      "rationale": "Operational excellence focuses on cost reduction and efficiency.",
      "marks": 3
    },
    {
      "id": "q16",
      "type": "essay",
      "question": "What is \"E-learning\"? Provide a simple example of how someone might use e-learning in their personal life.",
      "idealKeywords": ["education", "electronic media", "online course", "videos", "language app"],
      "marks": 5
    },
    {
      "id": "q17",
      "type": "multipleChoice",
      "question": "Which type of strategic Information System focuses on optimizing and improving an organization's internal processes?",
      "options": [
        "a) Electronic Data Interchange (EDI)",
        "b) Collaborative Systems",
        "c) Business Process Management (BPM) Systems",
        "d) Decision Support Systems (DSS)"
      ],
      "answer": "c) Business Process Management (BPM) Systems",
      "rationale": "BPM systems optimize internal business processes.",
      "marks": 3
    },
    {
      "id": "q18",
      "type": "multipleChoice",
      "question": "Which concept from the Post PC era emphasizes providing data and applications over the Internet rather than storing them locally?",
      "options": [
        "a) Client-server architecture",
        "b) Web 1.0",
        "c) Cloud Computing",
        "d) Batch processing"
      ],
      "answer": "c) Cloud Computing",
      "rationale": "Cloud computing delivers resources over the Internet.",
      "marks": 3
    },
    {
      "id": "q19",
      "type": "multipleChoice",
      "question": "The \"Post PC era\" is largely defined by the rise of:",
      "options": [
        "a) Centralized mainframe computing",
        "b) Standalone personal computers",
        "c) Mobile computing and cloud services",
        "d) Only desktop applications"
      ],
      "answer": "c) Mobile computing and cloud services",
      "rationale": "Mobile and cloud technologies characterize the Post PC era.",
      "marks": 3
    },
    {
      "id": "q20",
      "type": "multipleChoice",
      "question": "The introduction of the microcomputer in the 1970s marked the beginning of which era?",
      "options": [
        "a) Client-Server Era",
        "b) Internet Era",
        "c) PC Revolution",
        "d) Web 2.0 Era"
      ],
      "answer": "c) PC Revolution",
      "rationale": "The PC Revolution began with microcomputers in the 1970s.",
      "marks": 3
    }
  ]
}
];

async function migrateQuizzes() {
  const client = new MongoClient(process.env.MONGODB_URI);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db('itc1370-quiz-app');
    const collection = db.collection('quizzes');
    
    // Clear existing data
    await collection.deleteMany({});
    console.log('Cleared existing quiz data');
    
    // Insert quiz data
    const result = await collection.insertMany(quizData);
    console.log(`Inserted ${result.insertedCount} quizzes`);
    
    // Create indexes for better performance
    await collection.createIndex({ id: 1 }, { unique: true });
    await collection.createIndex({ category: 1 });
    
    console.log('Migration completed successfully!');
    
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await client.close();
  }
}

// Run migration
migrateQuizzes();

