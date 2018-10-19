import {ProjectStore} from 'services/project-store';
import {ProjectsService} from 'services/projects';

export class LogicServiceDetails {
  projectStore;
  projectsService;
  logicService;

  static inject = [ProjectStore, ProjectsService];
  constructor(projectStore, projectsService) {
    this.projectStore = projectStore;
    this.projectsService = projectsService;
  }

  activate(params) {
    let logicServiceName = params.name;

    if (logicServiceName && this.projectStore.currentProject) {
      return this.projectsService.loadProjectByNameAndType(logicServiceName, 'logicServices').then(result => {
        this.logicService = result;
      });
    }
  }
}
