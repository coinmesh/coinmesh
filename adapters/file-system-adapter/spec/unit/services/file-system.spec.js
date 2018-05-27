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

  describe('writeFile()', () => {
    it('writes to a file', (done) => {
      let tempPath = 'spec/config-examples/tmp/testing.conf';
      let fakeContent = 'fake-content';

      fileSystemService.writeFile(tempPath, fakeContent).then(result => {
        fileSystemService.readFile(tempPath).then(newFile => {
          expect(newFile).toBe(fakeContent);
          done();
        });
      });
    });
  });

  describe('createEmptyFile()', () => {
    it('writes to a new empty file', (done) => {
      let tempPath = 'spec/config-examples/tmp/testing.conf';
      let fakeContent = 'fake-content';

      fileSystemService.createEmptyFile(tempPath).then(result => {
        fileSystemService.readFile(tempPath).then(newFile => {
          expect(newFile).toBe('');
          done();
        });
      });
    });
  });

  describe('copyFile()', () => {
    it('copies a file', (done) => {
      let tempPath = 'spec/config-examples/testing.conf';
      let newTempPath = 'spec/config-examples/tmp/new.conf';

      fileSystemService.copyFile(tempPath, newTempPath).then(result => {
        fileSystemService.readFile(newTempPath).then(newFile => {
          expect(newFile.trim()).toBe('works=true');
          done();
        });
      });
    });
  });

  describe('checkFileExists()', () => {
    describe('when a file exists', () => {
      it('returns true', (done) => {
        let tempPath = 'spec/config-examples/testing.conf';

        fileSystemService.checkFileExists(tempPath).then(result => {
          expect(result).toBe(true);
          done();
        });
      });
    });

    describe('when a file does not exist', () => {
      it('returns false', (done) => {
        let tempPath = 'spec/config-examples/not-testing.conf';

        fileSystemService.checkFileExists(tempPath).then(result => {
          expect(result).toBe(false);
          done();
        });
      });
    });
  });

  describe('createDirectory()', () => {
    it('create a new directory if it does not exist', (done) => {
      let tempPath = 'spec/config-examples/tmp/new-dir';
      let fakeContent = 'fake-content';

      fileSystemService.createDirectory(tempPath, fakeContent).then(result => {
        expect(result).toBe(true);
        done();
      });
    });
  });

  describe('copyAllFilesAndDirectoriesInDirectory()', () => {
    it('copies all files and directories', (done) => {
      let tempPath = 'spec/config-examples/nested-conf';
      let newTempPath = 'spec/config-examples/tmp/nested-conf';

      fileSystemService.copyAllFilesAndDirectoriesInDirectory(tempPath, newTempPath).then(result => {
        fileSystemService.readFile(`${newTempPath}/testing.conf`).then(newFile => {
          expect(newFile.trim()).toBe('works=true');
          done();
        });
      });
    });
  });

  describe('readAllFilesAndDirectoriesInDirectory()', () => {
    it('returns a list of all files and directories in a directory', (done) => {
      let tempPath = 'spec/config-examples';
      let expectedItems = [
        { name: 'nested-conf', found: false },
        { name: 'tmp', found: false },
        { name: 'testing.conf', found: false }
      ];

      fileSystemService.readAllFilesAndDirectoriesInDirectory(tempPath).then(result => {
        result.forEach(resultItem => {
          let match = expectedItems.find(item => item.name === resultItem.name);
          if (match) {
            match.found = true;
          }
        });
        expect(expectedItems.filter(item => !item.found).length).toBe(0);
        done();
      });
    });
  });

  afterEach(() => {
    // Clear out the tmp directory after each test
    let dirPath = 'spec/config-examples/tmp';
    fs.emptyDirSync(dirPath);
  });
});
