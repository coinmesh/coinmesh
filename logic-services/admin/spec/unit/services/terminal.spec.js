const TerminalService = require('../../../services/terminal');
const commandsService = require('@coinmesh/terminal-adapter').commandsService;
const webSocketService = require('../../../resources/web-socket-service');

describe('TerminalService', () => {
  let terminalService;
  let mockSpawn;

  beforeEach(() => {
    terminalService = new TerminalService();
    let fakeServer = { on: () => {} };
    webSocketService.createServer(fakeServer);
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

  describe('npmInstall()', () => {
    it('calls the commandsService to npm install', (done) => {

      spyOn(commandsService, 'issueStreamedCommand')
        .and.returnValue(Promise.resolve(mockSpawn));

      terminalService.npmInstall('/testing/path/').then(result => {
        expect(commandsService.issueStreamedCommand).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('npmStart()', () => {
    it('calls the commandsService to npm start', (done) => {

      spyOn(commandsService, 'issueStreamedCommand')
        .and.returnValue(Promise.resolve(mockSpawn));

      terminalService.npmStart('/testing/path/').then(result => {
        expect(commandsService.issueStreamedCommand).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('npmTest()', () => {
    it('calls the commandsService to npm test', (done) => {

      spyOn(commandsService, 'issueStreamedCommand')
        .and.returnValue(Promise.resolve(mockSpawn));

      terminalService.npmTest('/testing/path/').then(result => {
        expect(commandsService.issueStreamedCommand).toHaveBeenCalled();
        done();
      });
    });
  });
});
