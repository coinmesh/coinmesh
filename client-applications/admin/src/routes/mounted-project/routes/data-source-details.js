import {ProjectStore} from 'services/project-store';
import {ProjectsService} from 'services/projects';
import {DataSource} from 'models/data-source';
import {bindable} from 'aurelia-templating';

export class DataSourceDetails {
  projectStore;
  projectsService;
  dataSource;
  @bindable processUuid;

  static inject = [ProjectStore, ProjectsService];
  constructor(projectStore, projectsService) {
    this.projectStore = projectStore;
    this.projectsService = projectsService;
  }

  activate(params) {
    let dataSourceName = params.name;
    if (dataSourceName && this.projectStore.currentProject) {
      return this.projectsService.loadProjectByNameAndType(dataSourceName, 'dataSources').then(result => {
        this.dataSource = result;
      });
    }
  }
}
