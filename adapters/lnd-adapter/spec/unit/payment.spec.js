const getPayments = require('ln-service/getPayments');
const lnd = require('../helpers/setup').lnd;

describe('Payments', () => {
  describe('getPayments()', () => {
    it('get the payments', (done) => {
      getPayments({lnd}).then(result => {
        expect(Array.isArray(result.payments)).toBe(true);
        done();
      });
    });
  });
});
