const NetworkInfoService = require('../../../services/network-info');

describe('NetworkInfoService', () => {
  let networkInfoService;

  beforeEach(() => {
    networkInfoService = new NetworkInfoService();
  });

  describe('getNetworkInfo()', () => {
    it('gets the network info', (done) => {
      const currencyPair = 'btcusd';

      networkInfoService.getNetworkInfo(currencyPair).then(result => {
        expect(result.result.version > 0).toBe(true);
        done();
      });
    });
  });
});
