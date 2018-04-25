import {bindable} from 'aurelia-templating';
import {ServiceStatusService} from '../services/service-status';
import {ServiceStatus} from '../models/service-status';

export class ServiceStatusList {
  @bindable serviceStatuses;
  @bindable newService = new ServiceStatus();

  static inject = [ServiceStatusService];
  constructor(serviceStatusService) {
    this.serviceStatusService = serviceStatusService;
  }

  attached() {
    return this.getServiceInfo();
  }

  getServiceInfo() {
    return this.serviceStatusService.getServiceStatuses().then(result => {
      this.serviceStatuses = result;
    });
  }
}
