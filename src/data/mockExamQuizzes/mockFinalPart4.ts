import { Quiz } from '../../types/quiz';

export const mockFinalPart4Quiz: Quiz = {
  id: 'mock-final-4',
  title: 'Mock Final Exam - Part 4 (Module 3:Python Programming)',
  description: 'A comprehensive final exam covering key concepts in Python programming, including data types, control structures, and functions.',
  timeOptions: [30, 45, 60],
  totalMarks: 79,
  weight: 50,
  category: 'mockFinal',
  questions: [
    {
  "id": "q1",
  "type": "multipleChoice",
  "question": "Which of the following will print the text 'Hello, World!' in Python?",
  "options": ["echo 'Hello, World!'", "print('Hello, World!')", "printf('Hello, World!')", "display('Hello, World!')"],
  "answer": "print('Hello, World!')",
  "rationale": "The print() function is used to output text.",
  "marks": 2
},
{
  "id": "q2",
  "type": "fillInBlank",
  "question": "In Python, single-line comments start with the character ________.",
  "answer": "#",
  "rationale": "Single-line comments begin with #.",
  "marks": 2
},
{
  "id": "q3",
  "type": "multipleChoice",
  "question": "What is the data type of the value 7.5 in Python?",
  "options": ["int", "float", "str", "bool"],
  "answer": "float",
  "rationale": "7.5 is a floating-point number.",
  "marks": 2
},
{
  "id": "q4",
  "type": "fillInBlank",
  "question": "The result of 5 * 2 ** 3 is ________.",
  "answer": "40",
  "rationale": "2 ** 3 = 8; 5 * 8 = 40.",
  "marks": 2
},
{
  "id": "q5",
  "type": "essay",
  "question": "Explain the difference between the 'input()' function and 'print()' function in Python. Provide an example of how each is used.",
  "idealKeywords": ["input()", "print()", "user input", "output", "example"],
  "marks": 4
},
{
  "id": "q6",
  "type": "multipleChoice",
  "question": "Which of these variable names is INVALID in Python?",
  "options": ["my_var", "2ndValue", "_temp", "totalAmount"],
  "answer": "2ndValue",
  "rationale": "Variable names cannot start with a digit.",
  "marks": 3
},
{
  "id": "q7",
  "type": "multiSelect",
  "question": "Which of the following expressions will evaluate to True?",
  "options": ["5 > 3 and 2 < 1", "not (4 == 4)", "3 != 2 or 2 > 5", "7 >= 7 and not False"],
  "answer": ["3 != 2 or 2 > 5", "7 >= 7 and not False"],
  "rationale": "Only these two are True.",
  "marks": 4
},
{
  "id": "q8",
  "type": "matching",
  "question": "Match the Python data type to an example value.",
  "matchPairs": [
    {"id": "pair1", "left": "int", "right": "42"},
    {"id": "pair2", "left": "float", "right": "3.14"},
    {"id": "pair3", "left": "str", "right": "'Python'"}
  ],
  "marks": 3
},
{
  "id": "q9",
  "type": "dropdown",
  "question": "What will this code output if the user inputs 5?\n\n```python\nnum = int(input('Enter number: '))\nif num % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')\n```\n\nResult: [dropdown_1]",
  "dropdownBlanks": [
    {
      "id": "dropdown_1",
      "options": ["Even", "Odd", "Error", "5"],
      "correctAnswer": "Odd"
    }
  ],
  "rationale": "5 % 2 = 1, so it's Odd.",
  "marks": 3
},
{
  "id": "q10",
  "type": "fillInBlank",
  "question": "The expression int('7') + float('2.5') evaluates to ________.",
  "answer": "9.5",
  "rationale": "7 + 2.5 = 9.5.",
  "marks": 3
},
{
  "id": "q11",
  "type": "essay",
  "question": "Write a Python program that asks the user to input two numbers, converts them to integers, calculates their sum, and prints the result in the format 'The sum is: X'.",
  "idealKeywords": ["input()", "int()", "sum", "print()"],
  "marks": 5
},
{
  "id": "q12",
  "type": "multipleChoice",
  "question": "What will the following code print?\n\n```python\na = 3\nb = 4\nif a * b > 10\n    print('High')\nelse:\n    print('Low')\n```\n",
  "options": ["High", "Low", "Error", "Nothing"],
  "answer": "Error",
  "rationale": "The if statement is missing a colon. Correct syntax is 'if a * b > 10:'.",
  "marks": 4
},
{
  "id": "q13",
  "type": "essay",
  "question": "Describe how you would use nested if statements and logical operators to determine whether a number is positive, negative, or zero AND whether it is even or odd.",
  "idealKeywords": ["nested if", "logical operators", "positive", "negative", "zero", "even", "odd"],
  "marks": 6
},
{
  "id": "q13",
  "type": "essay",
  "question": "Describe how you would use nested if statements and logical operators to determine whether a number is positive, negative, or zero AND whether it is even or odd.",
  "idealKeywords": ["nested if", "logical operators", "positive", "negative", "zero", "even", "odd"],
  "marks": 6
},
{
  "id": "q14",
  "type": "dragDrop",
  "question": "Drag and drop the correct operators to complete the expressions:\n\nExpression 1: 5 [blank_1] 2 = 10\n\nExpression 2: 7 [blank_2] 3 = 1",
  "dragItems": [
    {"id": "item1", "content": "*", "category": "blank_1"},
    {"id": "item2", "content": "%", "category": "blank_2"},
    {"id": "item3", "content": "+", "category": "unused"}
  ],
  "marks": 4
},
{
  "id": "q15",
  "type": "multiSelect",
  "question": "Select all statements that correctly describe Python variables:",
  "options": [
    "Variable names are case-sensitive.",
    "You must declare the data type explicitly.",
    "Variables can change type during execution.",
    "Variable names can include spaces."
  ],
  "answer": [
    "Variable names are case-sensitive.",
    "Variables can change type during execution."
  ],
  "rationale": "Python infers types automatically; variable names cannot contain spaces.",
  "marks": 5
},
{
  "id": "q16",
  "type": "dropdown",
  "question": "Complete the sentence:\n\nA variable that holds either True or False is of type [dropdown_1].",
  "dropdownBlanks": [
    {
      "id": "dropdown_1",
      "options": ["bool", "int", "str", "float"],
      "correctAnswer": "bool"
    }
  ],
  "rationale": "True/False values are booleans.",
  "marks": 3
},
{
  "id": "q17",
  "type": "multipleChoice",
  "question": "What will this code print?\n\n```python\nx = 10\ny = 3\nif x // y == 3:\n    print('A')\nelse:\n    print('B')\n```\n",
  "options": ["A", "B", "Error", "3"],
  "answer": "A",
  "rationale": "10//3 = 3.",
  "marks": 4
},
{
  "id": "q18",
  "type": "essay",
  "question": "Given the following requirements, write a program:\n\n1. Ask the user for a number.\n2. Convert it to an integer.\n3. If it is divisible by both 3 and 5, print 'FizzBuzz'.\n4. If divisible by only 3, print 'Fizz'.\n5. If divisible by only 5, print 'Buzz'.\n6. Otherwise, print the number itself.",
  "idealKeywords": ["input()", "int()", "if", "elif", "else", "modulus operator"],
  "marks": 6
},
{
  "id": "q19",
  "type": "matching",
  "question": "Match the operation with its description.",
  "matchPairs": [
    {"id": "pair1", "left": "Exponentiation (**)", "right": "Raises a number to a power"},
    {"id": "pair2", "left": "Modulus (%)", "right": "Returns the remainder after division"},
    {"id": "pair3", "left": "Floor Division (//)", "right": "Divides and rounds down to nearest integer"}
  ],
  "marks": 4
},
{
  "id": "q20",
  "type": "multiSelect",
  "question": "Which of the following are valid outputs of type() for built-in data types in Python?",
  "options": ["<class 'int'>", "<class 'decimal'>", "<class 'str'>", "<class 'float'>"],
  "answer": ["<class 'int'>", "<class 'str'>", "<class 'float'>"],
  "rationale": "decimal is not a built-in type by default.",
  "marks": 4
}



  ]
}
