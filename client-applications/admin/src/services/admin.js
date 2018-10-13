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
    path = this.fixRelativePath(path);

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
    path = this.fixRelativePath(path);

    return this.http.post(url, { path });
  }
  checkConfFileExists(path) {
    let url = `http://localhost:3002/v0/project/check-conf-file-exists`;
    path = this.fixRelativePath(path);

    return this.http.post(url, { path }).then(response => {
      return response.content;
    });
  }
  readConfFile(path) {
    let url = `http://localhost:3002/v0/project/read-conf-file`;
    path = this.fixRelativePath(path);

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
    path = this.fixRelativePath(path);

    return this.http.post(url, { path }).then(response => {
      return response.content;
    });
  }
  createNewProject(project) {
    let url = `http://localhost:3002/v0/project`;
    return this.http.post(url, project);
  }
  cloneProject(project) {
    let url = `http://localhost:3002/v0/project/clone`;
    return this.http.post(url, project);
  }
  updatePackageJson(project, propName, newValue) {
    let url = `http://localhost:3002/v0/project/`;
    let path = this.fixRelativePath(project.path);

    let body = {
      projectPath: path,
      propertyPath: propName,
      value: newValue
    }
    return this.http.patch(url, body);
  }
  checkWalletLocked(projectJsonPath, network, containerName) {
    let url = `http://localhost:3002/v0/docker/compose/check-locked`;
    let path = this.fixRelativePath(projectJsonPath);

    let body = {
      path,
      network,
      container: containerName
    }
    return this.http.post(url, body);
  }
  loadProject(path, className = Project) {
    let url = `http://localhost:3002/v0/project/load`;
    path = this.fixRelativePath(path);

    let body = { path: path };

    return this.http.post(url, body).then(result => {
      return new className(result.content);
    });
  }
  npmInstall(projectJsonPath) {
    let path = this.fixRelativePath(projectJsonPath);

    return this.npmCommand('npm-install', path);
  }
  npmLinkLocal(projectJsonPath) {
    let path = this.fixRelativePath(projectJsonPath);

    return this.npmCommand('npm-link-local', path);
  }
  npmStart(projectJsonPath) {
    let path = this.fixRelativePath(projectJsonPath);

    return this.npmCommand('npm-start', path);
  }
  npmTest(projectJsonPath) {
    let path = this.fixRelativePath(projectJsonPath);

    return this.npmCommand('npm-test', path);
  }
  npmCommand(command, projectJsonPath) {
    let url = `http://localhost:3002/v0/terminal/${command}`;
    let path = this.fixRelativePath(projectJsonPath);

    let body = { path };

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
  dockerCompose(projectJsonPath, flags) {
    return this.dockerCommand('compose', flags, projectJsonPath);
  }
  dockerComposeDown(projectJsonPath, flags) {
    return this.dockerCommand('compose/down', flags, projectJsonPath);
  }
  dockerComposeStatus(projectJsonPath, flags) {
    return this.dockerCommand('compose/status', flags, projectJsonPath);
  }
  dockerCommand(command, flags = [], projectJsonPath) {
    let path = this.fixRelativePath(projectJsonPath);
    let url = `http://localhost:3002/v0/docker/${command}`;
    let body = {
      path,
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

  fixRelativePath(path) {
    if (path.substring(0, 2) === './') {
      let rootPath = this.projectStore.currentProject.path;
      path = `${rootPath}${path.substr(1)}`;
    }
    return path;
  }
}
