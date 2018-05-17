const app = require('../../../app');
const request = require('supertest');
const Project = require('../../../models/project');
const pjReadService = require('@coinmesh/package-json-adapter').readService;
const fs = require('fs-extra');

describe('Project', () => {
  let url = `/v0/project/`;
  let fakeName = 'test name';
  let fakeDescription = 'test desc';
  let fakePath = 'spec/tmp/test-project';

  let project = new Project({
    name: fakeName,
    description: fakeDescription,
    path: fakePath
  });

  describe('POST /v0/project', () => {
    it('creates a new project', (done) => {
      request(app)
        .post(url)
          .send(project)
          .expect(200)
          .end(function(err, res) {
            pjReadService.getConfigItemByPath(project.path, 'name').then(result => {
              expect(result).toBe(fakeName);
              done();
            });
            if (err) throw err;
            done();
          });
    });
  });

  describe('PATCH /v0/project', () => {
    it('updates the indicated property in the package.json', (done) => {
      let url = `/v0/project/`;

      let projectPath = 'spec/tmp/test-project';
      let propertyPath = 'name';
      let newValue = 'new name';

      let editRequestBody = {
        projectPath: projectPath,
        propertyPath: propertyPath,
        value: newValue
      };

      request(app)
        .post(url)
          .send(project)
          .end((err, res) => {
            if (err) throw err;

            request(app)
              .patch(url)
                .send(editRequestBody)
                .expect(200)
                .end(function(err, res) {
                  if (err) throw err;

                  pjReadService.getConfigItemByPath(projectPath, 'name').then(result => {
                    expect(result).toBe(newValue);
                    done();
                  });
                });
          });
    });
  });

  afterEach(() => {
    let dirPath = 'spec/tmp';
    fs.emptyDirSync(dirPath);
  });
});
