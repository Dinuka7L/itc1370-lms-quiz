import { MongoClient } from 'mongodb';
let cachedDb = null;
async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }
    const client = new MongoClient(process.env.MONGODB_URI);
    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI environment variable not set');
    }
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
        res.status(200).end();
        console.log('CORS preflight request handled');
        return;
    }
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }
    try {
        const { category } = req.query;
        const db = await connectToDatabase();
        console.log('Connected to DB');
        let query = {};
        if (category && typeof category === 'string') {
            query = { category };
        }
        const quizzes = await db.collection('quizzes').find(query).toArray();
        const quizSummaries = quizzes.map(quiz => ({
            id: quiz.id,
            title: quiz.title,
            description: quiz.description,
            timeOptions: quiz.timeOptions,
            totalMarks: quiz.totalMarks,
            weight: quiz.weight,
            category: quiz.category,
            questionCount: quiz.questions?.length || 0
        }));
        console.log('Fetched quizzes:', quizSummaries);
        res.status(200).json(quizSummaries);
    }
    catch (error) {
        console.error('Error fetching quizzes:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
