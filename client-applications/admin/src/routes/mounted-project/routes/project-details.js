import {ProjectStore} from 'services/project-store';
import {AdminService} from 'services/admin';
import {bindable} from 'aurelia-templating';
import {DockerContainer} from 'models/docker-container';

export class ProjectDetails {
  projectStore;
  statusCheckerInterval;

  static inject = [ProjectStore, AdminService];
  constructor(projectStore, adminService) {
    this.projectStore = projectStore;
    this.adminService = adminService;
  }
  activate() {
    const path = this.projectStore.currentProject.path;
    this.projectStore.currentProject.setupContainers();

    this.statusCheckerInterval = this.startStatusCheck();
  }
  detached() {
    return clearInterval(this.statusCheckerInterval);
  }
  start(container) {
    const path = this.projectStore.currentProject.path;
    return this.adminService.dockerCompose(path, ['start', container.name]).then(() => {
      container.status = 'unknown';
    });
  }
  stop(container) {
    const path = this.projectStore.currentProject.path;
    return this.adminService.dockerCompose(path, ['stop', container.name]).then(() => {
      container.status = 'unknown';
    });
  }
  up() {
    const path = this.projectStore.currentProject.path;
    return this.adminService.dockerCompose(path, ['up']).then(() => {
      return this.projectStore.currentProject.dockerContainers.forEach(container => {
        container.status = 'unknown';
      });
    });
  }
  down() {
    const path = this.projectStore.currentProject.path;
    return this.adminService.dockerComposeDown(path).then(() => {
      return this.projectStore.currentProject.dockerContainers.forEach(container => {
        container.status = 'unknown';
      });
    });
  }
  startStatusCheck() {
    this.checkAllContainerStatuses();
    return setInterval(() => {
      this.checkAllContainerStatuses();
    }, 10000);
  }
  checkAllContainerStatuses() {
    this.projectStore.currentProject.dockerContainers.forEach(container => {
      this.checkContainerStatus(container);
    });
  }
  checkContainerStatus(container) {
    const path = this.projectStore.currentProject.path;
    return this.adminService.dockerComposeStatus(path, [container.name]).then(result => {
      container.status = result;
    });
  }
}
