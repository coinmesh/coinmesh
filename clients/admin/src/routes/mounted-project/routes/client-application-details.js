import {ProjectStore} from 'services/project-store';

export class ClientApplicationDetails {
  projectStore;
  clientApplication;

  static inject = [ProjectStore];
  constructor(projectStore) {
    this.projectStore = projectStore;
  }

  activate(params) {
    let clientApplicationName = params.name;

    if (clientApplicationName && this.projectStore.currentProject) {
      let match = this.projectStore.currentProject.clientApplications.find(clientApplication => {
        return clientApplication.name === clientApplicationName;
      });
      this.clientApplication = match;
    }
  }
}
