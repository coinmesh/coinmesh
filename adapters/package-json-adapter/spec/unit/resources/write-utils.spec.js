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
  });
});
