import {HttpWrapper} from './http-wrapper';
import {ProjectStore} from 'services/project-store';
import {ToastMessagesService} from 'services/toast-messages';
import {PathUtils} from 'resources/path-utils';

export class NpmService {
  static inject = [HttpWrapper, ProjectStore, ToastMessagesService];
  constructor(http, projectStore, toastMessagesService) {
    this.http = http;
    this.projectStore = projectStore;
    this.toastMessagesService = toastMessagesService;
  }

  npmInstall(projectJsonPath) {
    let path = PathUtils.fixRelativePath(projectJsonPath, this.projectStore.currentProject.path);

    return this.npmCommand('npm-install', path);
  }
  npmLinkLocal(projectJsonPath) {
    let path = PathUtils.fixRelativePath(projectJsonPath, this.projectStore.currentProject.path);

    return this.npmCommand('npm-link-local', path);
  }
  npmStart(projectJsonPath) {
    let path = PathUtils.fixRelativePath(projectJsonPath, this.projectStore.currentProject.path);

    return this.npmCommand('npm-start', path);
  }
  npmTest(projectJsonPath) {
    let path = PathUtils.fixRelativePath(projectJsonPath, this.projectStore.currentProject.path);

    return this.npmCommand('npm-test', path);
  }
  npmCommand(command, projectJsonPath) {
    let url = `http://localhost:3002/v0/terminal/${command}`;
    let path = PathUtils.fixRelativePath(projectJsonPath, this.projectStore.currentProject.path);

    let body = { path };

    return this.http.post(url, body).then(response => {
      return response.content;
    });
  }
}
