import { Quiz } from '../../types/quiz';

export const mockFinalPart4Quiz: Quiz = {
  id: 'mock-final-4',
  title: 'Mock Final Exam - Part 4 (Module 3:Word Processing)',
  description: 'A comprehensive final exam covering key concepts and practical skills in Microsoft Word 2016, including document creation, formatting, file management, and productivity features.',
  timeOptions: [30, 45, 60],
  totalMarks: 25,
  weight: 20,
  category: 'mockFinal',
  questions: [
    {
      "id": "q1",
      "type": "multipleChoice",
      "question": "Which tab in Word 2016 contains the command to display or hide the ruler?",
      "options": ["Home", "Insert", "View", "Design"],
      "answer": "View",
      "rationale": "The View tab contains the option to show or hide the ruler in Word 2016.",
      "marks": 3
    },
    {
      "id": "q2",
      "type": "multipleChoice",
      "question": "What is the default file extension for documents created in Word 2016?",
      "options": [".doc", ".docx", ".txt", ".rtf"],
      "answer": ".docx",
      "rationale": "Word 2016 saves documents in the .docx format by default.",
      "marks": 3
    },
    {
      "id": "q3",
      "type": "multipleChoice",
      "question": "Which shortcut key combination is used to select all text in a Word document?",
      "options": ["Ctrl+S", "Ctrl+A", "Ctrl+E", "Ctrl+L"],
      "answer": "Ctrl+A",
      "rationale": "Ctrl+A selects all content in the document.",
      "marks": 2
    },
    {
      "id": "q4",
      "type": "multiSelect",
      "question": "Which of the following are valid ways to save a document in Word 2016?",
      "options": ["File > Save", "Ctrl+S", "File > Save As", "Alt+F4"],
      "answer": ["File > Save", "Ctrl+S", "File > Save As"],
      "rationale": "Alt+F4 closes the application; the others are valid save methods.",
      "marks": 4
    },
    {
      "id": "q5",
      "type": "multiSelect",
      "question": "Which locations can you choose to save your document in Word 2016?",
      "options": ["OneDrive - Personal", "This PC", "Sites - Organization", "Recycle Bin"],
      "answer": ["OneDrive - Personal", "This PC", "Sites - Organization"],
      "rationale": "Recycle Bin is not a save location.",
      "marks": 4
    },
    {
      "id": "q6",
      "type": "fillInBlank",
      "question": "The keyboard shortcut for copying selected text is ________.",
      "answer": "Ctrl+C",
      "rationale": "Ctrl+C is the standard shortcut for copy.",
      "marks": 2
    },
    {
      "id": "q7",
      "type": "fillInBlank",
      "question": "To move the cursor to the beginning of a line, press the ________ key.",
      "answer": "Home",
      "rationale": "The Home key moves the cursor to the start of a line.",
      "marks": 2
    },
    {
      "id": "q8",
      "type": "fillInBlank",
      "question": "The default line spacing in Word 2016 is ________.",
      "answer": "1.15",
      "rationale": "Word 2016 uses 1.15 as the default line spacing.",
      "marks": 2
    },
    {
      "id": "q9",
      "type": "essay",
      "question": "Explain the process and importance of converting a document from Compatibility Mode to Word 2016 format.",
      "idealKeywords": ["Compatibility Mode", "Convert", ".docx", "enhanced features", "editing"],
      "marks": 8
    },
    {
      "id": "q10",
      "type": "essay",
      "question": "Discuss the different ways you can protect a Word document and why document security is important.",
      "idealKeywords": ["password", "encryption", "Protect Document", "confidential", "security"],
      "marks": 8
    },
    {
      "id": "q11",
      "type": "matching",
      "question": "Match the keyboard shortcut with its function.",
      "matchPairs": [
        { "id": "pair1", "left": "Ctrl+B", "right": "Bold text" },
        { "id": "pair2", "left": "Ctrl+U", "right": "Underline text" },
        { "id": "pair3", "left": "Ctrl+I", "right": "Italicize text" },
        { "id": "pair4", "left": "Ctrl+Z", "right": "Undo last action" }
      ],
      "marks": 4
    },
    {
      "id": "q12",
      "type": "matching",
      "question": "Match the save location with its typical use.",
      "matchPairs": [
        { "id": "pair1", "left": "OneDrive - Personal", "right": "Private or shared with friends/family" },
        { "id": "pair2", "left": "Sites - Organization", "right": "Shared with your team" },
        { "id": "pair3", "left": "This PC", "right": "Save to a local folder" }
      ],
      "marks": 3
    },
    {
      "id": "q13",
      "type": "dragDrop",
      "question": "Drag and drop the correct terms:\n\n[blank_1] is used to copy formatting, while [blank_2] is used to paste copied content.",
      "dragItems": [
        { "id": "item1", "content": "Format Painter", "category": "blank_1" },
        { "id": "item2", "content": "Paste", "category": "blank_2" }
      ],
      "marks": 3
    },
    {
      "id": "q14",
      "type": "dragDrop",
      "question": "Drag and drop the correct terms:\n\n[blank_1] is used to move the cursor to the end of a document, while [blank_2] moves to the beginning.",
      "dragItems": [
        { "id": "item1", "content": "Ctrl+End", "category": "blank_1" },
        { "id": "item2", "content": "Ctrl+Home", "category": "blank_2" }
      ],
      "marks": 3
    },
    {
      "id": "q15",
      "type": "dropdown",
      "question": "To create a new document from a template, go to [dropdown_1] > New.",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["File", "Home", "Insert", "Review"],
          "correctAnswer": "File"
        }
      ],
      "rationale": "The File tab is used to create new documents from templates.",
      "marks": 2
    },
    {
      "id": "q16",
      "type": "dropdown",
      "question": "The [dropdown_1] command allows you to recover unsaved documents.",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["Open", "Save As", "Info", "Print"],
          "correctAnswer": "Open"
        }
      ],
      "rationale": "The Open tab provides access to the Recover Unsaved Documents feature.",
      "marks": 2
    },
    {
      "id": "q17",
      "type": "multipleChoice",
      "question": "Which command is used to encrypt a Word document with a password?",
      "options": ["File > Info > Protect Document > Encrypt with Password", "File > Print", "Home > Font", "Insert > Symbol"],
      "answer": "File > Info > Protect Document > Encrypt with Password",
      "rationale": "This path is used to add password protection to a document.",
      "marks": 3
    },
    {
      "id": "q18",
      "type": "multipleChoice",
      "question": "What does the Format Painter tool do?",
      "options": ["Copies text", "Copies formatting", "Pastes text", "Deletes formatting"],
      "answer": "Copies formatting",
      "rationale": "Format Painter copies formatting from one part of the document to another.",
      "marks": 2
    },
    {
      "id": "q19",
      "type": "multiSelect",
      "question": "Which of the following are functions of the Ribbon in Word 2016?",
      "options": ["Contains command buttons", "Divided into tabs", "Displays recent files", "Provides menus for settings"],
      "answer": ["Contains command buttons", "Divided into tabs", "Provides menus for settings"],
      "rationale": "The Ribbon contains commands, is divided into tabs, and provides menus for various settings.",
      "marks": 3
    },
    {
      "id": "q20",
      "type": "multiSelect",
      "question": "Which of these are valid file formats you can save a Word document as?",
      "options": [".docx", ".rtf", ".html", ".exe"],
      "answer": [".docx", ".rtf", ".html"],
      "rationale": ".exe is not a document file format.",
      "marks": 3
    },
    {
      "id": "q21",
      "type": "fillInBlank",
      "question": "The keyboard shortcut to undo the last action in Word is ________.",
      "answer": "Ctrl+Z",
      "rationale": "Ctrl+Z is used to undo actions.",
      "marks": 2
    },
    {
      "id": "q22",
      "type": "fillInBlank",
      "question": "To insert a new page in a Word document, press ________.",
      "answer": "Ctrl+Enter",
      "rationale": "Ctrl+Enter inserts a page break.",
      "marks": 2
    },
    {
      "id": "q23",
      "type": "essay",
      "question": "Describe the steps to recover an unsaved document in Word 2016 and explain why this feature is important.",
      "idealKeywords": ["Recover Unsaved Documents", "AutoRecover", "File > Open", "unsaved", "data loss"],
      "marks": 8
    },
    {
      "id": "q24",
      "type": "matching",
      "question": "Match the cursor movement key with its action.",
      "matchPairs": [
        { "id": "pair1", "left": "Page Up", "right": "Move up one screen" },
        { "id": "pair2", "left": "Ctrl+Left Arrow", "right": "Move left by one word" },
        { "id": "pair3", "left": "End", "right": "Move to end of line" }
      ],
      "marks": 3
    },
    {
      "id": "q25",
      "type": "dropdown",
      "question": "To add a new online save location, choose [dropdown_1] > Add a Place.",
      "dropdownBlanks": [
        {
          "id": "dropdown_1",
          "options": ["File", "Insert", "Design", "Review"],
          "correctAnswer": "File"
        }
      ],
      "rationale": "Add a Place is found under the File tab.",
      "marks": 2
    }
  ]
}
