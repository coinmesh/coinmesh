import {HttpWrapper} from './http-wrapper';
import {NodeStatus} from '../models/node-status';
import {NodeStatusFixtures} from '../resources/node-status-fixtures';

export class NodeStatusService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getNodeStatuses() {
    const fixtures = NodeStatusFixtures.fixtures;
    return Promise.resolve(fixtures);
  }
  getNodeStatusById(id) {
    const fixture = NodeStatusFixtures.fixtures.find(item => item.id.toString() === id.toString());
    return Promise.resolve(fixture);
  }
}
