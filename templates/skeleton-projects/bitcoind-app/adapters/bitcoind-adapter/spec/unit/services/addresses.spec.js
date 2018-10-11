const AddressesService = require('../../../services/addresses');
const BlocksService = require('../../../services/blocks');

describe('AddressesService', () => {
  let addressesService;
  let blocksService;

  beforeEach(() => {
    addressesService = new AddressesService();
    blocksService = new BlocksService();
  });

  describe('listReceivedByAddress()', () => {
    it('gets the receive addresses from the node', (done) => {
      addressesService.listReceivedByAddress().then(result => {
        expect(result.result[0].address).not.toBe(null);
        done();
      });
    });
  });

  describe('getNewAddress()', () => {
    it('gets a new address', (done) => {
      addressesService.getNewAddress().then(result => {
        expect(result.result).not.toBe(null);
        done();
      });
    });
  });

  describe('sendToAddress()', () => {
    beforeEach(() => {
      return blocksService.generate(100);
    });

    it('sends coins to the address', (done) => {
      const address = 'mx9et8rjan8kuoA6KH5setVK962VmGJuiZ';
      const amount = 0.1;

      addressesService.sendToAddress(address, amount).then(result => {
        expect(result.result).not.toBe(null);
        done();
      });
    });
  });
});
