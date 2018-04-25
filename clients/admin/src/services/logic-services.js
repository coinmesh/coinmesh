import {HttpWrapper} from './http-wrapper';
import {LogicService} from '../models/logic-service';
import {LogicServiceFixtures} from '../resources/logic-service-fixtures';

export class LogicServicesService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getLogicServices() {
    const fixtures = LogicServiceFixtures.fixtures;
    return Promise.resolve(fixtures);
  }
  getLogicServiceById(id) {
    const fixture = LogicServiceFixtures.fixtures.find(item => item.id.toString() === id.toString());
    return Promise.resolve(fixture);
  }
}
