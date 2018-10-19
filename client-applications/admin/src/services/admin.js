import {HttpWrapper} from './http-wrapper';
import {Directory} from '../models/directory';
import {Project} from '../models/project';
import {ConfFile} from '../models/conf-file';
import {ProjectStore} from 'services/project-store';
import {ToastMessagesService} from 'services/toast-messages';
import {PathUtils} from 'resources/path-utils';

export class AdminService {
  static inject = [HttpWrapper, ProjectStore, ToastMessagesService];
  constructor(http, projectStore, toastMessagesService) {
    this.http = http;
    this.projectStore = projectStore;
    this.toastMessagesService = toastMessagesService;
  }

  getDirectoryContents(path) {
    let url = `http://localhost:3002/v0/directory/contents`;
    path = PathUtils.fixRelativePath(path);

    let body = { path };

    return this.http.post(url, body).then(result => {
      let directory = new Directory({
        items: result.content
      });
      return directory;
    }).catch(error => {
      let message = `Could not open ${path} as directory.`;
      this.toastMessagesService.showMessage(message, 'warning');
      return Promise.reject(message);
    });
  }
  createDirectory(path) {
    let url = `http://localhost:3002/v0/directory`;
    path = PathUtils.fixRelativePath(path);

    return this.http.post(url, { path });
  }
  checkConfFileExists(path) {
    let url = `http://localhost:3002/v0/project/check-conf-file-exists`;
    path = PathUtils.fixRelativePath(path, this.projectStore.currentProject.path);

    return this.http.post(url, { path }).then(response => {
      return response.content;
    });
  }
  readConfFile(path) {
    let url = `http://localhost:3002/v0/project/read-conf-file`;
    path = PathUtils.fixRelativePath(path, this.projectStore.currentProject.path);

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
    path = PathUtils.fixRelativePath(path, this.projectStore.currentProject.path);

    return this.http.post(url, { path }).then(response => {
      return response.content;
    });
  }
  generateBlocks(numberOfBlocks) {
    // TODO: Port needs to be passed from the project details component that calls this
    let url = `http://localhost:3009/v0/blocks/generate/${numberOfBlocks}`;
    return this.http.get(url);
  }
  sendCoins(address, amount) {
    // TODO: Port needs to be passed from the project details component that calls this
    let url = `http://localhost:3009/v0/addresses/sendtoaddress`;
    const body = {
      address,
      amount
    };
    return this.http.post(url, body);
  }
  killProcess(uuid) {
    let url = `http://localhost:3002/v0/terminal/kill-process/${uuid}`;

    return this.http.delete(url);
  }
}
