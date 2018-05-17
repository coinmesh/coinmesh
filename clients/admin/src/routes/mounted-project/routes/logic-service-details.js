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
      let match = this.projectStore.currentProject.logicServices.find(logicService => {
        return logicService.name === logicServiceName;
      });
      this.logicService = match;
      let path = this.logicService.path;

      let packageJsonPath = `${path}/package.json`;

      return this.adminService.loadProject(packageJsonPath).then(result => {
        this.logicService = result;
        this.logicService.path = path;
      });
    }
  }
}
