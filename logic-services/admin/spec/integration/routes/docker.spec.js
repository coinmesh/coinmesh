const app = require('../../../app');
const request = require('supertest');
const commandsService = require('@coinmesh/terminal-adapter').commandsService;
const webSocketService = require('../../../resources/web-socket-service');

describe('Docker', () => {
  let fakeUuid = '123';
  let spies = [];

  beforeAll(() => {
    spyOn(commandsService, 'issueStreamedCommand').and.returnValue(Promise.resolve(true));
    spyOn(webSocketService, 'subscribe').and.returnValue(fakeUuid);
  });

  describe('/v0/docker', () => {
    describe('/run', () => {
      it('responds', (done) => {
        let url = `/v0/docker/run`;

        request(app)
          .post(url)
            .send({ path: '/testing' })
            .expect(200)
            .end(function(err, res) {
              expect(commandsService.issueStreamedCommand).toHaveBeenCalled();
              if (err) throw err;
              done();
            });
      });
    });

    describe('/compose', () => {
      it('responds', (done) => {
        let url = `/v0/docker/compose`;

        request(app)
          .post(url)
            .send({ path: '/testing' })
            .expect(200)
            .end(function(err, res) {
              expect(commandsService.issueStreamedCommand).toHaveBeenCalled();
              if (err) throw err;
              done();
            });
      });
    });

    describe('/build', () => {
      it('responds', (done) => {
        let url = `/v0/docker/build`;

        request(app)
          .post(url)
            .send({ path: '/testing' })
            .expect(200)
            .end(function(err, res) {
              expect(commandsService.issueStreamedCommand).toHaveBeenCalled();
              if (err) throw err;
              done();
            });
      });
    });
  });
});
