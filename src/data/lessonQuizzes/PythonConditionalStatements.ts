import { Quiz } from '../../types/quiz';

export const PythonConditionalStatementsQuiz: Quiz = {
  "id": "quiz-conditional-statements-1",
  "title": "Python - Conditional Statements Mastery Test",
  "description": "Assess your knowledge of if, elif, else, logical operators, and nested if statements in Python.",
  "timeOptions": [10, 15, 20, 35],
  "totalMarks": 70,
  "weight": 0,
  "category": "lesson",
  "questions": [
    {
      "id": "q1",
      "type": "multipleChoice",
      "question": "Which keyword is used to specify an alternative condition after an if statement?",
      "options": ["else", "elseif", "elif", "then"],
      "answer": "elif",
      "rationale": "In Python, `elif` is used for 'else if' conditions.",
      "marks": 2
    },
    {
      "id": "q2",
      "type": "dropdown",
      "question": "Fill in the blanks to check if a number is even or odd:\n\n```python\nnum = 7\nif num % 2 == 0:\n    print(\"Even\")\nelse:\n    print(\"_________\")\n```[dropdown_1]",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["Odd", "Even", "Zero", "Positive"],
          "correctAnswer": "Odd"
        }
      ],
      "rationale": "If the number is not even, it is odd.",
      "marks": 3
    },
    {
      "id": "q3",
      "type": "dropdown",
      "question": "Complete this `if...elif...else` grading logic if 64 is maximum mark for a 'C' grade:\n\n```python\nscore = 85\nif score >= 80:\n    grade = \"A\"\nelif score >= _________:\n    grade = \"B\"\nelse:\n    grade = \"C\"\n```[dropdown_1]",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["70", "60", "65", "50"],
          "correctAnswer": "65"
        }
      ],
      "rationale": "The Grade B starts at 65.",
      "marks": 3
    },
    {
      "id": "q4",
      "type": "multipleChoice",
      "question": "Which logical operator returns True if both conditions are True?",
      "options": ["or", "and", "not", "xor"],
      "answer": "and",
      "rationale": "`and` requires both conditions to be True.",
      "marks": 2
    },
    {
      "id": "q5",
      "type": "dropdown",
      "question": "Fill in the blank to check eligibility for promotion:\n\n```python\nyears = 4\nif years >= 3:\n    print(\"Eligible\")\nelse:\n    print(\"______\")\n```[dropdown_1]",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["Eligible", "Not eligible", "Pending", "Rejected"],
          "correctAnswer": "Not eligible"
        }
      ],
      "rationale": "If years <3, 'Not eligible' should be printed.",
      "marks": 3
    },
    {
      "id": "q6",
      "type": "dropdown",
      "question": "Identify the correct logical operator to check if either condition is True:\n\n```python\nif x > 10 _______ y < 5:\n    print(\"Condition met\")\n```[dropdown_1]",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["and", "or", "not", "elif"],
          "correctAnswer": "or"
        }
      ],
      "rationale": "`or` is used for at least one condition True.",
      "marks": 3
    },
    {
      "id": "q7",
      "type": "multiSelect",
      "question": "Which of the following are valid Python comparison operators?",
      "options": [">=", "==", "!=", "=<"],
      "answer": [">=", "==", "!="],
      "rationale": "`=<` is invalid; `<=` is correct.",
      "marks": 3
    },
    {
      "id": "q8",
      "type": "dropdown",
      "question": "Complete the nested if to check grade and attendance:\n\n```python\ngrade = 80\nattendance = 85\nif grade >= 75:\n    if attendance > _____:\n        print(\"Partial Scholarship\")\n    else:\n        print(\"No Scholarship\")\n```[dropdown_1]",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["70", "80", "90", "60"],
          "correctAnswer": "80"
        }
      ],
      "rationale": "Attendance must be above 80%.",
      "marks": 3
    },
    {
      "id": "q9",
      "type": "dropdown",
      "question": "Complete this code to use NOT operator:\n\n```python\nis_verified = False\nif ______ is_verified:\n    print(\"Fraud Alert\")\nelse:\n    print(\"Safe\")\n```[dropdown_1]",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["not", "or", "and", "elif"],
          "correctAnswer": "not"
        }
      ],
      "rationale": "`not` reverses the boolean value.",
      "marks": 3
    },
    {
      "id": "q10",
      "type": "multipleChoice",
      "question": "Which statement about nested if is TRUE?",
      "options": [
        "You cannot put an if inside an else.",
        "Nested if checks secondary conditions only if primary is True.",
        "Nested if is always faster than elif.",
        "Python does not support nested if."
      ],
      "answer": "Nested if checks secondary conditions only if primary is True.",
      "rationale": "That's the definition of nested if.",
      "marks": 2
    },
    {
      "id": "q11",
      "type": "dropdown",
      "question": "Fill in the blank to apply a discount of 10% :\n\n```python\namount = 12000\nif amount > 10000:\n    discount = amount * _____\n```[dropdown_1]",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["0.1", "20%", "0.05", "0.15"],
          "correctAnswer": "0.1"
        }
      ],
      "rationale": "10% discount means multiplying by 0.1.",
      "marks": 3
    },
    {
      "id": "q12",
      "type": "dropdown",
      "question": "Choose the correct comparison to check if savings are positive:\n\n```python\nif savings _______ 0:\n    print(\"Positive savings\")\n```[dropdown_1]",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": [">", "<", ">=", "<="],
          "correctAnswer": ">"
        }
      ],
      "rationale": "Positive means greater than zero.",
      "marks": 3
    },
    {
      "id": "q13",
      "type": "multiSelect",
      "question": "Select all logical operators available in Python:",
      "options": ["and", "or", "not", "xor"],
      "answer": ["and", "or", "not"],
      "rationale": "Python does not have `xor` as an operator.",
      "marks": 3
    },
    {
      "id": "q14",
      "type": "essay",
      "question": "Explain how logical operators can be combined with if-elif-else statements to implement complex decision-making in Python.",
      "idealKeywords": ["and", "or", "not", "multiple conditions", "branching"],
      "marks": 5
    },
    {
      "id": "q15",
      "type": "dropdown",
      "question": "Fill in to determine loan eligibility:\n\n```python\ndefaults = \"no\"\ncredit_score = 750\nincome = 60000\nsavings = 5000\nif defaults == \"no\":\n    if credit_score > 700 ______ income > 50000:\n        print(\"Eligible\")\n```[dropdown_1]",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["and", "or", "not", "elif"],
          "correctAnswer": "and"
        }
      ],
      "rationale": "Both conditions must be True to be eligible.",
      "marks": 3
    },
    {
      "id": "q16",
      "type": "multipleChoice",
      "question": "What happens if all `if` and `elif` conditions are False and there is no `else`?",
      "options": [
        "An error occurs.",
        "The last `elif` block runs.",
        "Nothing happens.",
        "Python raises an exception."
      ],
      "answer": "Nothing happens.",
      "rationale": "The control simply moves past the block.",
      "marks": 2
    },
    {
      "id": "q17",
      "type": "dropdown",
      "question": "Fill in to check membership status:\n\n```python\nis_member = True\nif _______ is_member:\n    print(\"Welcome member!\")\nelse:\n    print(\"Please sign up.\")\n```[dropdown_1]",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["not", "or", "", "and"],
          "correctAnswer": ""
        }
      ],
      "rationale": "No operator is needed if you want to check for True.",
      "marks": 3
    },
    {
      "id": "q18",
      "type": "essay",
      "question": "Describe a scenario where nested if statements are preferred over multiple elif statements, and explain why.",
      "idealKeywords": ["hierarchical", "dependent conditions", "layered logic"],
      "marks": 5
    },
    {
      "id": "q19",
      "type": "dropdown",
      "question": "Fill in to check if a customer qualifies for free shipping:\n\n```python\ntotal_purchase = 1200\nis_member = False\nif (total_purchase > 500 and is_member) or (total_purchase > ________ and not is_member):\n    print(\"Free Shipping\")\nelse:\n    print(\"No Free Shipping\")\n```[dropdown_1]",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["500", "800", "1000", "1500"],
          "correctAnswer": "1000"
        }
      ],
      "rationale": "Non-members need >1000 purchase.",
      "marks": 3
    },
    {
      "id": "q20",
      "type": "dropdown",
      "question": "Fill in the blank to classify BMI:\n\n```python\nBMI = 31\nif BMI >= 30:\n    print(\"[dropdown_1]\")\n```",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["Obesity", "Overweight", "Normal", "Underweight"],
          "correctAnswer": "Obesity"
        }
      ],
      "rationale": "BMI >=30 is Obesity.",
      "marks": 3
    }
  ]
}