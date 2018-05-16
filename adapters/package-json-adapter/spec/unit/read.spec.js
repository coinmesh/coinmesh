const ReadService = require('../../services/read');

describe('readService', () => {
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

  it('reads whole configuration file given a path', (done) => {
    const path = 'spec/config-examples/';

    readService.getConfiguration(path).then(config => {
      expect(typeof config === 'object').toBe(true);
      done();
    });
  });

  it('reads whole configuration file given a path missing trailing slash /', (done) => {
    const path = 'spec/config-examples';

    readService.getConfiguration(path).then(config => {
      expect(typeof config === 'object').toBe(true);
      done();
    });
  });
});
