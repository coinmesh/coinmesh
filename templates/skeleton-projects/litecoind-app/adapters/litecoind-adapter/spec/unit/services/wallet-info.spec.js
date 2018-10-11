const WalletInfoService = require('../../../services/wallet-info');

describe('WalletInfoService', () => {
  let walletInfoService;

  beforeEach(() => {
    walletInfoService = new WalletInfoService();
  });

  describe('getWalletInfo()', () => {
    it('gets the wallets info', (done) => {
      walletInfoService.getWalletInfo().then(result => {
        expect(result.result.walletversion > 0).toBe(true);
        done();
      });
    });
  });
});
