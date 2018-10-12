const DockerService = require('../../../services/docker');
const commandsService = require('@coinmesh/terminal-adapter').commandsService;
const webSocketService = require('../../../resources/web-socket-service');

describe('DockerService', () => {
  let dockerService;
  let mockSpawn;
  const fakePath = '/testing/path/';

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
    spyOn(webSocketService, 'subscribe').and.returnValue(123);
  });

  describe('dockerRun()', () => {
    it('calls the commandsService to docker run with the given flags', (done) => {
      const flagA = 'a';
      const flagB = 'b';
      const flags = [flagA, flagB];
      const expectedFlags = ['run', flagA, flagB];

      spyOn(commandsService, 'issueStreamedCommand')
        .and.returnValue(Promise.resolve(mockSpawn));

      dockerService.dockerRun(fakePath, flags).then(result => {
        expect(commandsService.issueStreamedCommand).toHaveBeenCalledWith('docker', expectedFlags, fakePath);
        done();
      });
    });
  });

  describe('dockerCompose()', () => {
    it('calls the commandsService to docker compose with the given flags', (done) => {
      const expectedFlags = ['up'];

      spyOn(commandsService, 'issueStreamedCommand')
        .and.returnValue(Promise.resolve(mockSpawn));

      dockerService.dockerCompose(fakePath).then(result => {
        expect(commandsService.issueStreamedCommand).toHaveBeenCalledWith('docker-compose', expectedFlags, fakePath);
        done();
      });
    });
  });

  describe('dockerComposeDown()', () => {
    it('calls the commandsService to docker compose down with the given flags', (done) => {
      const expectedFlags = ['down'];

      spyOn(commandsService, 'issueStreamedCommand')
        .and.returnValue(Promise.resolve(mockSpawn));

      dockerService.dockerComposeDown(fakePath).then(result => {
        expect(commandsService.issueStreamedCommand).toHaveBeenCalledWith('docker-compose', expectedFlags, fakePath);
        done();
      });
    });
  });

  describe('dockerComposeStatus()', () => {
    it('calls the commandsService to docker compose down with the given flags', (done) => {
      const expectedFlags = ['ps'];

      spyOn(commandsService, 'issueCommand')
        .and.returnValue(Promise.resolve('testing'));

      dockerService.dockerComposeStatus(fakePath).then(result => {
        expect(commandsService.issueCommand).toHaveBeenCalledWith('docker-compose ps', fakePath);
        done();
      });
    });
  });

  describe('dockerBuild()', () => {
    it('calls the commandsService to docker build with the given flags', (done) => {
      spyOn(commandsService, 'issueStreamedCommand')
        .and.returnValue(Promise.resolve(mockSpawn));

      dockerService.dockerRun('/testing/path/').then(result => {
        expect(commandsService.issueStreamedCommand).toHaveBeenCalled();
        done();
      });
    });
  });
});
