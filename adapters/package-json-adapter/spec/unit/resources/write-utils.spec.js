const WriteUtils = require('../../../resources/write-utils');

describe('WriteUtils', () => {
  const path = 'spec/config-examples/';
  const fakeType = 'adapter';

  let writeUtils;
  let fakePackageJson;

  beforeEach(() => {
    writeUtils = new WriteUtils();
    fakePackageJson = {
      coinmesh: {
        type: fakeType
      }
    };
  });

  describe('setValueAtPath()', () => {
    it('sets the value of a key', () => {
      const configItemPath = 'coinmesh.type';
      const newValue = 'testing';

      let result = writeUtils.setValueAtPath(fakePackageJson, configItemPath, newValue);
      expect(result.coinmesh.type).toBe(newValue);
    });

    describe('when writing a second value to close path', () => {
      it('sets the value of the second key', () => {
        const configItemPath = 'coinmesh.dataSources.test';
        const newValue = 'testing';

        let result = writeUtils.setValueAtPath(fakePackageJson, configItemPath, newValue);
        expect(result.coinmesh.dataSources.test).toBe(newValue);

        const configItemPathTwo = 'coinmesh.dataSources.testtwo';
        const newValueTwo = 'testingtwo';

        result = writeUtils.setValueAtPath(fakePackageJson, configItemPathTwo, newValueTwo);
        expect(result.coinmesh.dataSources.testtwo).toBe(newValueTwo);
      });
    });
  });
});
