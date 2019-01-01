const config = require('dotenv').config();
const { localLnd, isWalletLocked } = require('ln-service/service');
const lnd = localLnd({});
const unlockerLnd = localLnd({is_unlocker: true});

beforeAll(() => {
  return new Promise((resolve, reject) => {
    let result = isWalletLocked({}, (err, isLocked) => {
      if (isLocked) {
        reject('Please unlock wallet before running tests');
      }
      resolve();
    });
  });
});

module.exports = { lnd, unlockerLnd };
