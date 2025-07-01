import { Quiz } from '../../types/quiz';

export const InformationSecurityQuiz: Quiz = {
  "id": "quiz-Information Systems Security",
  "title": "Lesson 6 - Information Systems Security",
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
