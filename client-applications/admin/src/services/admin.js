import {HttpWrapper} from './http-wrapper';
import {Directory} from '../models/directory';
import {Project} from '../models/project';

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
  createNewProject(project) {
    let url = `http://localhost:3002/v0/project`;
    return this.http.post(url, project);
  }
  loadProject(projectJsonPath) {
    let url = `http://localhost:3002/v0/project/${projectJsonPath}`;

    return this.http.get(url).then(result => {
      return new Project(result);
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
