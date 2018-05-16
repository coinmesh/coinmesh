const FileSystemService = require('../../../services/file-system');
const fs = require('fs-extra');

describe('FileSystemService', () => {
  const path = 'spec/config-examples/testing.conf';
  let fileSystemService;

  beforeEach(() => {
    fileSystemService = new FileSystemService();
  });

  describe('readFile()', () => {
    it('reads and returns a file', (done) => {
      fileSystemService.readFile(path).then(result => {
        expect(result.trim()).toBe('works=true');
        done();
      });
    });
  });
});
