const webSocketService = require('../../../resources/web-socket-service');

describe('WebSocketService', () => {
  beforeEach(() => {
    let fakeServer = { on: () => {} };
    webSocketService.createServer(fakeServer);
  });

  describe('createServer()', () => {
    it('creates processes if they are not already defined', () => {
      expect(webSocketService.processes).toEqual({});
    });
  });

  describe('addProcess()', () => {
    it('generates and returns a new uuid', () => {
      let fakeProcess = { name: 'test' };
      let uuid = webSocketService.addProcess(fakeProcess);

      expect(typeof uuid === 'string').toBe(true);
    });

    it('creates a map of uuid to process', () => {
      let fakeProcess = { name: 'test' };
      let uuid = webSocketService.addProcess(fakeProcess);

      expect(webSocketService.processes[uuid]).toBe(fakeProcess);
    });
  });

  describe('killProcess()', () => {
    it('finds and kills the corresponding process', () => {
      let fakeProcess = { name: 'test', kill: () => {} };
      spyOn(fakeProcess, 'kill');
      let uuid = webSocketService.addProcess(fakeProcess);
      webSocketService.killProcess(uuid);

      expect(fakeProcess.kill).toHaveBeenCalled();
    });
  });
});
