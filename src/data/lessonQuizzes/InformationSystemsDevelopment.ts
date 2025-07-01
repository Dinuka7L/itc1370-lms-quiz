import { Quiz } from '../../types/quiz';

export const InformationSystemsDevelopmentQuiz: Quiz = {
  id: "quiz-Information Systems Development",
  title: "Lesson 8 – Information Systems Development",
  description: "A quiz assessing knowledge of key concepts in systems development, including SDLC, methodologies, roles, and implementation strategies.",
  timeOptions: [10, 25, 35],
  totalMarks: 60,
  weight: 0,
  category: "lesson",
  questions: [
    {
      "id": "q1",
      "type": "multipleChoice",
      "question": "Which of the following is NOT a core component of an Information System, according to Laudon and Laudon (2016)?",
      "options": ["Hardware", "Software", "Networking", "People"],
      "answer": "Networking",
      "rationale": "The core components are Hardware, Software, Data, People, and Procedures.",
      "marks": 2
    },
    {
      "id": "q2",
      "type": "multipleChoice",
      "question": "In the Systems Development Life Cycle (SDLC), which phase primarily focuses on determining the specific requirements for the new system without any programming being done?",
      "options": ["Preliminary Analysis", "Systems Design", "Systems Analysis", "Programming"],
      "answer": "Systems Analysis",
      "rationale": "Systems Analysis gathers and defines detailed requirements.",
      "marks": 2
    },
    {
      "id": "q3",
      "type": "multipleChoice",
      "question": "What is the riskiest, yet least expensive, implementation methodology, where the new system is turned on and the old system is turned off simultaneously?",
      "options": ["Pilot implementation", "Parallel operation", "Direct cutover", "Phased implementation"],
      "answer": "Direct cutover",
      "rationale": "Direct cutover replaces the old system immediately.",
      "marks": 2
    },
    {
      "id": "q4",
      "type": "fillInBlank",
      "question": "Fill in the blanks using the most appropriate software development technology<br>A large, established government agency needs to develop a new system to manage public records. The project has very clearly defined requirements from the outset, and strict regulations necessitate extensive documentation and sign-offs at each stage. Changes are expected to be minimal once the project begins, and a predictable, sequential flow is preferred to ensure compliance and thoroughness. This project would most likely benefit from following a __________ methodology.",
      "answer": "Waterfall",
      "rationale": "Waterfall is a sequential approach suitable for stable requirements and regulated environments.",
      "marks": 2
    },
    {
      "id": "q5",
      "type": "fillInBlank",
      "question": "Fill in the blanks using the most appropriate software development technology<br>A small, innovative software company is developing a new social media application. They want to get a basic version of the app into the hands of a few early adopters very quickly to gather feedback and rapidly incorporate user suggestions into subsequent versions. They plan to release incremental updates every few weeks, prioritizing working software and collaboration over comprehensive documentation. This development approach aligns best with the principles of __________ methodologies.",
      "answer": "Agile",
      "rationale": "Agile emphasizes flexibility, rapid iterations, and customer collaboration.",
      "marks": 2
    },
    {
      "id": "q6",
      "type": "fillInBlank",
      "question": "Fill in the blanks using the most appropriate software development technology<br>A marketing firm needs a custom web portal for a specific client project. The project has a tight deadline of 60–90 days, and there's a strong emphasis on user interface and rapid prototyping to ensure the client is satisfied with the look and feel before full development. This project would be a good fit for the __________ approach.",
      "answer": "Rapid Application Development (RAD)",
      "rationale": "RAD uses rapid prototyping and quick iterations with user feedback.",
      "marks": 2
    },
    {
      "id": "q7",
      "type": "essay",
      "question": "Differentiate the Systems Development Life Cycle (SDLC) Waterfall Methodology and Agile Methodologies. Discuss at least two key differences in their approach to software development and project management.",
      "idealKeywords": [
        "requirements",
        "sequential",
        "iterative",
        "flexibility",
        "feedback",
        "linear",
        "incremental"
      ],
      "marks": 6
    },
    {
      "id": "q8",
      "type": "essay",
      "question": "Explain the concept of the 'Quality Triangle' in software development. What are the three factors involved, and why can only two of them be addressed effectively at any given time, requiring compromise or tradeoffs?",
      "idealKeywords": [
        "time",
        "cost",
        "quality",
        "trade-offs",
        "constraints",
        "scope"
      ],
      "marks": 5
    },
    {
      "id": "q9",
      "type": "essay",
      "question": "Describe the primary responsibilities of a Systems Analyst within the context of information systems development. How does their role bridge the gap between business needs and system design?",
      "idealKeywords": [
        "requirements",
        "analyze",
        "communication",
        "specific",
        "stakeholders",
        "design translation",
        "business processes",
        "purpose of the business",
        "understanding of the business",
        "document",
        "team",
        "team work",
        "department"
      ],
      "marks": 5
    },
    {
      "id": "q10",
      "type": "essay",
      "question": "Identify and briefly explain two advantages and two disadvantages of End-user Development.",
      "idealKeywords": [
        "flexibility",
        "faster",
        "user satisfaction",
        "lack of testing",
        "data integrity",
        "support challenges",
        "Quick development of software",
        "Development is closer to those that will use them",
        "May not be fully tested and bug-free",
        "Data is not always backed up"

      ],
      "marks": 4
    },
    {
      "id": "q11",
      "type": "matching",
      "question": "Match the IT professional role with their primary responsibility.",
      "matchPairs": [
        { "id": "pair1", "left": "CIO", "right": "The head of the information systems function, aligning IS plans with strategic organizational goals and handling budgeting, strategic planning, and personnel decisions." },
        { "id": "pair2", "left": "Programmer/Developer", "right": "Writes computer code in a programming language, fulfilling design specifications from systems analysts." },
        { "id": "pair3", "left": "Database Administrator", "right": "Designs and manages databases for an organization." },
        { "id": "pair4", "left": "Computer Operator", "right": "Oversees the mainframe computers and data centers, ensuring operating systems are up to date and managing memory/disk storage." },
        { "id": "pair5", "left": "Help Desk/Support Analyst", "right": "The first line of support for computer users, assisting with basic issues and information." },
        { "id": "pair6", "left": "IT Project Manager", "right": "Responsible for keeping projects on time and on budget, coordinating schedules and resources, and communicating project status to management." }
      ],
      "marks": 6
    },
    {
      "id": "q12",
      "type": "matching",
      "question": "Match the SDLC phase with its primary output or key activity.",
      "matchPairs": [
        { "id": "pair1", "left": "Preliminary Analysis", "right": "Reviewing the replacement request for a new system and launching a feasibility study." },
        { "id": "pair2", "left": "Systems Analysis", "right": "Determining specific requirements for the new system, documenting procedures, interviewing users, and developing data requirements, resulting in a System Requirements Specification (SRS)." },
        { "id": "pair3", "left": "Systems Design", "right": "Translates business requirements into specific technical requirements, including user interface, database, and data inputs/outputs." },
        { "id": "pair4", "left": "Programming", "right": "The codes are written to create an initial working program based on system design." },
        { "id": "pair5", "left": "Testing", "right": "Performing unit, system, and user acceptance tests to identify and resolve bugs, errors, or problems." }
      ],
      "marks": 6
    }
  ]
};
