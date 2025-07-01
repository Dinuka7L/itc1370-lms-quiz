import { Quiz } from '../../types/quiz';

export const DataAndDatabasesQuiz: Quiz = {
  "id": "quiz-data-and-databases-1",
  "title": "Lesson 4 - Data and Databases",
  "description": "Practice quiz covering business analytics, DBMS concepts, DIKW hierarchy, and big data.",
  "timeOptions": [10, 15, 20, 45, 60],
  "totalMarks": 63,
  "weight": 0,
  "category": "lesson",
  "questions": [
    {
      "id": "q1",
      "type": "multiSelect",
      "question": "In a business analytics report, which of the following represent quantitative data that can be directly measured or counted?",
      "options": [
        "Customer satisfaction ratings collected on a scale from 1 to 5 for product quality.",
        "Quarterly revenue figures reported as exact dollar amounts.",
        "Open-ended employee survey responses describing their job experience in detail.",
        "Descriptive manager notes on team communication effectiveness during projects."
      ],
      "answer": [
        "Customer satisfaction ratings collected on a scale from 1 to 5 for product quality.",
        "Quarterly revenue figures reported as exact dollar amounts."
      ],
      "rationale": "Only the first two options are quantitative; open-ended responses and descriptive notes are qualitative.",
      "marks": 4
    },
    {
      "id": "q2",
      "type": "multipleChoice",
      "question": "Which of the following best describes the difference between information and knowledge in a business context?",
      "options": [
        "Information is raw facts, while knowledge is data presented in tables.",
        "Information is processed data used for decision-making, while knowledge comes from analyzing and applying information over time.",
        "Information requires wisdom to interpret, while knowledge is just stored data.",
        "Information and knowledge are the same; only wisdom is different."
      ],
      "answer": "Information is processed data used for decision-making, while knowledge comes from analyzing and applying information over time.",
      "rationale": "Information is organized data; knowledge adds context and experience.",
      "marks": 3
    },
    {
      "id": "q3",
      "type": "multipleChoice",
      "question": "What step turns this information into knowledge?",
      "options": [
        "Calculating the percentage of negative reviews.",
        "Deciding to hire a new logistics provider based on the findings.",
        "Storing the reviews in a database.",
        "Summarizing the reviews in a report."
      ],
      "answer": "Deciding to hire a new logistics provider based on the findings.",
      "rationale": "Knowledge is applying insights to make decisions.",
      "marks": 3
    },
    {
      "id": "q4",
      "type": "matching",
      "question": "Match each artifact to the appropriate level within the DIKW (Data, Information, Knowledge, Wisdom) hierarchy.",
      "matchPairs": [
        { "id": "pair1", "left": "\"1,248 unresolved customer tickets in Q3\"", "right": "Data" },
        { "id": "pair2", "left": "\"Ticket resolution time averages 48 hours (industry avg: 24 hrs)\"", "right": "Information" },
        { "id": "pair3", "left": "\"Analysis: Slow resolution correlates with outdated CRM software\"", "right": "Knowledge" },
        { "id": "pair4", "left": "\"Proposal: Upgrade to AI-powered CRM (+train staff) to cut resolution time by 50%\"", "right": "Wisdom" }
      ],
      "marks": 6
    },
    {
      "id": "q5",
      "type": "dropdown",
      "question": "Complete the paragraph by selecting the most technically accurate terms.\n\n\"General-purpose application software (e.g., word processors) typically stores data in [dropdown_1], whereas modern information systems rely on [dropdown_2] for structured, integrated data storage. Historically, even specialized software in early information systems used [dropdown_3] for storage, despite their limitations in [dropdown_4] and [dropdown_5] compared to contemporary solutions.\"",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": [
            "relational databases",
            "files (e.g., .docx)",
            "blockchain ledgers",
            "printed reports"
          ],
          "correctAnswer": "files (e.g., .docx)"
        },
        {
          "id": "dropdown_2",
          "options": [
            "spreadsheets",
            "computer databases",
            ".txt files",
            "email attachments"
          ],
          "correctAnswer": "computer databases"
        },
        {
          "id": "dropdown_3",
          "options": [
            "cloud storage",
            "USB drives",
            "paper forms",
            "standard data files"
          ],
          "correctAnswer": "standard data files"
        },
        {
          "id": "dropdown_4",
          "options": [
            "scalability",
            "easy data entry",
            "offline access",
            "file naming"
          ],
          "correctAnswer": "scalability"
        },
        {
          "id": "dropdown_5",
          "options": [
            "printer compatibility",
            "multi-user access",
            "color schemes",
            "audio playback"
          ],
          "correctAnswer": "multi-user access"
        }
      ],
      "rationale": "Modern systems rely on databases rather than flat files, and early standard data files had limitations in scalability and multi-user access.",
      "marks": 5
    },
    {
      "id": "q6",
      "type": "multipleChoice",
      "question": "In the context of data organization, which of the following sequences correctly represents the hierarchy from smallest to largest unit?",
      "options": [
        "File → Record → Field → Character (Byte) → Bit",
        "Bit → Character (Byte) → Field → Record → File",
        "Field → Bit → Character (Byte) → File → Record",
        "Record → Bit → File → Field → Character (Byte)"
      ],
      "answer": "Bit → Character (Byte) → Field → Record → File",
      "rationale": "Data builds from bits up to complete files.",
      "marks": 3
    },
    {
      "id": "q7",
      "type": "dropdown",
      "question": "Based on the DBMS diagram shown above, identify the most technically accurate term for each concept:<br><br>I. A single row in a table is called a [dropdown_1].<br><br>II. The smallest unit of data in a table is a [dropdown_2].<br><br>III. A vertical arrangement of data values is known as a [dropdown_3].<br><br>IV. A table itself is referred to as a [dropdown_4].",
      "image": "/images/DBMS-Database-P1.png",
      "imageAlt": "Database Management System architecture diagram showing various components and their relationships",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["Relation", "Column", "Record", "Field"],
          "correctAnswer": "Record"
        },
        {
          "id": "dropdown_2",
          "options": ["Relation", "Column", "Record", "Field"],
          "correctAnswer": "Field"
        },
        {
          "id": "dropdown_3",
          "options": ["Relation", "Column", "Record", "Field"],
          "correctAnswer": "Column"
        },
        {
          "id": "dropdown_4",
          "options": ["Relation", "Column", "Record", "Field"],
          "correctAnswer": "Relation"
        }
      ],
      "rationale": "A Record is a row, a Field is the smallest unit of data, a Column is a vertical set of fields, and a Relation is the table itself in relational databases.",
      "marks": 5
    },
    {
      "id": "q8",
      "type": "multipleChoice",
      "question": "Flat file systems have several limitations compared to modern database management systems.<br> Identify the option that contains only the incorrect statements.<br>1. Data Redundancy: Flat file systems often store the same data in multiple files, leading to increased storage needs and potential inconsistencies. <br>2. Data Integrity Issues: Flat file systems automatically enforce data integrity through built-in constraints, ensuring consistent and accurate data. <br>3. Weak Security: Flat file systems lack robust security features, making data vulnerable to unauthorized access or modifications.<br> 4. Coarse Sharing: Flat file systems allow fine-grained sharing, enabling multiple users to access specific records simultaneously with ease.<br><b>Identify the option that contains only the incorrect statements:</b> ",
      "options": [
        "1 and 3",
        "2 and 4",
        "1 and 2",
        "3 and 4"
      ],
      "answer": "2 and 4",
      "rationale": "Statement 2 is false (flat files don't enforce data integrity), and 4 is false (flat files do not enable fine-grained sharing).",
      "marks": 3
    },
    {
    "id": "q9",
    "type": "dropdown",
    "question": "Based on the diagram shown above, select the most appropriate database model corresponding to each concept of data organization and visualization:<br><br>I. A simple structure storing data in plain text without relationships: [dropdown_1]<br><br>II. A tree-like structure where each record has a single parent: [dropdown_2]<br><br>III. A flexible structure allowing records to have multiple parent and child relationships: [dropdown_3]<br><br>IV. A structure where data is stored in tables with rows and columns and can be related through keys: [dropdown_4].",
    "image": "/images/DBMS-Database-Types-P2.png",
    "imageAlt": "Diagram illustrating Database models",
    "dropdownBlanks": [
      {
        "id": "dropdown_1",
        "options": [
          "Flat File Model",
          "Hierarchical Model",
          "Network Model",
          "Relational Model"
        ],
        "correctAnswer": "Flat File Model"
      },
      {
        "id": "dropdown_2",
        "options": [
          "Flat File Model",
          "Hierarchical Model",
          "Network Model",
          "Relational Model"
        ],
        "correctAnswer": "Hierarchical Model"
      },
      {
        "id": "dropdown_3",
        "options": [
          "Flat File Model",
          "Hierarchical Model",
          "Network Model",
          "Relational Model"
        ],
        "correctAnswer": "Network Model"
      },
      {
        "id": "dropdown_4",
        "options": [
          "Flat File Model",
          "Hierarchical Model",
          "Network Model",
          "Relational Model"
        ],
        "correctAnswer": "Relational Model"
      }
    ],
    "rationale": "The Flat File Model stores unstructured data; the Hierarchical Model uses tree-like parent-child relationships; the Network Model allows more complex many-to-many relationships; and the Relational Model organizes data in related tables.",
    "marks": 5
  },
    {
      "id": "q10",
      "type": "multipleChoice",
      "question": "The relational database model organizes data into tables (or relations) with specific structures and relationships. Following are four statements related to it:<br><br>1. Data in a relational database is organized into tables, where each table has a set of fields that define its structure.<br><br>2. A record in a relational database is represented as a column, and fields are the rows of the table.<br><br>3. The relational database model allows tables to be joined using a unique identifier, such as \"StudentID,\" to connect related data.<br><br>4. Every table in a relational database must contain the same number of fields and records to maintain consistency.<br><br>Identify the statements that are correct.",
      "options": [
        "a) 1 and 3",
        "b) 2 and 4",
        "c) 1 and 2",
        "d) 3 and 4"
      ],
      "answer": "a) 1 and 3",
      "rationale": "Statements 1 and 3 are correct. Statement 2 is incorrect because rows (not columns) represent records, and statement 4 is incorrect as tables can have different numbers of records.",
      "marks": 3
    },
    {
      "id": "q11",
      "type": "multipleChoice",
      "question": "Assess the statements about the characteristics of keys in a relational database model.<br>1. A key that uniquely identifies each entry in a table must always be distinct, never allow null values, and is often optimized for quick searches across linked data structures.<br>2.A key that links to another table can include empty values and is free from any rules ensuring it matches an existing key in the referenced table.<br>3.A key serving as the main identifier in its table must remain consistent and unchangeable to provide a reliable anchor for connections, preserving data harmony.<br>4.A key that establishes a relationship with another table can point to multiple primary identifiers simultaneously, offering adaptable links without rigid consistency checks.<br><b>Identify the statements that are correct.</b>",
      "options": [
        "1 and 3",
        "2 and 4",
        "1 and 2",
        "3 and 4"
      ],
      "answer": "1 and 3",
      "rationale": "Primary keys are unique, not null, and stable; foreign keys must match referenced keys.",
      "marks": 3
    },
    {
      "id": "q12",
      "type": "fillInBlank",
      "question": "Give 4 examples for Database Management Software.",
      "answer": "Microsoft Access, Oracle Database, IBM Db2, PostgreSQL",
      "rationale": "These are common DBMS products.",
      "marks": 4
    },
    {
      "id": "q13",
      "type": "multipleChoice",
      "question": "What is a DBMS?",
      "options": [
        "programming language for web development",
        "A software used to design user interfaces",
        "A software for creating and managing databases",
        "An operating system used in enterprise environments"
      ],
      "answer": "A software for creating and managing databases",
      "rationale": "A DBMS is software for database management.",
      "marks": 2
    },
    {
      "id": "q15",
      "type": "matching",
      "question": "Match the Business Analytics Technique with its Description.",
      "matchPairs": [
        { "id": "pair1", "left": "A. Statistical Analysis", "right": "Collects, organizes, and interprets data within surveys and experiments." },
        { "id": "pair2", "left": "B. Natural Language Processing (NLP)", "right": "Applies computational techniques to analyze and synthesize natural language and speech." },
        { "id": "pair3", "left": "C. Machine Learning", "right": "Works with computer algorithms to produce intelligent output based on data." },
        { "id": "pair4", "left": "D. Data Mining", "right": "Extracts patterns from large data sets by combining methods from statistics and machine learning." }
      ],
      "marks": 6
    },
    {
      "id": "q16",
      "type": "multipleChoice",
      "question": "Which of the following best describes Big Data and its implications in modern data analysis?",
      "options": [
        "Big Data refers to large volumes of structured data that can be efficiently processed using traditional relational databases.",
        "Big Data involves massive, complex, and diverse data sets that exceed the capabilities of traditional data processing tools. It is defined by the 5Vs: Volume, Velocity, Variety, Veracity, and Value.",
        "Big Data is mainly about unstructured video and image data from the internet. It is defined only by Volume and Variety.",
        "Big Data is the collection of personal data for marketing purposes. It is a privacy threat and irrelevant to scientific or governmental decision-making."
      ],
      "answer": "Big Data involves massive, complex, and diverse data sets that exceed the capabilities of traditional data processing tools. It is defined by the 5Vs: Volume, Velocity, Variety, Veracity, and Value.",
      "rationale": "Option B is correct; the 5Vs define Big Data.",
      "marks": 3
    },
    {
    "id": "q17",
    "type": "dropdown",
    "question": "For each statement below, select whether it describes a Data Mart or a Data Warehouse:<br><br>I. Serves a specific business function with focused data relevant only to that area: [dropdown_1]<br><br>II. Consolidates and integrates data from across all departments in the organization: [dropdown_2]<br><br>III. Generally faster to deploy due to smaller size and scope: [dropdown_3]<br><br>IV. Designed to support enterprise-wide, long-term data storage and analysis: [dropdown_4]",
    "dropdownBlanks": [
      {
        "id": "dropdown_1",
        "options": ["Data Mart", "Data Warehouse"],
        "correctAnswer": "Data Mart"
      },
      {
        "id": "dropdown_2",
        "options": ["Data Mart", "Data Warehouse"],
        "correctAnswer": "Data Warehouse"
      },
      {
        "id": "dropdown_3",
        "options": ["Data Mart", "Data Warehouse"],
        "correctAnswer": "Data Mart"
      },
      {
        "id": "dropdown_4",
        "options": ["Data Mart", "Data Warehouse"],
        "correctAnswer": "Data Warehouse"
      }
    ],
    "rationale": "Data Marts serve specific departments and are quicker to deploy, while Data Warehouses integrate organization-wide data for long-term analysis.",
    "marks": 6
  }

  ]
}