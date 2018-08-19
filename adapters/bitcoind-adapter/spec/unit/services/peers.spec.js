const PeersService = require('../../../services/peers');

describe('PeersService', () => {
  let peersService;

  beforeEach(() => {
    peersService = new PeersService();
  });

  describe('getPeerInfo()', () => {
    it('gets a list of peers', (done) => {
      peersService.getPeerInfo().then(result => {
        expect(Array.isArray(result.result)).toBe(true);
        done();
      });
    });
  });
});
