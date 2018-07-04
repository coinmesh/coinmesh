import {ProjectStore} from 'services/project-store';
import {AdminService} from 'services/admin';

export class ClientApplicationDetails {
  projectStore;
  adminService;
  clientApplication;

  static inject = [ProjectStore, AdminService];
  constructor(projectStore, adminService) {
    this.projectStore = projectStore;
    this.adminService = adminService;
  }

  activate(params) {
    let clientApplicationName = params.name;

    if (clientApplicationName && this.projectStore.currentProject) {
      return this.adminService.loadProjectByNameAndType(clientApplicationName, 'clientApplications').then(result => {
        this.clientApplication = result;
      });
    }
  }
}
