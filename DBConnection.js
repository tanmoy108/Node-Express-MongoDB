const { MongoClient } = require('mongodb');

// Connection URL
const uri = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(uri);

// Database Name
const dbName = 'school';

async function dbConnection() {
    // Use connect method to connect to the server
   const result = await client.connect();
    console.log('Connected successfully to server');
    const db = result.db(dbName);
    return db.collection('students');
}

module.exports = dbConnection