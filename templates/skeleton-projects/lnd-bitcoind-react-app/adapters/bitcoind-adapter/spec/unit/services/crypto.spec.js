const CryptoService = require('../../../services/crypto');
const AddressesService = require('../../../services/addresses');

describe('CryptoService', () => {
  const message = 'Hello world';

  let cryptoService;
  let addressesService;
  let newAddress;
  let signature;

  beforeAll(() => {
    addressesService = new AddressesService();
    return addressesService.getNewAddress('legacy').then(result => {
      newAddress = result.result;
    });
  });

  beforeEach(() => {
    cryptoService = new CryptoService();
    return cryptoService.signMessage(newAddress, message).then(result => {
      signature = result.result;
    });
  });

  describe('signMessage()', () => {
    it('signs a message', (done) => {
      expect(signature).not.toBe(null);
      done();
    });
  });

  describe('verifyMessage()', () => {
    it('verifies a message', (done) => {
      cryptoService.verifyMessage(newAddress, signature, message).then(result => {
        expect(result.result).not.toBe(null);
        done();
      });
    });
  });
});
