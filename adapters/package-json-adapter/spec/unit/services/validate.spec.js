const ValidateService = require('../../../services/validate');

describe('ValidateService', () => {
  const path = 'spec/config-examples/package.json';
  let validateService;

  beforeEach(() => {
    validateService = new ValidateService();
  });

  describe('checkAllProperties()', () => {
    describe('when all properties are valid', () => {
      it('resolves to true', (done) => {
        validateService.checkAllProperties(path).then(result => {
          expect(result).toBe(true);
          done();
        });
      });
    });
  });
});
