const TransfersService = require('../../../services/transfers');

describe('TransfersService', () => {
  let transfersService;

  beforeEach(() => {
    transfersService = new TransfersService();

    // Don't get rate limited by Gemini
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  });

  describe('getTransfers()', () => {
    it('returns the transfers', (done) => {
      transfersService.getTransfers().then(result => {
        expect(Array.isArray(result)).toBe(true);
        done();
      });
    });
  });
});
