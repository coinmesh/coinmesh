const FileUtils = require('../../../resources/file-utils');

describe('FileUtils', () => {
  const path = 'spec/config-examples/testing.conf';
  let fileUtils;
  let configFile;

  beforeEach(() => {
    configFile = `works=true
testing=sure
`;
    configFileAsJson = {works: 'true', testing: 'sure'};
    fileUtils = new FileUtils();
  });

  describe('convertConfToJson()', () => {
    it('gets the value of a configuration item by path', () => {
      let result = fileUtils.convertConfToJson(configFile);
      expect(result).toEqual(configFileAsJson);
    });
  });
});
