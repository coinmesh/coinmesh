const WriteService = require('../../../services/write');
const fs = require('fs');

describe('WriteService', () => {
  const path = 'spec/config-examples/tmp';
  let fakePackageJson;
  let writeService;

  beforeEach(() => {
    writeService = new WriteService();
    fakePackageJson = {
      coinmesh: { type: '' }
    };
  });

  describe('setValue()', () => {
    describe('when value already exists', () => {
      it('sets a value on the package.json object', () => {
        const fakePath = 'coinmesh.type';
        const fakeValue = 'testing';

        writeService.setValue(fakePackageJson, fakePath, fakeValue).then(result => {
          expect(result.coinmesh.type).toBe(fakeValue);
        });
      });
    });

    describe('when value does not already exist', () => {
      it('it throws an error', (done) => {
        const fakePath = 'coinmesh.notType';
        const fakeValue = 'testing';
        let expectedError = `Cannot set value as method called with allowCreate = false.`;

        writeService.setValue(fakePackageJson, fakePath, fakeValue)
          .catch(error => {
            expect(error).toBe(expectedError);
            done();
          });
      });
    });
  });

  describe('save()', () => {
    it('saves the changes', (done) => {
      let fakePath = `${path}/package.json`;
      writeService.save(fakePath, fakePackageJson).then(result => {
        expect(result).toBe(true);
        done();
      })
    });
  });

  afterEach(() => {
    // Clear out the tmp directory after each test
    let dirPath = 'spec/config-examples/tmp';
    try { var files = fs.readdirSync(dirPath); }
    catch(e) { console.log(e); return; }
    if (files.length > 0) {
      files.forEach(item => {
        let filePath = `${dirPath}/${item}`;
        fs.unlink(filePath);
      });
    }
  });
});
