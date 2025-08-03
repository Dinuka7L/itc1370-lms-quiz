import type { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient } from 'mongodb';
import type { Db } from 'mongodb';

interface QuizSummary {
  id: string;
  title: string;
  description: string;
  timeOptions: number[];
  totalMarks: number;
  weight: number;
  category: 'lesson' | 'mockFinal';
  questionCount: number;
}

let cachedDb: Db | null = null;

async function connectToDatabase(): Promise<Db> {
  if (cachedDb) return cachedDb;

  const uri = process.env.MONGODB_URI!;
  const client = new MongoClient(uri, {
    tls: true,
    tlsAllowInvalidCertificates: false,
    serverSelectionTimeoutMS: 10000,
  });

  await client.connect();
  cachedDb = client.db('itc1370-quiz-app');
  return cachedDb;
}

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
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

    const quizSummaries: QuizSummary[] = quizzes.map(quiz => ({
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
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}