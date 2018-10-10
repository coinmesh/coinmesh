const AddressesService = require('../../../services/addresses');
const BlocksService = require('../../../../bitcoind-adapter/services/blocks');

describe('AddressesService', () => {
  let addressesService;
  let blocksService;

  beforeEach(() => {
    addressesService = new AddressesService();
    blocksService = new BlocksService();
    return blocksService.generate(1);
  });

  describe('getNewAddress()', () => {
    it('gets a new address', (done) => {
      addressesService.getNewAddress().then(result => {
        expect(typeof result.address).toBe('string');
        done();
      });
    });
  });

  // TODO: Test causes chain to fork, why?
  xdescribe('sendToAddress()', () => {
    it('sends coins to the address', (done) => {
      const address = '2MtU9vaSwC7TACkrHpc7VT1WHJQk96VeMp8';
      const amount = 200001;

      addressesService.sendToAddress(address, amount).then(result => {
        expect(result.result).not.toBe(null);
        done();
      }).catch(error => {
        throw new Error(error);
        done();
      });
    });
  });

  afterEach(() => {
    return blocksService.generate(1);
  });
});
