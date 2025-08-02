// Migration script to populate MongoDB with quiz data
// Run this script once to migrate your quiz data to MongoDB

const { MongoClient } = require('mongodb');

// Import your existing quiz data
const quizData = [
  // You'll need to manually copy your quiz data here from the existing files
  // or create a separate script to read from the TypeScript files
];

async function migrateQuizzes() {
  const client = new MongoClient(process.env.MONGODB_URI);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db('itc1370-quiz-app');
    const collection = db.collection('quizzes');
    
    // Clear existing data
    await collection.deleteMany({});
    console.log('Cleared existing quiz data');
    
    // Insert quiz data
    const result = await collection.insertMany(quizData);
    console.log(`Inserted ${result.insertedCount} quizzes`);
    
    // Create indexes for better performance
    await collection.createIndex({ id: 1 }, { unique: true });
    await collection.createIndex({ category: 1 });
    
    console.log('Migration completed successfully!');
    
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await client.close();
  }
}

// Run migration
if (require.main === module) {
  migrateQuizzes();
}

module.exports = { migrateQuizzes };