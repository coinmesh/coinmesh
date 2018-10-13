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
  let path;

  beforeAll(() => {
    let dirPath = 'spec/tmp';
    fs.emptyDirSync(dirPath);
  });

  beforeEach(() => {
    projectService = new ProjectService();
    project = new Project({
      name: fakeName,
      description: fakeDescription,
      path: fakePath
    });
    path = `${project.path}/package.json`;
  });

  describe('cloneProject()', () => {
    it('clones a project from another and updates name', (done) => {
      project.sourcePath = 'spec/support/fake-project';

      projectService.cloneProject(project).then(result => {
        pjReadService.getConfigItemByPath(path, 'name').then(result => {
          expect(result).toBe('FakeName');
          done();
        });
      });
    });

    it('sets up the coinmesh properties', (done) => {
      project.sourcePath = 'spec/support/fake-project';

      projectService.cloneProject(project).then(result => {
        pjReadService.getConfigItemByPath(path, 'coinmesh.type').then(result => {
          expect(result).toBe('project');
          done();
        });
      });
    });
  });

  describe('createProject()', () => {
    it('creates a project from scratch', (done) => {
      projectService.createProject(project).then(result => {
        pjReadService.getConfigItemByPath(path, 'coinmesh.type').then(result => {
          expect(result).toBe('project');
          done();
        });
      });
    });

    describe('when dataSources are selected', () => {
      it('adds the data source to the new project', (done) => {
        project.dataSources = [
          { id: 'litecoind', path: '../../data-sources/litecoind' }
        ];

        projectService.createProject(project).then(result => {
          pjReadService.getConfigItemByPath(path, 'coinmesh.type').then(result => {
            expect(result).toBe('project');
            done();
          });
        });
      });
    });

    describe('when adapters are selected', () => {
      it('adds the adapter to the new project', (done) => {
        project.adapters = [
          { id: 'litecoind-adapter', path: '../../data-sources/litecoind' }
        ];

        projectService.createProject(project).then(result => {
          pjReadService.getConfigItemByPath(path, 'coinmesh.type').then(result => {
            expect(result).toBe('project');
            done();
          });
        });
      });
    });

    describe('when logicServices are selected', () => {
      it('adds the adapter to the new project', (done) => {
        project.logicServices = [
          { id: 'litecoind-adapter', path: '../../data-sources/litecoind' }
        ];

        projectService.createProject(project).then(result => {
          pjReadService.getConfigItemByPath(path, 'coinmesh.type').then(result => {
            expect(result).toBe('project');
            done();
          });
        });
      });
    });

    describe('when clientApplications are selected', () => {
      it('adds the client application to the new project', (done) => {
        project.clientApplications = [
          { id: 'client-application', path: '../../data-sources/litecoind' }
        ];

        projectService.createProject(project).then(result => {
          pjReadService.getConfigItemByPath(path, 'coinmesh.type').then(result => {
            expect(result).toBe('project');
            done();
          });
        });
      });
    });
  });

  describe('createProjectJson()', () => {
    function createProjectAndReturnValue(project, property) {
      return projectService.createProjectJson(project).then(result => {
        return pjReadService.getConfigItemByPath(path, property);
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
