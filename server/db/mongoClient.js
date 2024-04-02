import { config } from 'dotenv';
config();

import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const db = client.db('brainsplat')
    const userData = db.collection('User');
    const userPost = db.collection('Post');
  
    console.log(`Connected to ${db.databaseName}`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

