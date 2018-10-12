const DockerUtils = require('../../../resources/docker-utils');
const os = require('os');

describe('DockerUtils', () => {
  let dockerUtils;

  beforeEach(() => {
    dockerUtils = new DockerUtils();
  });

  describe('getStatusFromDockerPs()', () => {
    it('returns up when status of Up found', () => {
      let expectedResult = 'up';
      let result = dockerUtils.getStatusFromDockerPs('Hey Up Man');
      expect(result).toBe(expectedResult);
    });

    it('returns exit when status of Exit found', () => {
      let expectedResult = 'exit';
      let result = dockerUtils.getStatusFromDockerPs('Hey BrExit');
      expect(result).toBe(expectedResult);
    });
  });
});
