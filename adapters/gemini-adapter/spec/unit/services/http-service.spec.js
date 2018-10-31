const HttpService = require('../../../services/http-service');

describe('HttpService', () => {
  let httpService;

  beforeEach(() => {
    httpService = new HttpService();
  });

  describe('getEncodedPayload()', () => {
    let path;
    let testValue;
    let data;

    beforeEach(() => {
      path = '/v1/orders';
      testValue = 'test value';
      data = { testing: testValue };
    });

    it('returns an encoded payload', () => {
      let result = httpService.getEncodedPayload(path, data);

      const decoded = Buffer.from(result, 'base64').toString();
      const jsResult = JSON.parse(decoded);
      expect(jsResult.testing).toBe(testValue);
    });

    it('adds a nonce to the payload', () => {
      let result = httpService.getEncodedPayload(path, data);

      const decoded = Buffer.from(result, 'base64').toString();
      const jsResult = JSON.parse(decoded);
      expect(!!jsResult.nonce).toBe(true);
    });

    it('adds the request path', () => {
      let result = httpService.getEncodedPayload(path, data);

      const decoded = Buffer.from(result, 'base64').toString();
      const jsResult = JSON.parse(decoded);
      expect(jsResult.request).toBe(path);
    });
  });
});
