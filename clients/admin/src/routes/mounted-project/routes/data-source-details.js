import {ProjectStore} from 'services/project-store';

export class DataSourceDetails {
  projectStore;
  dataSource;

  static inject = [ProjectStore];
  constructor(projectStore) {
    this.projectStore = projectStore;
  }

  activate(params) {
    let dataSourceName = params.name;

    if (dataSourceName && this.projectStore.currentProject) {
      let match = this.projectStore.currentProject.dataSources.find(dataSource => {
        return dataSource.name === dataSourceName;
      });
      this.dataSource = match;
    }
  }
}
