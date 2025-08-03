import { MongoClient } from 'mongodb';
let cachedDb = null;
async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    cachedDb = client.db('itc1370-quiz-app');
    return cachedDb;
}
export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        console.log('CORS preflight request handled');
        res.status(200).end();
        return;
    }
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }
    try {
        const { id } = req.query;
        if (!id || typeof id !== 'string') {
            res.status(400).json({ error: 'Quiz ID is required' });
            return;
        }
        const db = await connectToDatabase();
        const quiz = await db.collection('quizzes').findOne({ id });
        if (!quiz) {
            res.status(404).json({ error: 'Quiz not found' });
            return;
        }
        // Remove sensitive data (answers, rationale, idealKeywords) from questions
        const sanitizedQuestions = quiz.questions.map((question) => {
            const { answer, rationale, idealKeywords, ...sanitizedQuestion } = question;
            return sanitizedQuestion;
        });
        const sanitizedQuiz = {
            _id: quiz._id.toString(),
            id: quiz.id,
            title: quiz.title,
            description: quiz.description,
            timeOptions: quiz.timeOptions,
            totalMarks: quiz.totalMarks,
            weight: quiz.weight,
            category: quiz.category,
            questions: sanitizedQuestions
        };
        res.status(200).json(sanitizedQuiz);
    }
    catch (error) {
        console.error('Error fetching quiz:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
