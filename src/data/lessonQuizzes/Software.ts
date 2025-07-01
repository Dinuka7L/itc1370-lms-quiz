import { Quiz } from '../../types/quiz';

export const SoftwareQuiz: Quiz = 
{
  id: "quiz-software-03",
  title: "Lesson 03 - Software",
  description: "Assessment covering key concepts of software types, operating systems, software licensing, and strategic software use.",
  timeOptions: [45, 60, 90],
  totalMarks: 100,
  weight: 0,
  category: "lesson",
  questions: [
    {
      "id": "q1",
      "type": "fillInBlank",
      "question": "Microsoft Office is an example of ________ software, while Windows 11 is an example of ________ software.",
      "answer": ["application", "system"],
      "rationale": "Microsoft Office is application software; Windows 11 is system software.",
      "marks": 3
    },
    {
      "id": "q2",
      "type": "multiSelect",
      "question": "Which of these operating systems is designed for embedded systems?",
      "options": ["Ubuntu", "Windows", "iOS", "VxWorks"],
      "answer": ["VxWorks"],
      "rationale": "VxWorks is a real-time OS designed for embedded systems.",
      "marks": 3
    },
    {
      "id": "q3",
      "type": "essay",
      "question": "What is the main difference between System Software and Application Software?",
      "idealKeywords": ["system software controls hardware", "enables computer use", "application software performs specific tasks", "user-oriented"],
      "marks": 6
    },
    {
      "id": "q4",
      "type": "matching",
      "question": "Match the correct operating system to the type of device.",
      "matchPairs": [
        { "id": "pair1", "left": "Personal Computer", "right": "Windows 11" },
        { "id": "pair2", "left": "Mobile Device", "right": "Android" },
        { "id": "pair3", "left": "Server", "right": "Windows Server" },
        { "id": "pair4", "left": "Embedded System", "right": "Real-Time OS" }
      ],
      "marks": 6
    },
    {
      "id": "q5",
      "type": "multiSelect",
      "question": "What is a key disadvantage of using open-source software in a critical business environment?",
      "options": [
        "It cannot be customized.",
        "It typically lacks technical support from the community.",
        "It may introduce security risk if not managed properly.",
        "It is more expensive than commercial software."
      ],
      "answer": [
        "It may introduce security risk if not managed properly."
      ],
      "rationale": "Open-source software can be customized and is usually less expensive, but security risks exist if unmanaged.",
      "marks": 4
    },
    {
      "id": "q6",
      "type": "matching",
      "question": "Match the correct software license type to its description.",
      "matchPairs": [
        { "id": "pair1", "left": "Open-source software", "right": "Source code is available and modifiable" },
        { "id": "pair2", "left": "Commercial software", "right": "Software is copyrighted and sold for profit" },
        { "id": "pair3", "left": "Freeware", "right": "Software is available free, but copyrighted" },
        { "id": "pair4", "left": "Shareware", "right": "Software is distributed with limited trial period" },
        { "id": "pair5", "left": "Public Domain", "right": "Software has no copyright and is free to use, modify and share" }
      ],
      "marks": 7
    },
    {
      "id": "q7",
      "type": "multiSelect",
      "question": "Which of the following is an example of open-source software?",
      "options": ["Microsoft Word", "Adobe Photoshop", "Linux", "WinZip"],
      "answer": ["Linux"],
      "rationale": "Linux is open-source; the others are proprietary software.",
      "marks": 3
    },
    {
      "id": "q8",
      "type": "multipleChoice",
      "question": "A hospital currently uses different systems for patient registration, billing, and pharmacy. Management complains about duplicated data and inefficiencies. What is the best solution?",
      "options": [
        "Purchase separate updated systems for each department.",
        "Implement an ERP system with centralized data management.",
        "Use open-source antivirus software.",
        "Upgrade the computer hardware only."
      ],
      "answer": "Implement an ERP system with centralized data management.",
      "rationale": "ERP systems integrate data across departments to reduce duplication and increase efficiency.",
      "marks": 4
    },
    {
      "id": "q9",
      "type": "dropdown",
      "question": "State whether these statements are TRUE or FALSE:\n\nI. ERP software systems usually operate with decentralized database for each department. [dropdown_1]\n\nII. Shareware is software that is completely free and unrestricted. [dropdown_2]\n\nIII. Cloud-based SaaS applications require a constant internet connection in function. [dropdown_3]\n\nIV. ERP Software typically only supports the finance department in an organization. [dropdown_4]",
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
          "correctAnswer": "True"
        },
        {
          "id": "dropdown_4",
          "options": ["True", "False"],
          "correctAnswer": "False"
        }
      ],
      "rationale": "ERP systems use centralized databases; Shareware is trial-based; SaaS depends on internet; ERP supports multiple departments.",
      "marks": 4
    },
    {
      "id": "q10",
      "type": "multipleChoice",
      "question": "Which statement correctly distinguishes between source code and object code?",
      "options": [
        "I. Source code is machine readable, object code is human readable.",
        "II. Object code is written by the developer.",
        "III. Source code must be compiled or interpreted to run.",
        "IV. Source code cannot be edited after compilation."
      ],
      "answer": "III. Source code must be compiled or interpreted to run.",
      "rationale": "Source code is human-readable and must be compiled or interpreted; object code is machine-readable.",
      "marks": 3
    },
    {
      "id": "q11",
      "type": "multipleChoice",
      "question": "Which of the following is a disadvantage of SaaS?",
      "options": [
        "I. Low Cost",
        "II. Always requires installations.",
        "III. Internet Dependency.",
        "IV. Full ownership of Software."
      ],
      "answer": "III. Internet Dependency.",
      "rationale": "SaaS requires internet access; installation and ownership are typically not required.",
      "marks": 3
    },
    {
      "id": "q12",
      "type": "multipleChoice",
      "question": "Which of the following software types is most likely to be used to create another software application?",
      "options": [
        "I. Productivity Software",
        "II. Utility Software",
        "III. Programming Software",
        "IV. ERP Software"
      ],
      "answer": "III. Programming Software",
      "rationale": "Programming software is used to develop other software applications.",
      "marks": 3
    },
    {
      "id": "q13",
      "type": "essay",
      "question": "Define the term software suite and provide examples of widely used suites in business environments.",
      "idealKeywords": [
        "collection of software programs",
        "bundled together",
        "single package",
        "lower cost",
        "common interface",
        "Microsoft Office",
        "G-Suite"
      ],
      "marks": 6
    },
    {
      "id": "q14",
      "type": "multipleChoice",
      "question": "Which of the following is not typically included in an office software suite?",
      "options": [
        "I. Database Software",
        "II. Antivirus Software",
        "III. Word Processor",
        "IV. Presentation Graphics"
      ],
      "answer": "II. Antivirus Software",
      "rationale": "Antivirus software is separate from office suites.",
      "marks": 3
    }
  ]
}
