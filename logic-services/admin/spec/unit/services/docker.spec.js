const DockerService = require('../../../services/docker');
const commandsService = require('@coinmesh/terminal-adapter').commandsService;

describe('DockerService', () => {
  let dockerService;
  let mockSpawn;

  beforeEach(() => {
    dockerService = new DockerService();
    mockSpawn = {
      stdout: {
        on: () => {}
      },
      stderr: {
        on: () => {}
      },
      on: () => {}
    };
  });

  describe('dockerRun()', () => {
    it('calls the commandsService to docker run with the given flags', (done) => {

      spyOn(commandsService, 'issueStreamedCommand')
        .and.returnValue(Promise.resolve(mockSpawn));

      dockerService.dockerRun('/testing/path/').then(result => {
        expect(commandsService.issueStreamedCommand).toHaveBeenCalled();
        done();
      });
    });
  });
});
