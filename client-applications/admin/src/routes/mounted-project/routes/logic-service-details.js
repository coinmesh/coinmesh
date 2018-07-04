import {ProjectStore} from 'services/project-store';
import {AdminService} from 'services/admin';

export class LogicServiceDetails {
  projectStore;
  adminService;
  logicService;

  static inject = [ProjectStore, AdminService];
  constructor(projectStore, adminService) {
    this.projectStore = projectStore;
    this.adminService = adminService;
  }

  activate(params) {
    let logicServiceName = params.name;

    if (logicServiceName && this.projectStore.currentProject) {
      return this.adminService.loadProjectByNameAndType(logicServiceName, 'logicServices').then(result => {
        this.logicService = result;
      });
    }
  }
}
