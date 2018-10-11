const WalletInfoService = require('../../../services/wallet-info');
const BlocksService = require('../../../../bitcoind-adapter/services/blocks');

// TODO: Cannot currently create seed with a wallet already created
//   Need to create a service to move the files for testing
describe('WalletInfoService', () => {
  let walletInfoService;
  let blocksService;

  beforeEach(() => {
    walletInfoService = new WalletInfoService();
    blocksService = new BlocksService();
  });

  describe('getWalletInfo()', () => {
    it('gets the wallet info', (done) => {
      walletInfoService.getWalletInfo().then(result => {
        expect(typeof result.current_block_hash).toBe('string');
        done();
      });
    });
  });

  // TODO: Not passing
  xdescribe('createSeed()', () => {
    const password = '123458971;';
    let seed = 'testing';

    it('creates a new seed', (done) => {
      let reqObject = {
        lnd: unlockerLnd,
        passphrase: password,
        seed
      };
      walletInfoService.createSeed(reqObject).then(result => {
        done();
      });
    });
  });

  // TODO: Same issue as above
  xdescribe('createWallet()', () => {
    const password = '123458971;';
    let seed = 'testing';

    beforeEach(() => {
      let reqObject = {
        unlockerLnd,
        passphrase: password,
        seed
      }

      seed = createSeed(reqObject);
    });

    // TODO: Create a seed generator
    it('creates a new wallet', (done) => {
      let passedInValue = {
        unlockerLnd,
        password,
        seed
      }

      walletInfoService.createWallet(passedInValue).then(result => {
        expect(result.description).toBe(passedInValue.description);
        done();
      });
    });
  });

  afterEach(() => {
    return blocksService.generate(1);
  });
});
