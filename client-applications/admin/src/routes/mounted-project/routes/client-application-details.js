import {ProjectStore} from 'services/project-store';
import {ProjectsService} from 'services/projects';

export class ClientApplicationDetails {
  projectStore;
  projectsService;
  clientApplication;

  static inject = [ProjectStore, ProjectsService];
  constructor(projectStore, projectsService) {
    this.projectStore = projectStore;
    this.projectsService = projectsService;
  }

  activate(params) {
    const currentProject = this.projectStore.currentProject;
    let clientApplicationName = params.name;

    if (clientApplicationName && currentProject) {
      return this.projectsService.loadProjectByNameAndType(clientApplicationName, 'clientApplications').then(result => {
        this.clientApplication = result;
      });
    }
  }
}
