const ReadUtils = require('../../../resources/read-utils');

describe('ReadUtils', () => {
  const path = 'spec/config-examples/';
  let readUtils;

  beforeEach(() => {
    readUtils = new ReadUtils();
  });

  describe('getValueAtPath()', () => {
    it('gets the value of a configuration item by path', () => {
      const configItemPath = 'coinmesh.type';
      const fakeType = 'adapter';
      const fakePackageJson = {
        coinmesh: {
          type: fakeType
        }
      };

      let result = readUtils.getValueAtPath(fakePackageJson, configItemPath);
      expect(result).toBe(fakeType);
    });
  });
});
