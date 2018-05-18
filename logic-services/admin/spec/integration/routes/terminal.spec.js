const app = require('../../../app');
const request = require('supertest');
const commandsService = require('@coinmesh/terminal-adapter').commandsService;
const webSocketService = require('../../../resources/web-socket-service');

describe('Terminal', () => {
  let mockSpawn;

  beforeEach(() => {
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

  describe('/v0/terminal/npm-install', () => {
    it('responds', (done) => {
      let url = `/v0/terminal/npm-install`;

      spyOn(commandsService, 'issueStreamedCommand')
        .and.returnValue(Promise.resolve(mockSpawn));

      request(app)
        .post(url)
          .send({ path: '/testing/tests' })
          .expect(200)
          .end(function(err, res) {
            expect(commandsService.issueStreamedCommand).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });

  describe('/v0/terminal/npm-start', () => {
    it('responds', (done) => {
      let url = `/v0/terminal/npm-start`;

      spyOn(commandsService, 'issueStreamedCommand')
        .and.returnValue(Promise.resolve(mockSpawn));

      request(app)
        .post(url)
          .send({ path: '/testing/tests' })
          .expect(200)
          .end(function(err, res) {
            expect(commandsService.issueStreamedCommand).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });

  describe('/v0/terminal/npm-test', () => {
    it('responds', (done) => {
      let url = `/v0/terminal/npm-test`;

      spyOn(commandsService, 'issueStreamedCommand')
        .and.returnValue(Promise.resolve(mockSpawn));

      request(app)
        .post(url)
          .send({ path: '/testing/tests' })
          .expect(200)
          .end(function(err, res) {
            expect(commandsService.issueStreamedCommand).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });
});
