const ProjectService = require('../../../services/project');
const Project = require('../../../models/project');
const fs = require('fs-extra');

const pjReadService = require('@coinmesh/package-json-adapter').readService;

describe('ProjectService', () => {
  let projectService;
  let project;
  const fakeName = 'FakeName';
  const fakeDescription = 'Fake description';
  const fakePath = 'spec/tmp';

  beforeEach(() => {
    projectService = new ProjectService();
    project = new Project({
      name: fakeName,
      description: fakeDescription,
      path: fakePath
    });
  });

  describe('createProject()', () => {
    it('creates a project from scratch', (done) => {
      projectService.createProject(project).then(result => {
        pjReadService.getConfigItemByPath(project.path, 'coinmesh.type').then(result => {
          expect(result).toBe('project');
          done();
        });
      });
    });
  });

  describe('createProjectJson()', () => {
    function createProjectAndReturnValue(project, property) {
      return projectService.createProjectJson(project).then(result => {
        return pjReadService.getConfigItemByPath(project.path, property);
      });
    }

    it('creates a project.json with the correct type', (done) => {
      createProjectAndReturnValue(project, 'coinmesh.type').then(result => {
        expect(result).toBe('project');
        done();
      });
    });

    it('creates a project.json with the correct name', (done) => {
      createProjectAndReturnValue(project, 'name').then(result => {
        expect(result).toBe(fakeName);
        done();
      });
    });

    it('creates a project.json with the correct description', (done) => {
      createProjectAndReturnValue(project, 'description').then(result => {
        expect(result).toBe(fakeDescription);
        done();
      });
    });
  });

  describe('addConfigType()', () => {
    it('adds a new configuration type to the package.json', (done) => {
      let projectPath = '/testing';
      let packageName = 'testing';
      let type = 'adapter';
      let packagePath = '/testing/node/testing';

      let expectedPropertyPath = 'coinmesh.adapters.testing';
      let expectedNewValue = { path: '/testing/node/testing' };

      spyOn(projectService, 'editProjectProperty').and.returnValue(Promise.resolve());

      projectService.addConfigType(projectPath, packageName, type, packagePath).then(result => {

        expect(projectService.editProjectProperty)
          .toHaveBeenCalledWith(projectPath, expectedPropertyPath, expectedNewValue);

        done();
      });
    });
  });

  describe('addScript()', () => {
    it('adds a new script to the package.json', (done) => {
      let projectPath = '/testing';
      let packageName = 'testing';
      let type = 'adapter';

      let expectedPropertyPath = 'scripts.testing';
      let expectedCommand = 'cd ./adapters/testing && npm start';

      spyOn(projectService, 'editProjectProperty').and.returnValue(Promise.resolve());

      projectService.addScript(projectPath, packageName, type).then(result => {

        expect(projectService.editProjectProperty)
          .toHaveBeenCalledWith(projectPath, expectedPropertyPath, expectedCommand);

        done();
      });
    });
  });

  afterEach(() => {
    let dirPath = 'spec/tmp';
    fs.emptyDirSync(dirPath);
  });
});
