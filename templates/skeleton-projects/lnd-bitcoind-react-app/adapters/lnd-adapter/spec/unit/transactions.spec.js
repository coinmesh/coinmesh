const getChainTransactions = require('ln-service/getChainTransactions');
const lnd = require('../helpers/setup').lnd;

describe('Transactions', () => {
  describe('getChainTransactions()', () => {
    it('gets all chain transactions', (done) => {
      getChainTransactions({lnd}).then(result => {
        expect(Array.isArray(result.transactions)).toBe(true);
        done();
      });
    });
  });
});
