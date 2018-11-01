const AddressesService = require('../../../services/addresses');

describe('AddressesService', () => {
  let addressesService;

  beforeEach(() => {
    addressesService = new AddressesService();

    // Don't get rate limited by Gemini
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  });

  // TODO: Gemini does not support get address in sandbox
  xdescribe('getAddress()', () => {
    it('creates a new order', (done) => {
      const currency = 'btc';
      const fakeLabel = 'testing';

      addressesService.getAddress(currency, fakeLabel).then(result => {
        expect(result.currency).toBe(currency.toUpperCase());
        done();
      });
    });
  });
});
