const mongoDbClient = new (require('./mongo-db'));

class RemoveService {
  removeById(collectionName, id) {
    if (!collectionName) {
      throw new Error('collectionName must be supplied');
    } else if (!id) {
      throw new Error('id of item to remove must be supplied');
    }

    const db = mongoDbClient.db;
    const collection = db.collection(collectionName);

    return new Promise((resolve, reject) => {
      collection.removeOne({ id: id }, (err, result) => {
        resolve(result);
      });
    });
  }
}

module.exports = RemoveService;
