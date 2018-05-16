const ConfFileService = require('../../../services/conf-file');
const fs = require('fs-extra');

describe('ConfFileService', () => {
  const path = 'spec/config-examples/testing.conf';
  let confFileService;

  beforeEach(() => {
    confFileService = new ConfFileService();
  });

  describe('readConfFile()', () => {
    it('reads and returns a conf file as json', (done) => {
      const testingConfAsJson = { works: 'true' };

      confFileService.readConfFile(path).then(result => {
        expect(result).toEqual(testingConfAsJson);
        done();
      });
    });
  });

  describe('writeJsonAsConfFile()', () => {
    it('writes json as a conf file', (done) => {
      const tmpPath = 'spec/config-examples/tmp/testing.conf';
      const testingConfAsJson = { works: 'true' };

      confFileService.writeJsonAsConfFile(tmpPath, testingConfAsJson).then(writeResult => {
        confFileService.readConfFile(tmpPath).then(readResult => {
          expect(readResult).toEqual(testingConfAsJson);
          done();
        });
      });
    });
  });

  afterEach(() => {
    // Clear out the tmp directory after each test
    let dirPath = 'spec/config-examples/tmp';
    fs.emptyDirSync(dirPath);
  });
});
