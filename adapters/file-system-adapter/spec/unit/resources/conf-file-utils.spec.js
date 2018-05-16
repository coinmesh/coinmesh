const ConfFileUtils = require('../../../resources/conf-file-utils');

describe('ConfFileUtils', () => {
  const path = 'spec/config-examples/testing.conf';
  let confFileUtils;
  let configFile;

  beforeEach(() => {
    configFile = `works=true
testing=sure
`;
    configFileAsJson = {works: 'true', testing: 'sure'};
    confFileUtils = new ConfFileUtils();
  });

  describe('convertConfToJson()', () => {
    it('gets the value of a configuration item by path', () => {
      let result = confFileUtils.convertConfToJson(configFile);
      expect(result).toEqual(configFileAsJson);
    });
  });

  describe('convertJsonToConfFile()', () => {
    it('converts a json object to a flat conf file format', () => {
      let result = confFileUtils.convertJsonToConfFile(configFileAsJson);
      expect(result).toEqual(configFile);
    });
  });
});
