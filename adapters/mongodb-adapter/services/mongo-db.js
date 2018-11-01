const MongoClient = require('mongodb').MongoClient;

const url = process.env.MONGODB_URL;
const dbName = process.env.MONGODB_DB_NAME;

if (!url) {
  throw new Error('Error: No MONGODB_URL environment variable set.');
} else if (!dbName) {
  throw new Error('Error: No MONGODB_DB_NAME environment variable set.');
}

class MongoDbClient {
  constructor() {
    this.client = new MongoClient(url);

    this.client.connect((err) => {
      console.log("MongoDbService: Connected successfully to server");

      this.db = this.client.db(dbName);
      console.log("MongoDbService: Got db successfully");
    });
  }
  disconnect() {
    this.client.close();
  }
}

module.exports = MongoDbClient;
