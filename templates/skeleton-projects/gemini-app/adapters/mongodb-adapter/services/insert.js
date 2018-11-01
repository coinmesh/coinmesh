const mongoDbClient = new (require('./mongo-db'));

class InsertService {
  insertMany(collectionName, items) {
    if (!collectionName) {
      throw new Error('collectionName must be supplied');
    } else if (!Array.isArray(items)) {
      throw new Error('items passed to insertMany must be an array');
    }

    const db = mongoDbClient.db;
    const collection = db.collection(collectionName);

    return new Promise((resolve, reject) => {
      collection.insertMany(items, (err, result) => {
        resolve(result);
      });
    });
  }
}

module.exports = InsertService;
