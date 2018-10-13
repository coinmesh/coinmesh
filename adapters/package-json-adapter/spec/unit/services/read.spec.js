const ReadService = require('../../../services/read');

describe('ReadService', () => {
  const path = 'spec/config-examples/package.json';
  let readService;

  beforeEach(() => {
    readService = new ReadService();
  });

  describe('cleanPath()', () => {
    it('removes a trailing slash', () => {
      const fakePath = 'testing/';
      let result = readService.cleanPath(fakePath);
      expect(result.slice(-1)).not.toBe('/');
    });
  });

  describe('getConfiguration()', () => {
    it('reads whole configuration file given a path', (done) => {
      const path = 'spec/config-examples/package.json';

      readService.getConfiguration(path).then(config => {
        expect(typeof config === 'object').toBe(true);
        done();
      });
    });
  });

  describe('getConfigItemByPath()', () => {
    it('gets the value of a configuration item by path', (done) => {
      const configItemPath = 'coinmesh.type';

      readService.getConfigItemByPath(path, configItemPath).then(result => {
        expect(result).toBe('adapter');
        done();
      });
    });
  });
});
