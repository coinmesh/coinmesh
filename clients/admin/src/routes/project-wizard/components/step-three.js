import {bindable} from 'aurelia-templating';
import {LogicService} from 'models/logic-service';
import {LogicServicesService} from 'services/logic-services';

export class StepThree {
  @bindable project;
  logicServices = [];

  static inject = [LogicServicesService];
  constructor(logicServicesService) {
    this.logicServicesService = logicServicesService;
  }

  activate(project) {
    this.project = project;
    return this.logicServicesService.getLogicServices().then(result => {
      this.logicServices = result;
    });
  }
  detached() {
    this.project.logicServices = this.logicServices.filter(logicService => {
      return logicService.selected;
    });
  }
}
