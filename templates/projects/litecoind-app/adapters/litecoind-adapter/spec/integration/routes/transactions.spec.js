const app = require('../../../app');
const request = require('supertest');
const transactionsService = require('../../../index').transactionsService;

describe('Transactions', () => {
  describe('/v0/transactions/', () => {
    it('responds to request for list of transactions', (done) => {
      let url = `/v0/transactions/`;
      spyOn(transactionsService, 'getTransactions').and.returnValue(Promise.resolve(true));

      request(app)
        .get(url)
          .expect(200)
          .end(function(err, res) {
            expect(transactionsService.getTransactions).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });

    it('takes in a new transaction request and sends coins', (done) => {
      let url = `/v0/transactions/`;
      spyOn(transactionsService, 'sendToAddress').and.returnValue(Promise.resolve(true));

      request(app)
        .post(url)
          .send({ path: '/testing' })
          .expect(200)
          .end(function(err, res) {
            expect(transactionsService.sendToAddress).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });
});
