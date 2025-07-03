import { Quiz } from '../../types/quiz';

export const mockFinalPart1Quiz: Quiz = {
    id: 'mock-Part 01 - Chapter 1',
    title: 'Mock Final Exam - Part 1 (Module 1:Chapters 1-9)',
    description: 'Comprehensive assessment covering Lessons 1-9 of the course, including key concepts in Information Technology, computer hardware, software, data management, and networking fundamentals.',
    timeOptions: [],
    totalMarks: 225,
    weight: 50,
    category: 'mockFinal',
    questions: [
      {
      "id": "q1",
      "type": "multipleChoice",
      "question": "Which of the following best describes the main purpose of Transaction Processing Systems (TPS)?",
      "options": [
        "a) Assisting senior management in strategic decision making",
        "b) Recording daily routine transactions of an organization",
        "c) Providing high-level summaries for executives",
        "d) Supporting knowledge workers in designing new products"
      ],
      "answer": "b) Recording daily routine transactions of an organization",
      "rationale": "TPS are designed to capture and process daily business transactions.",
      "marks": 4
    },
    {
      "id": "q2",
      "type": "multipleChoice",
      "question": "What is the main distinction between an Information System and Information Technology?",
      "options": [
        "a) Information Systems are hardware components only; Information Technology includes software only.",
        "b) Information Systems include people and processes, while Information Technology mainly refers to hardware and software.",
        "c) Information Technology is broader than Information Systems.",
        "d) They are exactly the same with no difference."
      ],
      "answer": "b) Information Systems include people and processes, while Information Technology mainly refers to hardware and software.",
      "rationale": "IS integrates people, processes, and technology; IT focuses on technology components.",
      "marks": 4
    },
    {
      "id": "q3",
      "type": "multipleChoice",
      "question": "Which type of computer is primarily used for complex scientific calculations requiring immense processing power?",
      "options": [
        "a) Minicomputer",
        "b) Microcomputer",
        "c) Supercomputer",
        "d) Workstation"
      ],
      "answer": "c) Supercomputer",
      "rationale": "Supercomputers are specialized for heavy computation tasks.",
      "marks": 4
    },
    {
      "id": "q4",
      "type": "multipleChoice",
      "question": "In computer architecture, what is the primary function of the Control Unit within the CPU?",
      "options": [
        "a) Performing arithmetic calculations",
        "b) Storing frequently used instructions",
        "c) Coordinating and controlling operations of the processor",
        "d) Providing power to other components"
      ],
      "answer": "c) Coordinating and controlling operations of the processor",
      "rationale": "The Control Unit directs operations inside the CPU.",
      "marks": 4
    },
    {
      "id": "q5",
      "type": "multipleChoice",
      "question": "Which memory type is non-volatile and typically stores firmware in a computer system?",
      "options": [
        "a) RAM",
        "b) Cache memory",
        "c) ROM",
        "d) Virtual memory"
      ],
      "answer": "c) ROM",
      "rationale": "ROM is non-volatile and holds firmware like BIOS.",
      "marks": 4
    },
    {
      "id": "q6",
      "type": "multipleChoice",
      "question": "Which of the following correctly matches an Operating System to its purpose?",
      "options": [
        "a) Linux - Proprietary software for embedded systems only",
        "b) Windows Server - Managing server-based networks and resources",
        "c) VxWorks - General productivity tasks on desktops",
        "d) Android - Used primarily in large-scale data centers"
      ],
      "answer": "b) Windows Server - Managing server-based networks and resources",
      "rationale": "Windows Server is designed to manage networked servers.",
      "marks": 4
    },
    {
      "id": "q7",
      "type": "multipleChoice",
      "question": "Which of the following best describes a key characteristic of SaaS (Software as a Service)?",
      "options": [
        "a) It must be installed locally on every user's device.",
        "b) It is always free and open-source.",
        "c) It is accessed over the Internet, usually via subscription.",
        "d) It requires no internet connection after installation."
      ],
      "answer": "c) It is accessed over the Internet, usually via subscription.",
      "rationale": "SaaS is cloud-based and accessed via the Internet.",
      "marks": 4
    },
    {
      "id": "q8",
      "type": "multipleChoice",
      "question": "An organization wants to ensure its software source code can be modified and redistributed under certain conditions. Which licensing type should it consider?",
      "options": [
        "a) Commercial Software",
        "b) Open-source Software",
        "c) Shareware",
        "d) Freeware"
      ],
      "answer": "b) Open-source Software",
      "rationale": "Open-source licenses permit modification and redistribution.",
      "marks": 4
    },
    {
      "id": "q9",
      "type": "multipleChoice",
      "question": "In the context of strategic IT use, what does achieving 'customer and supplier intimacy' primarily mean?",
      "options": [
        "a) Improving internal operations only",
        "b) Reducing costs through automation",
        "c) Developing closer relationships with external stakeholders to improve services and loyalty",
        "d) Replacing employees with AI systems"
      ],
      "answer": "c) Developing closer relationships with external stakeholders to improve services and loyalty",
      "rationale": "Customer and supplier intimacy strengthens external relationships.",
      "marks": 4
    },
    {
      "id": "q10",
      "type": "multipleChoice",
      "question": "Which of the following storage types is considered volatile?",
      "options": [
        "a) Hard Disk Drive",
        "b) SSD",
        "c) RAM",
        "d) Optical Disc"
      ],
      "answer": "c) RAM",
      "rationale": "RAM loses data when power is off (volatile).",
      "marks": 4
    },
    {
      "id": "q11",
      "type": "multipleChoice",
      "question": "Which type of Information System primarily supports middle management by providing reports and summaries of performance?",
      "options": [
        "a) Executive Information Systems (EIS)",
        "b) Management Information Systems (MIS)",
        "c) Decision Support Systems (DSS)",
        "d) Transaction Processing Systems (TPS)"
      ],
      "answer": "b) Management Information Systems (MIS)",
      "rationale": "MIS provides structured reports for middle management.",
      "marks": 4
    },
    {
      "id": "q12",
      "type": "multipleChoice",
      "question": "Which of these is NOT a typical characteristic of embedded systems?",
      "options": [
        "a) Real-time operation",
        "b) User-friendly general-purpose interfaces",
        "c) Limited computing resources",
        "d) Dedicated functionality"
      ],
      "answer": "b) User-friendly general-purpose interfaces",
      "rationale": "Embedded systems are usually dedicated and not general-purpose.",
      "marks": 4
    },
    {
      "id": "q13",
      "type": "multipleChoice",
      "question": "A company wants to prevent data loss during a sudden power outage. Which hardware component is crucial for this purpose?",
      "options": [
        "a) Cache memory",
        "b) Uninterruptible Power Supply (UPS)",
        "c) Heat sink",
        "d) Optical drive"
      ],
      "answer": "b) Uninterruptible Power Supply (UPS)",
      "rationale": "UPS keeps power during outages.",
      "marks": 4
    },
    {
      "id": "q14",
      "type": "multipleChoice",
      "question": "Which of the following best describes the main purpose of Utility Software?",
      "options": [
        "a) To develop software applications",
        "b) To manage system hardware resources",
        "c) To perform maintenance or optimization tasks",
        "d) To create marketing materials"
      ],
      "answer": "c) To perform maintenance or optimization tasks",
      "rationale": "Utility software handles system maintenance functions.",
      "marks": 4
    },
    {
      "id": "q15",
      "type": "multipleChoice",
      "question": "In modern computing, what is the primary advantage of multi-core processors?",
      "options": [
        "a) They reduce the need for any cooling solutions.",
        "b) They significantly increase clock speed beyond physical limits.",
        "c) They allow multiple tasks to be processed simultaneously, improving performance.",
        "d) They eliminate the need for RAM."
      ],
      "answer": "c) They allow multiple tasks to be processed simultaneously, improving performance.",
      "rationale": "Multi-core CPUs enable parallel processing.",
      "marks": 4
    },
    {
    "id": "q16",
    "type": "multipleChoice",
    "question": "Which of the following best describes a primary key in a relational database?",
    "options": [
      "A field that can contain duplicate values",
      "A field used to store large binary data objects",
      "A unique identifier for each record that cannot be null",
      "A field linking to data in external spreadsheets"
    ],
    "answer": "A unique identifier for each record that cannot be null",
    "rationale": "Primary keys are unique and must have a value for every record.",
    "marks": 3
  },
  {
    "id": "q17",
    "type": "multipleChoice",
    "question": "What is the main purpose of normalization in database design?",
    "options": [
      "To speed up network communication",
      "To reduce data redundancy and improve data integrity",
      "To simplify user interface design",
      "To encrypt stored records"
    ],
    "answer": "To reduce data redundancy and improve data integrity",
    "rationale": "Normalization organizes data efficiently to avoid duplication.",
    "marks": 3
  },
  {
    "id": "q18",
    "type": "multipleChoice",
    "question": "Which of these statements accurately describes a foreign key?",
    "options": [
      "It must be unique within its own table",
      "It links records in one table to the primary key in another",
      "It is automatically indexed by default",
      "It is used only in flat file databases"
    ],
    "answer": "It links records in one table to the primary key in another",
    "rationale": "A foreign key establishes relationships between tables.",
    "marks": 3
  },
  {
    "id": "q19",
    "type": "multipleChoice",
    "question": "Which networking device forwards data packets between networks based on IP addresses?",
    "options": [
      "Switch",
      "Hub",
      "Router",
      "Repeater"
    ],
    "answer": "Router",
    "rationale": "Routers direct traffic between networks using IP addresses.",
    "marks": 2
  },
  {
    "id": "q20",
    "type": "multipleChoice",
    "question": "What does HTTP stand for?",
    "options": [
      "Hyper Transfer Text Protocol",
      "Hypertext Transfer Protocol",
      "High Transmission Text Process",
      "Hypertext Transmission Platform"
    ],
    "answer": "Hypertext Transfer Protocol",
    "rationale": "HTTP is the protocol for transferring web content.",
    "marks": 2
  },
  {
    "id": "q21",
    "type": "multipleChoice",
    "question": "Which layer of the OSI model is responsible for end-to-end communication and error recovery?",
    "options": [
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
      "Session Layer"
    ],
    "answer": "Transport Layer",
    "rationale": "The Transport Layer handles reliable data delivery and error correction.",
    "marks": 3
  },
  {
    "id": "q22",
    "type": "multipleChoice",
    "question": "What does the term bandwidth refer to in networking?",
    "options": [
      "The physical length of a cable",
      "The maximum rate of data transfer across a network path",
      "The number of users connected to a network",
      "The strength of the wireless signal"
    ],
    "answer": "The maximum rate of data transfer across a network path",
    "rationale": "Bandwidth measures how much data can be transmitted per second.",
    "marks": 2
  },
  {
    "id": "q23",
    "type": "multipleChoice",
    "question": "Which of the following is a disadvantage of a peer-to-peer network?",
    "options": [
      "Complex server management",
      "High setup cost",
      "Difficulty scaling for large organizations",
      "Centralized control of resources"
    ],
    "answer": "Difficulty scaling for large organizations",
    "rationale": "P2P networks are simple but not efficient at large scale.",
    "marks": 3
  },
  {
    "id": "q24",
    "type": "multipleChoice",
    "question": "Which statement about firewalls is correct?",
    "options": [
      "They are used to store large volumes of data securely.",
      "They physically connect multiple network devices.",
      "They filter incoming and outgoing network traffic based on rules.",
      "They assign dynamic IP addresses to devices."
    ],
    "answer": "They filter incoming and outgoing network traffic based on rules.",
    "rationale": "Firewalls control access and protect networks.",
    "marks": 3
  },
  {
    "id": "q25",
    "type": "multipleChoice",
    "question": "In database systems, what is an index primarily used for?",
    "options": [
      "Compressing data to save space",
      "Creating relationships between tables",
      "Improving query performance",
      "Ensuring transaction atomicity"
    ],
    "answer": "Improving query performance",
    "rationale": "Indexes speed up searching and sorting operations.",
    "marks": 3
  },
  {
    "id": "q26",
    "type": "multipleChoice",
    "question": "Which of these best describes a VLAN?",
    "options": [
      "A protocol for sending email securely",
      "A type of wireless LAN encryption",
      "A logical segmentation of a physical network",
      "A method for extending wireless coverage"
    ],
    "answer": "A logical segmentation of a physical network",
    "rationale": "VLANs divide networks logically for security and efficiency.",
    "marks": 3
  },
  {
    "id": "q27",
    "type": "multipleChoice",
    "question": "Which of these protocols is primarily used for secure web communication?",
    "options": [
      "HTTP",
      "HTTPS",
      "FTP",
      "SMTP"
    ],
    "answer": "HTTPS",
    "rationale": "HTTPS encrypts web traffic for secure communication.",
    "marks": 2
  },
  {
    "id": "q28",
    "type": "multipleChoice",
    "question": "What is the main advantage of cloud databases?",
    "options": [
      "They require no internet connection",
      "They eliminate the need for backups",
      "They offer scalable storage and access over the internet",
      "They only store structured data"
    ],
    "answer": "They offer scalable storage and access over the internet",
    "rationale": "Cloud databases are scalable and accessible remotely.",
    "marks": 3
  },
  {
    "id": "q29",
    "type": "multipleChoice",
    "question": "Which protocol translates domain names into IP addresses?",
    "options": [
      "DHCP",
      "DNS",
      "SMTP",
      "SNMP"
    ],
    "answer": "DNS",
    "rationale": "DNS resolves names to numeric addresses.",
    "marks": 2
  },
  {
    "id": "q30",
    "type": "multipleChoice",
    "question": "Which of the following is considered unstructured data?",
    "options": [
      "Transaction records in a relational database",
      "Customer order spreadsheets",
      "Scanned handwritten notes",
      "Inventory tables with product codes"
    ],
    "answer": "Scanned handwritten notes",
    "rationale": "Unstructured data lacks a predefined data model.",
    "marks": 3
  },
  {
  "id": "q31",
  "type": "multipleChoice",
  "question": "Which device is primarily responsible for directing data packets between different networks?",
  "options": [
    "Switch",
    "Router",
    "Access Point",
    "Network Adapter"
  ],
  "answer": "Router",
  "rationale": "A router determines the best path to forward packets across networks.",
  "marks": 3
},
{
  "id": "q32",
  "type": "multipleChoice",
  "question": "What is the main purpose of a firewall?",
  "options": [
    "Encrypt data in transit",
    "Store backup copies of data",
    "Inspect and control incoming and outgoing network traffic",
    "Translate domain names to IP addresses"
  ],
  "answer": "Inspect and control incoming and outgoing network traffic",
  "rationale": "A firewall filters network traffic based on configured security rules.",
  "marks": 3
},
{
  "id": "q33",
  "type": "multipleChoice",
  "question": "Which protocol is mainly used to transfer files securely over the Internet?",
  "options": [
    "FTP",
    "SMTP",
    "SFTP",
    "HTTP"
  ],
  "answer": "SFTP",
  "rationale": "SFTP encrypts file transfers for secure communication.",
  "marks": 3
},
{
  "id": "q34",
  "type": "multipleChoice",
  "question": "Which wireless technology enables short-range communication between compatible devices by simply bringing them close together?",
  "options": [
    "Bluetooth",
    "Wi-Fi",
    "NFC",
    "ZigBee"
  ],
  "answer": "NFC",
  "rationale": "NFC (Near Field Communication) operates over very short distances.",
  "marks": 3
},
{
  "id": "q35",
  "type": "multipleChoice",
  "question": "What is the main characteristic of a peer-to-peer network?",
  "options": [
    "Central server controls all resources",
    "All devices share equal responsibilities",
    "Only wireless media is used",
    "It covers a wide geographic area"
  ],
  "answer": "All devices share equal responsibilities",
  "rationale": "Peer-to-peer networks do not rely on a central server.",
  "marks": 3
},
{
  "id": "q36",
  "type": "multipleChoice",
  "question": "Which networking media provides the fastest transmission speeds among wired options?",
  "options": [
    "Twisted-pair cable",
    "Coaxial cable",
    "Fiber-optic cable",
    "Powerline networking"
  ],
  "answer": "Fiber-optic cable",
  "rationale": "Fiber-optic cables transmit data as light, offering high speed and bandwidth.",
  "marks": 3
},
{
  "id": "q37",
  "type": "multipleChoice",
  "question": "In the CIA Triad, what does Integrity refer to?",
  "options": [
    "Ensuring data is accessible when needed",
    "Preventing unauthorized disclosure of information",
    "Ensuring data is accurate and has not been tampered with",
    "Verifying the identity of users"
  ],
  "answer": "Ensuring data is accurate and has not been tampered with",
  "rationale": "Integrity safeguards data accuracy and reliability.",
  "marks": 3
},
{
  "id": "q38",
  "type": "multipleChoice",
  "question": "Which type of malware disguises itself as a legitimate program to trick users into installing it?",
  "options": [
    "Worm",
    "Trojan horse",
    "Rootkit",
    "Spyware"
  ],
  "answer": "Trojan horse",
  "rationale": "Trojans pose as useful software but contain malicious code.",
  "marks": 3
},
{
  "id": "q39",
  "type": "multipleChoice",
  "question": "Which cloud computing model provides virtualized computing resources over the Internet?",
  "options": [
    "SaaS",
    "PaaS",
    "IaaS",
    "DaaS"
  ],
  "answer": "IaaS",
  "rationale": "Infrastructure as a Service (IaaS) delivers servers, storage, and networking.",
  "marks": 3
},
{
  "id": "q40",
  "type": "multipleChoice",
  "question": "Which of the following is an example of a Denial of Service (DoS) attack?",
  "options": [
    "Intercepting data between two parties",
    "Flooding a server with excessive requests to make it unavailable",
    "Installing spyware to capture keystrokes",
    "Sending phishing emails"
  ],
  "answer": "Flooding a server with excessive requests to make it unavailable",
  "rationale": "DoS attacks overload systems, denying service to legitimate users.",
  "marks": 3
},
{
  "id": "q41",
  "type": "multipleChoice",
  "question": "Which networking term describes a unique identification number assigned to every device on the Internet?",
  "options": [
    "MAC address",
    "Domain name",
    "IP address",
    "Port number"
  ],
  "answer": "IP address",
  "rationale": "An IP address uniquely identifies devices in a network.",
  "marks": 3
},
{
  "id": "q42",
  "type": "multipleChoice",
  "question": "What is the role of the Domain Name System (DNS)?",
  "options": [
    "Encrypt internet traffic",
    "Translate domain names to IP addresses",
    "Control network access permissions",
    "Store backup copies of websites"
  ],
  "answer": "Translate domain names to IP addresses",
  "rationale": "DNS resolves human-readable names into numeric addresses.",
  "marks": 3
},
{
  "id": "q43",
  "type": "multipleChoice",
  "question": "Which technology moves processing closer to the source of data to improve speed and reduce latency?",
  "options": [
    "Cloud computing",
    "Edge computing",
    "Virtualization",
    "Grid computing"
  ],
  "answer": "Edge computing",
  "rationale": "Edge computing performs data processing at or near the data source.",
  "marks": 3
},
{
  "id": "q44",
  "type": "multipleChoice",
  "question": "Which type of hacker is authorized to identify system vulnerabilities?",
  "options": [
    "Black-hat hacker",
    "White-hat hacker",
    "Gray-hat hacker",
    "Script kiddie"
  ],
  "answer": "White-hat hacker",
  "rationale": "White-hat hackers (ethical hackers) test systems legally.",
  "marks": 3
},
{
  "id": "q45",
  "type": "multipleChoice",
  "question": "What is the primary purpose of encryption?",
  "options": [
    "Preventing hardware theft",
    "Ensuring data remains confidential during storage and transmission",
    "Authenticating users before access",
    "Monitoring network performance"
  ],
  "answer": "Ensuring data remains confidential during storage and transmission",
  "rationale": "Encryption protects data by encoding it so unauthorized parties cannot read it.",
  "marks": 3
},
{
  "id": "q46",
  "type": "multipleChoice",
  "question": "Which of the following is NOT part of the CIA triad in information security?",
  "options": [
    "Confidentiality",
    "Integrity",
    "Availability",
    "Authentication"
  ],
  "answer": "Authentication",
  "rationale": "The CIA triad consists of Confidentiality, Integrity, and Availability; Authentication is a process that supports these principles but is not part of the triad.",
  "marks": 3
},
{
  "id": "q47",
  "type": "multipleChoice",
  "question": "What distinguishes a worm from a virus in malicious software?",
  "options": [
    "A worm requires a host program to infect",
    "A virus is a standalone program",
    "A worm replicates itself independently across networks",
    "A virus only affects hardware"
  ],
  "answer": "A worm replicates itself independently across networks",
  "rationale": "Worms are standalone programs that self-replicate and spread without needing a host program, unlike viruses.",
  "marks": 3
},
{
  "id": "q48",
  "type": "multipleChoice",
  "question": "Which of the following is an example of physical security?",
  "options": [
    "Firewall configuration",
    "Installing antivirus software",
    "Locked server room doors",
    "Using multi-factor authentication"
  ],
  "answer": "Locked server room doors",
  "rationale": "Physical security involves protecting hardware and facilities through measures such as locks and surveillance.",
  "marks": 3
},
{
  "id": "q49",
  "type": "multipleChoice",
  "question": "Which of the following best describes a rootkit?",
  "options": [
    "A program that encrypts data and demands ransom",
    "A program that hides its presence by modifying system software",
    "A software that logs keystrokes",
    "A program that self-replicates across networks"
  ],
  "answer": "A program that hides its presence by modifying system software",
  "rationale": "Rootkits conceal their presence by modifying or replacing system components, making detection difficult.",
  "marks": 3
},
{
  "id": "q50",
  "type": "multipleChoice",
  "question": "What is the main purpose of a firewall in network security?",
  "options": [
    "To encrypt data transmissions",
    "To monitor user activity logs",
    "To filter and control incoming and outgoing network traffic",
    "To detect malware on a system"
  ],
  "answer": "To filter and control incoming and outgoing network traffic",
  "rationale": "Firewalls enforce security rules by allowing or blocking network packets based on configured policies.",
  "marks": 3
},
{
  "id": "q51",
  "type": "multipleChoice",
  "question": "What is 'social engineering' in the context of cybersecurity?",
  "options": [
    "Using software to find system vulnerabilities",
    "Tricking people into divulging confidential information",
    "Automated scanning for malware",
    "Physically stealing computer hardware"
  ],
  "answer": "Tricking people into divulging confidential information",
  "rationale": "Social engineering exploits human psychology to bypass security through deception.",
  "marks": 3
},
{
  "id": "q52",
  "type": "multipleChoice",
  "question": "Which type of hacker is authorized to test systems for vulnerabilities?",
  "options": [
    "Black-hat hacker",
    "White-hat hacker",
    "Gray-hat hacker",
    "Script kiddie"
  ],
  "answer": "White-hat hacker",
  "rationale": "White-hat hackers perform ethical hacking with authorization to improve security.",
  "marks": 3
},
{
  "id": "q53",
  "type": "multipleChoice",
  "question": "In business process management (BPM), what is the primary goal?",
  "options": [
    "To automate all processes fully",
    "To identify, analyze, and optimize business processes",
    "To outsource business operations",
    "To replace human workers with machines"
  ],
  "answer": "To identify, analyze, and optimize business processes",
  "rationale": "BPM aims to improve efficiency and effectiveness by continuously managing processes.",
  "marks": 3
},
{
  "id": "q54",
  "type": "multipleChoice",
  "question": "What is a key difference between Business Process Management (BPM) and Business Process Re-engineering (BPR)?",
  "options": [
    "BPM focuses on incremental improvement, while BPR involves radical redesign",
    "BPM is only used in manufacturing",
    "BPR only involves automating existing processes",
    "BPM requires no management involvement"
  ],
  "answer": "BPM focuses on incremental improvement, while BPR involves radical redesign",
  "rationale": "BPM is continuous improvement, BPR is a fundamental rethinking of processes.",
  "marks": 3
},
{
  "id": "q55",
  "type": "multipleChoice",
  "question": "Which of the following is NOT a common tool for documenting business processes?",
  "options": [
    "Business Process Modeling Notation (BPMN)",
    "Data Flow Diagram (DFD)",
    "Unified Modeling Language (UML)",
    "Microsoft Excel Macros"
  ],
  "answer": "Microsoft Excel Macros",
  "rationale": "Excel macros automate tasks but are not standard diagramming tools for documenting processes.",
  "marks": 3
},
{
  "id": "q56",
  "type": "multipleChoice",
  "question": "What is the purpose of access control in information security?",
  "options": [
    "To verify the identity of users",
    "To limit user access to only authorized information resources",
    "To encrypt user data",
    "To back up data regularly"
  ],
  "answer": "To limit user access to only authorized information resources",
  "rationale": "Access control restricts users' permissions to protect data from unauthorized use.",
  "marks": 3
},
{
  "id": "q57",
  "type": "multipleChoice",
  "question": "What is multi-factor authentication (MFA)?",
  "options": [
    "Using multiple passwords for one login",
    "Verification of identity using two or more different methods",
    "Logging in multiple times",
    "Using only biometrics for authentication"
  ],
  "answer": "Verification of identity using two or more different methods",
  "rationale": "MFA combines factors like something you know, have, or are to increase security.",
  "marks": 3
},
{
  "id": "q58",
  "type": "multipleChoice",
  "question": "Which malware type specifically limits user access and demands payment to restore it?",
  "options": [
    "Spyware",
    "Rootkit",
    "Ransomware",
    "Trojan Horse"
  ],
  "answer": "Ransomware",
  "rationale": "Ransomware encrypts files or systems and demands ransom for decryption keys.",
  "marks": 3
},
{
  "id": "q59",
  "type": "multipleChoice",
  "question": "Why is regular data backup important in an organization?",
  "options": [
    "To increase network speed",
    "To ensure data recovery in case of loss or damage",
    "To prevent malware infection",
    "To encrypt sensitive files"
  ],
  "answer": "To ensure data recovery in case of loss or damage",
  "rationale": "Backups safeguard against data loss from hardware failure, attacks, or accidents.",
  "marks": 3
},
{
  "id": "q60",
  "type": "multipleChoice",
  "question": "Which of the following is an example of an internal threat to information systems?",
  "options": [
    "A phishing email from an external attacker",
    "Equipment theft by an employee",
    "A denial-of-service attack from outside",
    "A natural disaster damaging servers"
  ],
  "answer": "Equipment theft by an employee",
  "rationale": "Internal threats come from insiders such as employees misusing or stealing assets.",
  "marks": 3
},
{
    "id": "q61",
    "type": "multipleChoice",
    "question": "Which phase of the Systems Development Life Cycle (SDLC) involves gathering detailed business requirements without any programming?",
    "options": [
      "Programming",
      "Systems Analysis",
      "Systems Design",
      "Testing"
    ],
    "answer": "Systems Analysis",
    "rationale": "Systems Analysis focuses on understanding and documenting business needs and system requirements before any coding begins.",
    "marks": 3
  },
  {
    "id": "q62",
    "type": "multipleChoice",
    "question": "Which software development methodology emphasizes quick prototyping and user feedback over long planning cycles?",
    "options": [
      "Waterfall",
      "Rapid Application Development (RAD)",
      "Lean",
      "Agile"
    ],
    "answer": "Rapid Application Development (RAD)",
    "rationale": "RAD focuses on building a working prototype quickly and iterating based on user feedback.",
    "marks": 3
  },
  {
    "id": "q63",
    "type": "multipleChoice",
    "question": "In the SDLC, who is primarily responsible for translating business requirements into technical specifications and system designs?",
    "options": [
      "Systems Analyst",
      "Programmer",
      "Database Administrator",
      "Help Desk Analyst"
    ],
    "answer": "Systems Analyst",
    "rationale": "Systems Analysts act as a bridge between business users and technical teams by converting business needs into detailed system designs.",
    "marks": 3
  },
  {
    "id": "q64",
    "type": "multipleChoice",
    "question": "What is a key disadvantage of the Direct Cutover implementation methodology?",
    "options": [
      "It requires maintaining two systems simultaneously",
      "It is the riskiest method due to immediate switch",
      "It is slow and resource-intensive",
      "It is only suitable for small user groups"
    ],
    "answer": "It is the riskiest method due to immediate switch",
    "rationale": "Direct Cutover immediately replaces the old system with the new one, which can cause disruption if issues occur.",
    "marks": 3
  },
  {
    "id": "q65",
    "type": "multipleChoice",
    "question": "Which IT professional is responsible for managing databases and ensuring data availability and security?",
    "options": [
      "Database Administrator",
      "Systems Analyst",
      "Computer Operator",
      "IT Project Manager"
    ],
    "answer": "Database Administrator",
    "rationale": "DBAs design, maintain, and secure the organization's databases to ensure reliable data access.",
    "marks": 3
  },
  {
    "id": "q66",
    "type": "multipleChoice",
    "question": "Which emerging technology uses decentralized ledgers to ensure secure, transparent, and tamper-proof transactions?",
    "options": [
      "Internet of Things (IoT)",
      "Blockchain",
      "Quantum Computing",
      "Cloud Computing"
    ],
    "answer": "Blockchain",
    "rationale": "Blockchain technology uses distributed ledgers to provide transparency and security across multiple nodes.",
    "marks": 3
  },
  {
    "id": "q67",
    "type": "multipleChoice",
    "question": "How does AI-powered machine learning impact business decision-making?",
    "options": [
      "By eliminating the need for human decision makers",
      "By analyzing large datasets to uncover trends and insights",
      "By randomly generating business ideas",
      "By automating physical labor only"
    ],
    "answer": "By analyzing large datasets to uncover trends and insights",
    "rationale": "Machine learning models analyze data to assist organizations in making informed decisions based on patterns.",
    "marks": 3
  },
  {
    "id": "q68",
    "type": "multipleChoice",
    "question": "Which of the following is a primary challenge when implementing Internet of Things (IoT) devices?",
    "options": [
      "Lack of physical sensors",
      "Interoperability between different devices and platforms",
      "Excessive manual data entry",
      "High cost of cloud storage"
    ],
    "answer": "Interoperability between different devices and platforms",
    "rationale": "IoT devices often come from different vendors and use varied standards, making integration difficult.",
    "marks": 3
  },
  {
    "id": "q69",
    "type": "multipleChoice",
    "question": "What is a Minimum Viable Product (MVP) in Lean methodology?",
    "options": [
      "A fully featured product released after years of development",
      "A product with just enough features to demonstrate an idea and gather feedback",
      "An outdated version of the software",
      "A prototype rejected by users"
    ],
    "answer": "A product with just enough features to demonstrate an idea and gather feedback",
    "rationale": "MVPs allow teams to test assumptions early and iterate based on user feedback.",
    "marks": 3
  },
  {
    "id": "q70",
    "type": "multipleChoice",
    "question": "Which emerging technology promises virtually unbreakable encryption through quantum key distribution?",
    "options": [
      "Cloud Computing",
      "Quantum Computing",
      "AI and Machine Learning",
      "Blockchain"
    ],
    "answer": "Quantum Computing",
    "rationale": "Quantum key distribution uses quantum mechanics principles to enable highly secure communications.",
    "marks": 3
  },
  {
    "id": "q71",
    "type": "multipleChoice",
    "question": "In Agile methodologies, what is the main purpose of short timeframe increments?",
    "options": [
      "To complete the entire project before showing to stakeholders",
      "To allow regular delivery of working software and get frequent feedback",
      "To delay testing until the end of the project",
      "To document all requirements upfront"
    ],
    "answer": "To allow regular delivery of working software and get frequent feedback",
    "rationale": "Short iterations in Agile enable adaptive planning and stakeholder involvement.",
    "marks": 3
  },
  {
    "id": "q72",
    "type": "multipleChoice",
    "question": "Which role is mainly responsible for ensuring that implemented information systems align with strategic organizational goals?",
    "options": [
      "CIO (Chief Information Officer)",
      "Help Desk Analyst",
      "Programmer",
      "Functional Specialist"
    ],
    "answer": "CIO (Chief Information Officer)",
    "rationale": "The CIO manages IS strategy, budgeting, and aligns IT with business objectives.",
    "marks": 3
  },
  {
    "id": "q73",
    "type": "multipleChoice",
    "question": "What is one ethical concern related to emerging AI and automation technologies?",
    "options": [
      "Job displacement and workforce impact",
      "Increased internet speeds",
      "Reduced data storage costs",
      "Faster hardware manufacturing"
    ],
    "answer": "Job displacement and workforce impact",
    "rationale": "Automation may lead to job loss, raising ethical and societal concerns.",
    "marks": 3
  },
  {
    "id": "q74",
    "type": "multipleChoice",
    "question": "Which implementation methodology allows running both old and new systems simultaneously to reduce risk?",
    "options": [
      "Direct Cutover",
      "Pilot Implementation",
      "Parallel Operation",
      "Phased Implementation"
    ],
    "answer": "Parallel Operation",
    "rationale": "Parallel operation runs both systems concurrently, enabling fallback if issues arise.",
    "marks": 3
  },
  {
    "id": "q75",
    "type": "multipleChoice",
    "question": "Which emerging technology enables devices like smart home sensors to collect and exchange data in real-time?",
    "options": [
      "Blockchain",
      "Internet of Things (IoT)",
      "Quantum Computing",
      "Lean Methodology"
    ],
    "answer": "Internet of Things (IoT)",
    "rationale": "IoT connects physical devices to networks, enabling data exchange and automation.",
    "marks": 3
  }

    ]
  }