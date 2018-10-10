const CryptoService = require('../../../services/crypto');
const BlocksService = require('../../../../bitcoind-adapter/services/blocks');

describe('CryptoService', () => {
  let cryptoService;
  let blocksService;

  const testMessage = 'Fake message';
  let signature;

  beforeEach((done) => {
    cryptoService = new CryptoService();
    blocksService = new BlocksService();

    return cryptoService.signMessage(testMessage).then(result => {
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
      cryptoService.verifyMessage(testMessage, signature).then(result => {
        expect(typeof result.signed_by).toBe('string');
        done();
      });
    });
  });

  afterEach(() => {
    return blocksService.generate(1);
  });
});
