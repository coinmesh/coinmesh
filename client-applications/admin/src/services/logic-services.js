import {HttpWrapper} from './http-wrapper';
import {LogicService} from '../models/logic-service';
import {LogicServiceFixtures} from '../resources/logic-service-fixtures';

export class LogicServicesService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getLogicServices() {
    return this.http.get('http://localhost:3002/v0/registry/logic-services').then(result => {
      return result.logicServices.map(logicService => {
        return new LogicService(logicService);
      });
    });
  }
  getLogicServiceById(id) {
    const fixture = LogicServiceFixtures.fixtures.find(item => item.id.toString() === id.toString());
    return Promise.resolve(fixture);
  }
}
