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
      let match = this.projectStore.currentProject.clientApplications.find(clientApplication => {
        return clientApplication.name === clientApplicationName;
      });
      this.clientApplication = match;
      let path = this.clientApplication.path;

      let packageJsonPath = `${path}/package.json`;

      return this.adminService.loadProject(packageJsonPath).then(result => {
        this.clientApplication = result;
        this.clientApplication.path = path;
      });
    }
  }
}
