import { MongoClient, ServerApiVersion } from 'mongodb';
let cachedDb = null;
async function connectToDatabase() {
    if (cachedDb)
        return cachedDb;
    const uri = process.env.MONGODB_URI;
    console.log('Mongo URI:', uri); // just for debug; remove later
    const client = new MongoClient(uri, {
        // ✅ This part is **critical**
        serverApi: ServerApiVersion.v1,
        tls: true,
        ssl: true,
        retryWrites: true,
        serverSelectionTimeoutMS: 10000,
    });
    try {
        console.log('Connecting to MongoDB...');
        await client.connect();
        console.log('Connected!');
        cachedDb = client.db('itc1370-quiz-app');
        return cachedDb;
    }
    catch (err) {
        console.error('MongoDB connect error:', err);
        throw err;
    }
}
export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }
    try {
        const { category } = req.query;
        console.log('Connecting to DB...');
        const db = await connectToDatabase();
        console.log('Connected to DB');
        let query = {};
        if (category && typeof category === 'string') {
            query = { category };
        }
        console.log('Running query:', query);
        const quizzes = await db.collection('quizzes').find(query).toArray();
        console.log('Quizzes fetched:', quizzes.length);
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
        res.status(200).json(quizSummaries);
    }
    catch (error) {
        console.error('Error fetching quizzes:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
