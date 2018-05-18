import {HttpWrapper} from './http-wrapper';
import {Directory} from '../models/directory';
import {Project} from '../models/project';
import {ConfFile} from '../models/conf-file';

export class AdminService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getDirectoryContents(path) {
    let url = `http://localhost:3002/v0/directory/${path ? path : ''}`;

    return this.http.get(url).then(result => {
      let directory = new Directory({
        items: result
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
    return this.npmCommand('npm-install', projectJsonPath).then(response => {
      return response.content;
    });
  }
  npmLinkLocal(projectJsonPath) {
    return this.npmCommand('npm-link-local', projectJsonPath).then(response => {
      return response.content;
    });
  }
  npmStart(projectJsonPath) {
    return this.npmCommand('npm-start', projectJsonPath).then(response => {
      return response.content;
    });
  }
  npmTest(projectJsonPath) {
    return this.npmCommand('npm-test', projectJsonPath).then(response => {
      return response.content;
    });
  }
  killProcess(uuid) {
    let url = `http://localhost:3002/v0/terminal/kill-process/${uuid}`;

    return this.http.delete(url);
  }
  npmCommand(command, projectJsonPath) {
    let url = `http://localhost:3002/v0/terminal/${command}`;
    let body = { path: projectJsonPath };

    return this.http.post(url, body);
  }
}
