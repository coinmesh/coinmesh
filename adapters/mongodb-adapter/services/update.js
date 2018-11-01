const mongoDbClient = new (require('./mongo-db'));

class UpdateService {
  updateById(collectionName, id, newValue) {
    if (!collectionName) {
      throw new Error('collectionName must be supplied');
    } else if (!id) {
      throw new Error('id of item to update must be supplied');
    } else if (!newValue) {
      throw new Error('newValue must be supplied');
    }

    const db = mongoDbClient.db;
    const collection = db.collection(collectionName);

    return new Promise((resolve, reject) => {
      collection.updateOne(queryObject, { $set: { id: id } }, (err, result) => {
        resolve(result);
      });
    });
  }
}

module.exports = UpdateService;
