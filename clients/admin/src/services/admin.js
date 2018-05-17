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
    return this.http.post(url, project).then(result => {
      return new Project(result);
    });
  }
  loadProject(projectJsonPath) {
    let url = `http://localhost:3002/v0/project/${projectJsonPath}`;

    return this.http.get(url).then(result => {
      return new Project(result);
    });
  }
}
