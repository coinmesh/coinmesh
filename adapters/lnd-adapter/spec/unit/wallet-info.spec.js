const createWallet = require('ln-service/createWallet');
const createSeed = require('ln-service/createSeed');
const getWalletInfo = require('ln-service/getWalletInfo');
const lnd = require('../helpers/setup').lnd;
const unlockerLnd = require('../helpers/setup').unlockerLnd;

describe('WalletInfo', () => {
  // TODO: Cannot currently create seed with a wallet already created
  //   Need to create a service to move the files for testing
  xdescribe('createSeed()', () => {
    const password = '123458971;';
    let seed = 'testing';

    it('creates a new seed', (done) => {
      let reqObject = {
        lnd: unlockerLnd,
        passphrase: password,
        seed
      };
      createSeed(reqObject).then(result => {
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

      createWallet(passedInValue).then(result => {
        expect(result.description).toBe(passedInValue.description);
        done();
      });
    });
  });

  describe('getWalletInfo()', () => {
    it('gets the wallets info', (done) => {
      const password = '123458971;';

      getWalletInfo({lnd}).then(result => {
        expect(typeof result.active_channels_count).toBe('number');
        done();
      });
    });
  });
});
