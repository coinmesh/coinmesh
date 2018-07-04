import {ProjectStore} from 'services/project-store';
import {AdminService} from 'services/admin';

export class AdapterDetails {
  projectStore;
  adminService;
  adapter;

  static inject = [ProjectStore, AdminService];
  constructor(projectStore, adminService) {
    this.projectStore = projectStore;
    this.adminService = adminService;
  }

  activate(params) {
    let adapterName = params.name;

    if (adapterName && this.projectStore.currentProject) {
      return this.adminService.loadProjectByNameAndType(adapterName, 'adapters').then(result => {
        this.adapter = result;
      });
    }
  }
}
