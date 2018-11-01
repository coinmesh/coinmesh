const mongoDbClient = new (require('./mongo-db'));

class FindService {
  find(collectionName, queryObject = {}) {
    if (!collectionName) {
      throw new Error('collectionName must be supplied');
    }

    const db = mongoDbClient.db;
    const collection = db.collection(collectionName);

    return new Promise((resolve, reject) => {
      collection.find(queryObject).toArray((err, items) => {
        resolve(items);
      });
    });
  }
}

module.exports = FindService;
