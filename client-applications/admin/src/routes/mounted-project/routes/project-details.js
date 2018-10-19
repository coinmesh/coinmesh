import {ProjectStore} from 'services/project-store';
import {AdminService} from 'services/admin';
import {DockerService} from 'services/docker';
import {bindable} from 'aurelia-templating';
import {ToastMessagesService} from 'services/toast-messages';

export class ProjectDetails {
  projectStore;
  statusCheckerInterval;
  numberOfBlocks = 1;
  numberOfCoins = 10;
  sendToAddress = '';
  isGeneratingBlocks = false;
  generatingInterval;

  static inject = [ProjectStore, AdminService, DockerService, ToastMessagesService];
  constructor(projectStore, adminService, dockerService, toastMessagesService) {
    this.projectStore = projectStore;
    this.adminService = adminService;
    this.dockerService = dockerService;
    this.toastMessagesService = toastMessagesService;
  }
  activate() {
    const path = this.projectStore.currentProject.path;

    this.statusCheckerInterval = this.startStatusCheck();
  }
  detached() {
    if (this.generatingInterval) {
      clearInterval(this.generatingInterval);
    }
    return clearInterval(this.statusCheckerInterval);
  }
  start(container) {
    const path = this.projectStore.currentProject.path;
    return this.dockerService.dockerCompose(path, ['up', container.name]).then(() => {
      container.status = 'pending';
    });
  }
  stop(container) {
    const path = this.projectStore.currentProject.path;
    return this.dockerService.dockerCompose(path, ['stop', container.name]).then(() => {
      container.status = 'pending';
    });
  }
  up() {
    const path = this.projectStore.currentProject.path;

    return this.dockerService.dockerCompose(path, ['up']).then(() => {
      return this.projectStore.currentProject.dockerServices.forEach(container => {
        container.status = 'pending';
      });
    });
  }
  down() {
    const path = this.projectStore.currentProject.path;

    return this.dockerService.dockerComposeDown(path).then(() => {
      return this.projectStore.currentProject.dockerServices.forEach(container => {
        container.status = 'pending';
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
    this.projectStore.currentProject.dockerServices.forEach(container => {
      this.checkContainerStatus(container);
    });
  }
  checkContainerStatus(container) {
    const path = this.projectStore.currentProject.path;
    return this.dockerService.dockerComposeStatus(path, [container.name]).then(result => {
      container.status = result;
    });
  }
  generateBlocks() {
    return this.adminService.generateBlocks(this.numberOfBlocks).then(result => {
      this.toastMessagesService.showMessage(`Generated ${this.numberOfBlocks} blocks.`);
    });
  }
  sendCoins() {
    return this.adminService.sendCoins(this.sendToAddress, this.numberOfCoins);
  }
  toggleContinuouslyGenerateBlocks() {
    this.isGeneratingBlocks = !this.isGeneratingBlocks;

    if (this.isGeneratingBlocks === true) {
      this.generatingInterval = setInterval(() => {
        this.generateBlocks(1);
      }, 10000)
    } else {
      clearInterval(this.generatingInterval);
    }
  }
}
