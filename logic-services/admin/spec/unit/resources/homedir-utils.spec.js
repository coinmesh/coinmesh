const HomedirUtils = require('../../../resources/homedir-utils');
const os = require('os');

describe('HomedirUtils', () => {
  let homedirUtils;
  let homeDir = os.homedir();

  beforeEach(() => {
    homedirUtils = new HomedirUtils();
  });

  describe('getPathFromHomeDir()', () => {
    describe('when using routes relative to home', () => {
      it('replaces ~/ with the home directory', () => {
        let expectedResult = `${homeDir}/test`;
        let result = homedirUtils.getPathFromHomeDir('~/test');
        expect(result).toBe(expectedResult);
      });
    });

    describe('when not using routes relative to home', () => {
      it('returns the path as-is', () => {
        let expectedResult = `/test/one`;
        let result = homedirUtils.getPathFromHomeDir('/test/one');
        expect(result).toBe(expectedResult);
      });
    });
  });

  describe('stripPackageJson()', () => {
    describe('when path ends in /package.json', () => {
      it('removes package.json', () => {
        let expectedResult = `/test/`;
        let result = homedirUtils.stripPackageJson('/test/package.json');
        expect(result).toBe(expectedResult);
      });

      it('removes even when a trailing slash /package.json/', () => {
        let expectedResult = `/test/`;
        let result = homedirUtils.stripPackageJson('/test/package.json');
        expect(result).toBe(expectedResult);
      });
    });

    describe('when path does not end in /package.json', () => {
      it('does nothing', () => {
        let expectedResult = `/test/`;
        let result = homedirUtils.stripPackageJson('/test/');
        expect(result).toBe(expectedResult);
      });
    });
  });
});
