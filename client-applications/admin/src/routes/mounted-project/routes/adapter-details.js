import {ProjectStore} from 'services/project-store';
import {ProjectsService} from 'services/projects';

export class AdapterDetails {
  projectStore;
  projectsService;
  adapter;

  static inject = [ProjectStore, ProjectsService];
  constructor(projectStore, projectsService) {
    this.projectStore = projectStore;
    this.projectsService = projectsService;
  }

  activate(params) {
    let adapterName = params.name;

    if (adapterName && this.projectStore.currentProject) {
      return this.projectsService.loadProjectByNameAndType(adapterName, 'adapters').then(result => {
        this.adapter = result;
      });
    }
  }
}
