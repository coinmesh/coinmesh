const AddressesService = require('../../../services/address');
const fileSystemService = require('@coinmesh/file-system-adapter').fileSystemService;

describe('AddressesService', () => {
  let addressService;

  beforeEach(() => {
    addressService = new AddressesService();
  });

  describe('createDirectory()', () => {
    it('calls the fileSystemService to create a new address', (done) => {
      spyOn(fileSystemService, 'createDirectory').and.returnValue(Promise.resolve());

      addressService.createDirectory('/testing/path').then(result => {
        expect(fileSystemService.createDirectory).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('getDirectoryContents()', () => {
    it('returns an object which resembles a file or address', (done) => {
      const testDirPath = 'spec/tmp/test-dir';
      const testFileName = 'test.txt';
      const testDirName = 'test';

      fileSystemService.createDirectory(testDirPath);
      fileSystemService.createEmptyFile(`${testDirPath}/${testFileName}`);
      fileSystemService.createDirectory(`${testDirPath}/${testDirName}`);

      addressService.getDirectoryContents(testDirPath).then(result => {
        expect(result);
        done();
      });
    });
  });

  describe('checkFileExists()', () => {
    it('calls through to the file system service', () => {
      spyOn(fileSystemService, 'checkFileExists');
      addressService.checkFileExists('/test/');
      expect(fileSystemService.checkFileExists).toHaveBeenCalled();
    });
  });
});
