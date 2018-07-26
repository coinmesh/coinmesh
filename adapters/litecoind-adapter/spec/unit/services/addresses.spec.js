const AddressesService = require('../../../services/addresses');

describe('AddressesService', () => {
  let addressesService;

  beforeEach(() => {
    addressesService = new AddressesService();
  });

  describe('listReceivedByAddress()', () => {
    it('calls the fileSystemService to create a new address', (done) => {
      addressesService.listReceivedByAddress().then(result => {
        done();
      });
    });
  });

  describe('getDirectoryContents()', () => {
    it('returns an object which resembles a file or address', (done) => {
      addressesService.getDirectoryContents(testDirPath).then(result => {
        expect(result);
        done();
      });
    });
  });
});
