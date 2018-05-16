const DirectoryService = require('../../../services/directory');
const fileSystemService = require('file-system-adapter').fileSystemService;

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
});
