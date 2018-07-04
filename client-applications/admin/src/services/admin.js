import {HttpWrapper} from './http-wrapper';
import {Directory} from '../models/directory';
import {Project} from '../models/project';
import {ConfFile} from '../models/conf-file';
import {ProjectStore} from 'services/project-store';

export class AdminService {
  static inject = [HttpWrapper, ProjectStore];
  constructor(http, projectStore) {
    this.http = http;
    this.projectStore = projectStore;
  }

  getDirectoryContents(path) {
    let url = `http://localhost:3002/v0/directory/contents`;
    let body = { path };

    return this.http.post(url, body).then(result => {
      let directory = new Directory({
        items: result.content
      });
      return directory;
    });
  }
  createDirectory(path) {
    let url = `http://localhost:3002/v0/directory`;
    return this.http.post(url, { path });
  }
  checkConfFileExists(path) {
    let url = `http://localhost:3002/v0/project/check-conf-file-exists`;
    return this.http.post(url, { path }).then(response => {
      return response.content;
    });
  }
  readConfFile(path) {
    let url = `http://localhost:3002/v0/project/read-conf-file`;
    return this.http.post(url, { path }).then(response => {
      let confFileData = {
        pathToProject: path,
        props: response.content
      };
      return new ConfFile(confFileData);
    });
  }
  createConfFile(path) {
    let url = `http://localhost:3002/v0/project/create-conf-file`;
    return this.http.post(url, { path }).then(response => {
      return response.content;
    });
  }
  createNewProject(project) {
    let url = `http://localhost:3002/v0/project`;
    return this.http.post(url, project);
  }
  updatePackageJson(project, propName, newValue) {
    let url = `http://localhost:3002/v0/project/`;
    let body = {
      projectPath: project.path,
      propertyPath: propName,
      value: newValue
    }
    return this.http.patch(url, body);
  }
  loadProject(projectJsonPath, className = Project) {
    let url = `http://localhost:3002/v0/project/${projectJsonPath}`;

    return this.http.get(url).then(result => {
      return new className(result);
    });
  }
  npmInstall(projectJsonPath) {
    return this.npmCommand('npm-install', projectJsonPath);
  }
  npmLinkLocal(projectJsonPath) {
    return this.npmCommand('npm-link-local', projectJsonPath);
  }
  npmStart(projectJsonPath) {
    return this.npmCommand('npm-start', projectJsonPath);
  }
  npmTest(projectJsonPath) {
    return this.npmCommand('npm-test', projectJsonPath);
  }
  npmCommand(command, projectJsonPath) {
    let url = `http://localhost:3002/v0/terminal/${command}`;
    let body = { path: projectJsonPath };

    return this.http.post(url, body).then(response => {
      return response.content;
    });
  }
  killProcess(uuid) {
    let url = `http://localhost:3002/v0/terminal/kill-process/${uuid}`;

    return this.http.delete(url);
  }
  dockerRun(projectJsonPath, flags) {
    return this.dockerCommand('run', flags, projectJsonPath);
  }
  dockerBuild(projectJsonPath, flags) {
    return this.dockerCommand('build', flags, projectJsonPath);
  }
  dockerCommand(command, flags = [], projectJsonPath) {
    let url = `http://localhost:3002/v0/docker/${command}`;
    let body = {
      path: projectJsonPath,
      flags
    };

    return this.http.post(url, body).then(response => {
      return response.content;
    });
  }

  loadProjectByNameAndType(name, type) {
    let loadedProject;
    if (name && this.projectStore.currentProject) {
      let match = this.projectStore.currentProject[type].find(project => {
        return project.name === name;
      });
      let path = match.path;

      let packageJsonPath = `${path}/package.json`;
      return this.loadProject(packageJsonPath).then(result => {
        loadedProject = result;
        loadedProject.path = path;
        return loadedProject;
      });
    }
  }
}
