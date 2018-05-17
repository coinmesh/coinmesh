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
      let match = this.projectStore.currentProject.adapters.find(adapter => {
        return adapter.name === adapterName;
      });
      this.adapter = match;
      let path = this.adapter.path;

      let packageJsonPath = `${path}/package.json`;

      return this.adminService.loadProject(packageJsonPath).then(result => {
        this.adapter = result;
        this.adapter.path = path;
      });
    }
  }
}
