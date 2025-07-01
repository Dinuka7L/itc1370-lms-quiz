import { Quiz } from '../../types/quiz';

export const EmergingTechnologiesInITQuiz: Quiz = 
    {
  "id": "quiz-Emerging Technologies in IT",
  "title": "Emerging Technologies in IT",
  "description": "Quiz assessing understanding of key emerging IT technologies and their impact.",
  "timeOptions": [10, 15, 20],
  "totalMarks": 41,
  "weight": 0,
  "category": "lesson",
  "questions": [
    {
      "id": "q1",
      "type": "multipleChoice",
      "question": "Which of the following best describes the blockchain technology?",
      "options": [
        "A decentralized ledger technology that records transactions across multiple computers, ensuring transparency, security, and immutability.",
        "A central database system controlled by a single organization that stores user data and passwords securely.",
        "A type of cryptocurrency used exclusively for online shopping and financial trading.",
        "A software program used to create websites and manage internet servers."
      ],
      "answer": "A decentralized ledger technology that records transactions across multiple computers, ensuring transparency, security, and immutability.",
      "rationale": "Blockchain is a decentralized ledger ensuring immutability and transparency.",
      "marks": 3
    },
    {
      "id": "q2",
      "type": "fillInBlank",
      "question": "Detecting patient emotions or stress can assist in mental health treatment. This is an application of emerging technology called _____________ and _____________ enables development of new materials and pharmaceuticals, potentially revolutionizing various industries.",
      "answer": "Artificial Intelligence, Quantum computing",
      "rationale": "AI detects emotions and stress; Quantum computing drives new materials discovery.",
      "marks": 4
    },
    {
      "id": "q3",
      "type": "essay",
      "question": "How to govern the ethical impact of technology advancement in society? List 4 points.",
      "idealKeywords": [
        "data privacy",
        "transparency",
        "accountability",
        "regulatory frameworks",
        "inclusivity",
        "bias mitigation"
      ],
      "marks": 4
    },
    {
      "id": "q4",
      "type": "matching",
      "question": "Match the emerging technology with the primary impact of access to information on society.",
      "matchPairs": [
        {
          "id": "pair1",
          "left": "I. Cloud Technology",
          "right": "provide scalable storage and processing power for large datasets, enabling widespread data analysis"
        },
        {
          "id": "pair2",
          "left": "II. Quantum Computing",
          "right": "accelerate data analysis and pattern recognition, extracting valuable insights from massive datasets"
        },
        {
          "id": "pair3",
          "left": "III. IoT",
          "right": "collect real-time data on environmental conditions, other critical factors, informing societal responses"
        },
        {
          "id": "pair4",
          "left": "IV. Perspective AI",
          "right": "shift from purely data-driven responses to more empathetic and context-aware intelligence"
        }
      ],
      "marks": 6
    },
    {
      "id": "q5",
      "type": "multipleChoice",
      "question": "Which of the following combinations best represents interrelated challenges faced in the digital transformation driven by the Internet of Things (IoT)?",
      "options": [
        "High energy consumption, lack of global internet, limited device colors",
        "Privacy invasion, cyber vulnerabilities, lack of device interoperability",
        "Expensive hardware, shortage of mobile apps, excessive cloud storage",
        "Poor marketing strategies, slow download speed, data redundancy"
      ],
      "answer": "Privacy invasion, cyber vulnerabilities, lack of device interoperability",
      "rationale": "These are the most cited IoT challenges.",
      "marks": 3
    },
    {
      "id": "q6",
      "type": "essay",
      "question": "Explain briefly in 3 points how blockchain technology is transforming human interactions.",
      "idealKeywords": [
        "decentralization",
        "trustless transactions",
        "transparency",
        "security",
        "peer-to-peer interactions"
      ],
      "marks": 4
    },
    {
    "id": "q7",
    "type": "dragDrop",
    "question": "Drag and drop the technology used in each application:\n\nI. Remote patient monitoring and diagnosis using predictive analytics: [blank_1]\n\nII. Smart refrigerators adjusting temperature automatically and sending alerts to users' smartphones: [blank_2]\n\nIII. Decentralized ledger system used to securely record transactions in cryptocurrencies: [blank_3]\n\nIV. A university enables students to access real-time simulations and large-scale data models for scientific experiments from any device: [blank_4]\n\nV. A global bank uses advanced computing to analyze billions of market transactions per second and optimize portfolio strategies: [blank_5]",
    "dragItems": [
        { "id": "item1", "content": "Blockchain", "category": "blank_3" },
        { "id": "item2", "content": "Quantum Computing", "category": "blank_5" },
        { "id": "item3", "content": "AI", "category": "blank_1" },
        { "id": "item4", "content": "Cloud Computing", "category": "blank_4" },
        { "id": "item5", "content": "IoT", "category": "blank_2" },
       
    ],
    "marks": 10
    },
    {
      "id": "q8",
      "type": "multipleChoice",
      "question": "Which of the following is considered the most critical challenge in the current stage of quantum computing development?",
      "options": [
        "High electricity consumption during execution of quantum algorithms",
        "Difficulty in visualizing quantum processes in educational settings",
        "Complexity and fragility of quantum systems affecting engineering and scalability",
        "Lack of colorful user interfaces in quantum development tools"
      ],
      "answer": "Complexity and fragility of quantum systems affecting engineering and scalability",
      "rationale": "This is the main obstacle in scaling quantum computing.",
      "marks": 3
    },
    {
      "id": "q9",
      "type": "multipleChoice",
      "question": "Which emerging technology primarily enables everyday objects to collect and exchange data over the internet, significantly contributing to real-time access and automation?",
      "options": [
        "Artificial Intelligence",
        "Internet of Things (IoT)",
        "Cloud Computing",
        "Blockchain"
      ],
      "answer": "Internet of Things (IoT)",
      "rationale": "IoT connects physical devices for data collection and automation.",
      "marks": 3
    },
    {
      "id": "q10",
      "type": "essay",
      "question": "Identify one challenge due to Artificial Intelligence (AI) in modern society and suggest one practical solution to overcome the challenge.",
      "idealKeywords": [
        "bias",
        "privacy",
        "job displacement",
        "regulation",
        "transparency"
      ],
      "marks": 5
    }
  ]
}
