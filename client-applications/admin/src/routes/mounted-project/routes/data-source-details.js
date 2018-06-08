import {ProjectStore} from 'services/project-store';
import {AdminService} from 'services/admin';
import {DataSource} from 'models/data-source';
import {bindable} from 'aurelia-templating';

export class DataSourceDetails {
  projectStore;
  adminService;
  dataSource;
  @bindable processUuid;

  static inject = [ProjectStore, AdminService];
  constructor(projectStore, adminService) {
    this.projectStore = projectStore;
    this.adminService = adminService;
  }

  activate(params) {
    let dataSourceName = params.name;

    if (dataSourceName && this.projectStore.currentProject) {
      let match = this.projectStore.currentProject.dataSources.find(dataSource => {
        return dataSource.name === dataSourceName;
      });
      this.dataSource = match;
      let path = this.dataSource.path;

      let packageJsonPath = `${path}/package.json`;

      return this.adminService.loadProject(packageJsonPath, DataSource).then(result => {
        this.dataSource = result;
        this.dataSource.path = path;
      });
    }
  }
}
