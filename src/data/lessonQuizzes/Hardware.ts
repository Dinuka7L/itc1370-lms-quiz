import { Quiz } from '../../types/quiz';

export const HardwareQuiz: Quiz = {
  id: "quiz-Computer Hardware",
  title: "Lesson 02 – Computer Hardware",
  description: "Quiz covering fundamental concepts of computer hardware.",
  timeOptions: [10, 20, 30],
  totalMarks: 40,
  weight: 0,
  category: "lesson",
  questions: [
    {
      "id": "q1",
      "type": "essay",
      "question": "What are the basic operations of a computer? State 5.",
      "idealKeywords": [
        "input",
        "output",
        "processing",
        "storage",
        "control"
      ],
      "marks": 5
    },
    {
      "id": "q2",
      "type": "essay",
      "question": "What are the types of computers? State 6",
      "idealKeywords": [
        "supercomputer",
        "mainframe",
        "minicomputer",
        "microcomputer",
        "workstation",
        "embedded computer"
      ],
      "marks": 6
    },
    {
      "id": "q3",
      "type": "fillInBlank",
      "question": "System board is the main circuit board inside the _____________. All computer components must connect to the motherboard.",
      "answer": "computer",
      "rationale": "The main circuit board is inside the computer.",
      "marks": 2
    },
    {
      "id": "q4",
      "type": "multipleChoice",
      "question": "Which component of a computer is responsible for performing operations on data and issuing control commands?",
      "options": [
        "Motherboard",
        "CPU",
        "RAM",
        "Storage"
      ],
      "answer": "CPU",
      "rationale": "The CPU performs processing and control tasks.",
      "marks": 2
    },
    {
      "id": "q5",
      "type": "matching",
      "question": "Match the suitable factors of the CPU to the given description.",
      "matchPairs": [
        {
          "id": "pair1",
          "left": "1. Clock Speed",
          "right": "b. Measures the number of cycles your CPU executes per second."
        },
        {
          "id": "pair2",
          "left": "2. Number of cores",
          "right": "c. Computer processor on a single integrated circuit with two or more separate processing units."
        },
        {
          "id": "pair3",
          "left": "3. Cache memory",
          "right": "a. Holds common data that it thinks the CPU is going to access over and over again."
        }
      ],
      "marks": 6
    },
    {
      "id": "q6",
      "type": "essay",
      "question": "What is the SOC? Explain briefly.",
      "idealKeywords": [
        "System on Chip",
        "integrated",
        "CPU",
        "GPU",
        "RAM",
        "single chip",
        "mobile devices"
      ],
      "marks": 3
    },
    {
      "id": "q7",
      "type": "essay",
      "question": "Briefly explain what is Bus Width.",
      "idealKeywords": [
        "data path",
        "bits",
        "transmission",
        "performance",
        "bandwidth"
      ],
      "marks": 3
    },
    {
      "id": "q8",
      "type": "dropdown",
      "question": "Fill in the blanks according to the computer memory hierarchy:\n\nAmong the different kinds of computer memories, [dropdown_1] is the high-speed & lower capacity memory. While processing, [dropdown_2] holds data and program instructions. [dropdown_3] is the memory that holds the most frequently needed data and instructions for a CPU.",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["cache memory", "secondary storage", "RAM", "ROM"],
          "correctAnswer": "cache memory"
        },
        {
          "id": "dropdown_2",
          "options": ["RAM", "ROM", "Flash memory", "Registers"],
          "correctAnswer": "RAM"
        },
        {
          "id": "dropdown_3",
          "options": ["cache memory", "secondary storage", "RAM", "Registers"],
          "correctAnswer": "cache memory"
        }
      ],
      "rationale": "Cache is high-speed; RAM holds instructions; cache is used for frequently accessed data.",
      "marks": 6
    },
    {
      "id": "q9",
      "type": "essay",
      "question": "Write the suitable ports/connectors to the given task:\n\nI. Connect printers to the PC –\n\nII. Connect hard drives –\n\nIII. Connect network devices –",
      "idealKeywords": [
        "USB",
        "Parallel port",
        "SATA",
        "Ethernet",
        "FireWire"
      ],
      "marks": 4
    },
    {
      "id": "q10",
      "type": "essay",
      "question": "____________ & ____________ are parts of the storage system. Storage devices can be classified as __________, __________, and __________. Also, there are two types of remote storage such as __________ & __________.",
      "idealKeywords": [
        "primary",
        "secondary",
        "tertiary",
        "cloud storage",
        "network attached storage",
        "online storage",
        "offline storage"
      ],
      "marks": 4
    },
    {
      "id": "q11",
      "type": "essay",
      "question": "Give examples for data capturing devices & data entering devices.",
      "idealKeywords": [
        "scanner",
        "barcode reader",
        "keyboard",
        "mouse",
        "microphone",
        "camera"
      ],
      "marks": 3
    },
    {
      "id": "q12",
      "type": "multiSelect",
      "question": "Indicate which statements are True or False.",
      "options": [
        "Source data automation is the use of automated methods of entry.",
        "When order processing with EDI we have to use many printed letters.",
        "We can get soft copies from CRT and subwoofers & hard copies from thermal and electrostatic printers.",
        "Computers can understand human language easily."
      ],
      "answer": [
        "Source data automation is the use of automated methods of entry."
      ],
      "rationale": "Only the first statement is true; others are false or misleading.",
      "marks": 4
    }
  ]
}
