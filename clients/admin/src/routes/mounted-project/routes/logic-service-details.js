import {ProjectStore} from 'services/project-store';

export class LogicServiceDetails {
  projectStore;
  logicService;

  static inject = [ProjectStore];
  constructor(projectStore) {
    this.projectStore = projectStore;
  }

  activate(params) {
    let logicServiceName = params.name;

    if (logicServiceName && this.projectStore.currentProject) {
      let match = this.projectStore.currentProject.logicServices.find(logicService => {
        return logicService.name === logicServiceName;
      });
      this.logicService = match;
    }
  }
}
