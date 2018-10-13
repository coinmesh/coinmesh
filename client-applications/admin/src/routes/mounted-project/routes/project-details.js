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

    this.checkIfNeedUnlock();

    this.statusCheckerInterval = this.startStatusCheck();
  }
  detached() {
    return clearInterval(this.statusCheckerInterval);
  }
  start(container) {
    const path = this.projectStore.currentProject.path;
    return this.adminService.dockerCompose(path, ['up', container.name]).then(() => {
      container.status = 'pending';
    });
  }
  stop(container) {
    const path = this.projectStore.currentProject.path;
    return this.adminService.dockerCompose(path, ['stop', container.name]).then(() => {
      container.status = 'pending';
    });
  }
  up() {
    const path = this.projectStore.currentProject.path;

    return this.adminService.dockerCompose(path, ['up']).then(() => {
      return this.projectStore.currentProject.dockerContainers.forEach(container => {
        container.status = 'pending';
      });
    });
  }
  down() {
    const path = this.projectStore.currentProject.path;

    return this.adminService.dockerComposeDown(path).then(() => {
      return this.projectStore.currentProject.dockerContainers.forEach(container => {
        container.status = 'pending';
      });
    });
  }
  checkIfNeedUnlock() {
    const path = this.projectStore.currentProject.path;

    this.projectStore.currentProject.dockerContainers.forEach(container => {
      if (container.name === 'lnd') {
        return this.adminService.checkWalletLocked(path, 'regtest', container.name).then(result => {
          container.locked = result;
        });
      }
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
