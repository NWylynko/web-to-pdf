import { MongoClient } from 'mongodb'

const url = process.env.DatabaseURL || 'mongodb://localhost:27017';

export const client = new MongoClient(url);

const dbName = process.env.DatabaseName || 'web-to-pdf';

export const db = client.db(dbName);

const collectionName = 'events';

export const events = db.collection(collectionName);