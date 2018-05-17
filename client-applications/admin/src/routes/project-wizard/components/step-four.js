import {bindable} from 'aurelia-templating';
import {ClientApplicationsService} from 'services/client-applications';

export class StepThree {
  @bindable project;
  @bindable clientApplications = [];

  static inject = [ClientApplicationsService];
  constructor(clientApplicationsService) {
    this.clientApplicationsService = clientApplicationsService;
  }

  activate(project) {
    this.project = project;
    return this.clientApplicationsService.getClientApplications().then(result => {
      this.clientApplications = result;
    });
  }
  detached() {
    this.project.clientApplications = this.clientApplications.filter(logicService => {
      return logicService.selected;
    });
  }
}
