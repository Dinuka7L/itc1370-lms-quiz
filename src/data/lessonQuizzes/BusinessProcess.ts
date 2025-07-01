import { Quiz } from '../../types/quiz';

export const BusinessProcessQuiz: Quiz =
{
  "id": "Business Process-Quiz",
  "title": "Business Processes – Practice Quiz",
  "description": "Quiz on business process concepts, systems, and IT integration.",
  "timeOptions": [10, 15, 20, 60],
  "totalMarks": 38,
  "weight": 0,
  "category": "lesson",
  "questions": [
    {
      "id": "q1",
      "type": "matching",
      "question": "Match the suitable business process diagramming tool with the relevant purpose.",
      "matchPairs": [
        { "id": "pair1", "left": "A. BPMN", "right": "Mapping end-to-end business processes" },
        { "id": "pair2", "left": "B. DFD", "right": "Analyzing how information moves within a system" },
        { "id": "pair3", "left": "C. UML", "right": "Designing and documenting software architecture" }
      ],
      "marks": 6
    },
    {
      "id": "q2",
      "type": "multipleChoice",
      "question": "A company wants to improve coordination between its inventory levels, customer demand, and procurement activities. At the same time, it aims to enhance customer interactions and track marketing performance. Which combination of systems would best address both needs?",
      "options": [
        "ERP system only, since it covers all business operations including marketing and customer interaction",
        "CRM system only, because it can handle both supply chain and customer relationship tasks",
        "A combination of ERP and SCM systems, since both are focused on internal operations and logistics",
        "A combination of CRM and SCM systems, as one manages customer engagement and the other optimizes the supply chain"
      ],
      "answer": "A combination of CRM and SCM systems, as one manages customer engagement and the other optimizes the supply chain",
      "rationale": "CRM handles customer relationships and marketing; SCM manages supply chain operations.",
      "marks": 3
    },
    {
    "id": "q3",
    "type": "dropdown",
    "question": "Fill in the blanks:\n\nI. The [dropdown_1] is a system used to manage employee data, payroll, performance management, and training activities within an organization.\n\nII. A [dropdown_2] helps in storing, organizing, and retrieving electronic documents while ensuring version control and document security.\n\nIII. The system used to deliver and monitor training programs, certifications, and e-learning modules is called a [dropdown_3].",
    "dropdownBlanks": [
        {
        "id": "dropdown_1",
        "options": [
            "Human Resource Information System (HRIS)",
            "Document Management System (DMS)",
            "Learning Management System (LMS)",
            "Customer Relationship Management (CRM)"
        ],
        "correctAnswer": "Human Resource Information System (HRIS)"
        },
        {
        "id": "dropdown_2",
        "options": [
            "Human Resource Information System (HRIS)",
            "Document Management System (DMS)",
            "Learning Management System (LMS)",
            "Supply Chain Management System (SCM)"
        ],
        "correctAnswer": "Document Management System (DMS)"
        },
        {
        "id": "dropdown_3",
        "options": [
            "Human Resource Information System (HRIS)",
            "Document Management System (DMS)",
            "Learning Management System (LMS)",
            "Enterprise Resource Planning (ERP)"
        ],
        "correctAnswer": "Learning Management System (LMS)"
        }
    ],
    "rationale": "HRIS manages employee data, DMS manages documents, and LMS manages training programs.",
    "marks": 6
    },
    {
      "id": "q4",
      "type": "essay",
      "question": "Briefly define what is Business Process Management (BPM).",
      "idealKeywords": [
        "methods",
        "techniques",
        "tools",
        "identify",
        "discover",
        "analyze",
        "redesign",
        "execute",
        "monitor",
        "optimize performance"
      ],
      "marks": 4
    },
    {
      "id": "q5",
      "type": "essay",
      "question": "How does BPM enhance the customer experience? (List at least 4 points.)",
      "idealKeywords": [
        "optimize order fulfillment",
        "faster shipping",
        "accurate order tracking",
        "better customer satisfaction"
      ],
      "marks": 4
    },
    {
      "id": "q6",
      "type": "multipleChoice",
      "question": "Which of the following best distinguishes Business Process Re-engineering (BPR) from traditional process improvement methods?",
      "options": [
        "BPR focuses on gradual changes in existing processes using current technology",
        "BPR emphasizes incremental automation of manual tasks to improve efficiency",
        "BPR involves radical redesign of processes based on goals, often discarding existing procedures entirely",
        "BPR seeks to improve processes by benchmarking against competitors and adopting best practices"
      ],
      "answer": "BPR involves radical redesign of processes based on goals, often discarding existing procedures entirely",
      "rationale": "BPR is about radical change, not incremental improvements.",
      "marks": 3
    },
    {
      "id": "q7",
      "type": "multipleChoice",
      "question": "XYZ Corporation is struggling with delayed product deliveries and frequent stockouts, leading to customer dissatisfaction. As a consultant, you are asked to recommend a strategy to gain a competitive advantage. Based on your understanding of IT integration with business processes, which of the following is the most effective solution?",
      "options": [
        "Launch a customer loyalty program without changing the supply process",
        "Invest in marketing to increase brand visibility and attract new customers",
        "Integrate a real-time inventory and sales data system to automate supply chain decisions",
        "Hire more warehouse staff to manually track inventory levels"
      ],
      "answer": "Integrate a real-time inventory and sales data system to automate supply chain decisions",
      "rationale": "Real-time integration addresses the root cause of delays and stockouts.",
      "marks": 3
    },
    {
      "id": "q8",
      "type": "multipleChoice",
      "question": "Which of the following best explains how integrating IT tools like Trello or Asana into business processes contributes to competitive advantage?",
      "options": [
        "To enhance the customer experience.",
        "They guarantee faster product delivery regardless of external factors",
        "They promote agile collaboration, enabling quicker decisions and on-time project delivery",
        "They help eliminate the need for supply chain management"
      ],
      "answer": "They promote agile collaboration, enabling quicker decisions and on-time project delivery",
      "rationale": "Tools like Trello and Asana enhance collaboration and project management.",
      "marks": 3
    },
    {
      "id": "q9",
      "type": "multipleChoice",
      "question": "Which of the following best describes the role of Information Technology (IT) in gaining a competitive advantage through business processes?",
      "options": [
        "IT guarantees profit growth regardless of business performance",
        "IT is only used for storing customer data securely",
        "IT supports better decision-making, process automation, and responsiveness to market needs",
        "IT replaces business strategies with fully automated systems"
      ],
      "answer": "IT supports better decision-making, process automation, and responsiveness to market needs",
      "rationale": "IT is a strategic enabler rather than a substitute for strategy.",
      "marks": 3
    }
  ]
}
