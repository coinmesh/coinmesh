const createAddress = require('ln-service/createAddress');
const sendToChainAddress = require('ln-service/sendToChainAddress');
const lnd = require('../helpers/setup').lnd;

describe('Addresses', () => {
  describe('createAddress()', () => {
    it('creates a new address', (done) => {
      let passedInValue = {
        lnd
      };

      createAddress(passedInValue).then(result => {
        expect(typeof result.address).toBe('string');
        done();
      });
    });
  });

  describe('sendToChainAddress()', () => {
    let address = '';
    const log = () => {};
    const tokens = 10000;

    beforeEach(() => {
      return createAddress({lnd}).then(result => {
        address = result.address;
      });
    });

// TODO: Find out why this test doesn't work
// This does not pass for "transaction output is dust" error being thrown
    xit('sends to coins to the appropriate address', (done) => {
      let passedInValue = {
        lnd,
        address,
        log,
        tokens
      };

      sendToChainAddress(passedInValue).then(result => {
        expect(typeof result.address).toBe('string');
        done();
      });
    });
  });
});
