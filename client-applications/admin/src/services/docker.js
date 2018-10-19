import {HttpWrapper} from './http-wrapper';
import {ProjectStore} from 'services/project-store';
import {ToastMessagesService} from 'services/toast-messages';
import {PathUtils} from 'resources/path-utils';

export class DockerService {
  static inject = [HttpWrapper, ProjectStore, ToastMessagesService];
  constructor(http, projectStore, toastMessagesService) {
    this.http = http;
    this.projectStore = projectStore;
    this.toastMessagesService = toastMessagesService;
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
    let path = PathUtils.fixRelativePath(projectJsonPath, this.projectStore.currentProject.path);
    let url = `http://localhost:3002/v0/docker/${command}`;
    let body = {
      path,
      flags
    };

    return this.http.post(url, body).then(response => {
      return response.content;
    });
  }
}
