const TransactionsService = require('../../../services/transactions');
const AddressesService = require('../../../services/addresses');

describe('TransactionsService', () => {
  let transactionsService;
  let addressesService;
  let newAddress;

  beforeAll(() => {
    addressesService = new AddressesService();
    return addressesService.getNewAddress().then(result => {
      newAddress = result.result;
    });
  });

  beforeEach(() => {
    transactionsService = new TransactionsService();
  });

  describe('getTransactions()', () => {
    it('gets the current exchange rate', (done) => {
      transactionsService.getTransactions().then(result => {
        expect(Array.isArray(result.result)).toBe(true);
        done();
      });
    });
  });

  describe('sendToAddress()', () => {
    it('creates a transaction of sending amount to address', (done) => {
      const amount = 0.1;

      transactionsService.sendToAddress(newAddress, amount).then(result => {
        expect(result.result).not.toBe(null);
        done();
      });
    });
  });
});
