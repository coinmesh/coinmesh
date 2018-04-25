import {HttpWrapper} from './http-wrapper';
import {ServiceStatus} from '../models/service-status';
import {ServiceStatusFixtures} from '../resources/service-status-fixtures';

export class ServiceStatusService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getServiceStatuses() {
    const fixtures = ServiceStatusFixtures.fixtures;
    return Promise.resolve(fixtures);
  }
}
