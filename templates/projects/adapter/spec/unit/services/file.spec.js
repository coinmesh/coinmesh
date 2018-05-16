const FileService = require('../../../services/file');
const fs = require('fs-extra');

describe('FileService', () => {
  const path = 'spec/config-examples/testing.conf';
  let fileService;

  beforeEach(() => {
    fileService = new FileService();
  });

  describe('readFile()', () => {
    it('reads and returns a conf file as json', (done) => {
      const testingConfAsJson = { works: 'true' };

      fileService.readFile(path).then(result => {
        expect(result).toEqual(testingConfAsJson);
        done();
      });
    });
  });
});
