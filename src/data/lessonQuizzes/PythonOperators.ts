import { Quiz } from '../../types/quiz';

export const PythonOperatorsQuiz: Quiz = {
    id: 'python-operators-test',
    title: 'Python Operators Test',
    description: 'Comprehensive assessment covering Python fundamentals and programming concepts',
    timeOptions: [30],
    totalMarks: 25,
    weight: 0,
    category: 'lesson',
    questions: [
  {
    "id": "q1",
    "type": "multipleChoice",
    "question": "Which operator is used for exponentiation in Python?",
    "options": ["**", "//", "%", "+"],
    "answer": "**",
    "rationale": "** is the exponentiation operator in Python.",
    "marks": 2
  },
  {
    "id": "q2",
    "type": "multipleChoice",
    "question": "What will be the result of 15%% 4 in Python?",
    "options": ["3", "4", "2", "1"],
    "answer": "3",
    "rationale": "The modulus operator (%) returns the remainder, which is 3.",
    "marks": 2
  },
  {
    "id": "q3",
    "type": "multipleChoice",
    "question": "Which operator is used for floor division in Python?",
    "options": ["//", "/", "%", "**"],
    "answer": "//",
    "rationale": "// performs floor division, returning the largest whole number.",
    "marks": 2
  },
  {
    "id": "q4",
    "type": "multipleChoice",
    "question": "What is the output of 2 * 3 + 5 in Python?",
    "options": ["11", "16", "10", "21"],
    "answer": "11",
    "rationale": "Multiplication is performed first (2*3=6), then addition (6+5=11).",
    "marks": 2
  },
  {
    "id": "q5",
    "type": "multipleChoice",
    "question": "Which operator is used to get the remainder of a division?",
    "options": ["%", "//", "/", "*"],
    "answer": "%",
    "rationale": "% is the modulus operator, which gives the remainder.",
    "marks": 2
  },
  {
    "id": "q6",
    "type": "multipleChoice",
    "question": "What is the result of 7 // 2 in Python?",
    "options": ["3", "3.5", "4", "2"],
    "answer": "3",
    "rationale": "// operator gives the floor value of the division.",
    "marks": 2
  },
  {
    "id": "q7",
    "type": "multipleChoice",
    "question": "Which of the following is an arithmetic operator in Python?",
    "options": ["+", "and", "is", "not in"],
    "answer": "+",
    "rationale": "+ is an arithmetic operator; others are logical or special operators.",
    "marks": 2
  },
  {
    "id": "q8",
    "type": "multipleChoice",
    "question": "What is the output of 4 ** 2 in Python?",
    "options": ["16", "8", "6", "12"],
    "answer": "16",
    "rationale": "4 ** 2 means 4 raised to the power of 2, which is 16.",
    "marks": 2
  },
  {
    "id": "q9",
    "type": "multipleChoice",
    "question": "Which operator would you use to add two numbers in Python?",
    "options": ["+", "-", "*", "/"],
    "answer": "+",
    "rationale": "+ is used for addition.",
    "marks": 2
  },
  {
    "id": "q10",
    "type": "multipleChoice",
    "question": "What will be the result of 10 - 3 * 2 in Python?",
    "options": ["4", "14", "16", "6"],
    "answer": "4",
    "rationale": "Multiplication first (3*2=6), then subtraction (10-6=4).",
    "marks": 2
  },
  {
    "id": "q11",
    "type": "multipleChoice",
    "question": "Which operator is used for division in Python?",
    "options": ["/", "%", "//", "**"],
    "answer": "/",
    "rationale": "/ is the division operator.",
    "marks": 2
  },
  {
    "id": "q12",
    "type": "multipleChoice",
    "question": "What will be the output of 5 + 2 * 3 in Python?",
    "options": ["11", "21", "7", "15"],
    "answer": "11",
    "rationale": "Multiplication first (2*3=6), then addition (5+6=11).",
    "marks": 2
  },
  {
    "id": "q13",
    "type": "multipleChoice",
    "question": "Which of the following is NOT an arithmetic operator in Python?",
    "options": ["and", "+", "-", "*"],
    "answer": "and",
    "rationale": "and is a logical operator, not arithmetic.",
    "marks": 1
  }
]
}