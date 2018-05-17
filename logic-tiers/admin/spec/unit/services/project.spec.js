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

  afterEach(() => {
    let dirPath = 'spec/tmp';
    fs.emptyDirSync(dirPath);
  });
});
