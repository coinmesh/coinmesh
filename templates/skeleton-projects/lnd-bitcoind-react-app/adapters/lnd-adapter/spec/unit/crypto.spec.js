const signMessage = require('ln-service/signMessage');
const verifyMessage = require('ln-service/verifyMessage');
const lnd = require('../helpers/setup').lnd;

describe('Crypto', () => {
  const testMessage = 'Fake message';
  let signature;

  beforeEach((done) => {
    return signMessage({lnd, message: testMessage}).then(result => {
      signature = result.signature;
      done();
    });
  });

  describe('signMessage()', () => {
    it('signs the message', (done) => {
      expect(typeof signature).toBe('string');
      done();
    });
  });

  describe('verifyMessage()', () => {
    it('verifys the message', (done) => {
      const testMessage = 'Fake message';
      let payload = { lnd, message: testMessage, signature: signature };

      verifyMessage(payload).then(result => {
        expect(typeof result.signed_by).toBe('string');
        done();
      });
    });
  });
});
