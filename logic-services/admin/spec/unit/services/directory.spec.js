const DirectoryService = require('../../../services/directory');
const fileSystemService = require('@coinmesh/file-system-adapter').fileSystemService;

describe('DirectoryService', () => {
  let directoryService;

  beforeEach(() => {
    directoryService = new DirectoryService();
  });

  describe('createDirectory()', () => {
    it('calls the fileSystemService to create a new directory', (done) => {
      spyOn(fileSystemService, 'createDirectory').and.returnValue(Promise.resolve());

      directoryService.createDirectory('/testing/path').then(result => {
        expect(fileSystemService.createDirectory).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('getDirectoryContents()', () => {
    it('returns an object which resembles a file or directory', (done) => {
      const testDirPath = 'spec/tmp/test-dir';
      const testFileName = 'test.txt';
      const testDirName = 'test';

      fileSystemService.createDirectory(testDirPath);
      fileSystemService.createEmptyFile(`${testDirPath}/${testFileName}`);
      fileSystemService.createDirectory(`${testDirPath}/${testDirName}`);

      directoryService.getDirectoryContents(testDirPath).then(result => {
        expect(result);
        done();
      });
    });
  });

  describe('checkFileExists()', () => {
    it('calls through to the file system service', () => {
      spyOn(fileSystemService, 'checkFileExists');
      directoryService.checkFileExists('/test/');
      expect(fileSystemService.checkFileExists).toHaveBeenCalled();
    });
  });
});
