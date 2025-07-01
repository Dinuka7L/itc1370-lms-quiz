import { Quiz } from '../../types/quiz';

export const mockFinalPart3Quiz: Quiz = {
    id: 'mock-final-3',
    title: 'Mock Final Exam - Part 3 (Module 2:Excel, Python)',
    description: 'Excel and Python based quiz',
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
  }