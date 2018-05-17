import {HttpWrapper} from './http-wrapper';
import {ClientApplication} from '../models/client-application';
import {ClientApplicationFixtures} from '../resources/client-application-fixtures';

export class ClientApplicationsService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getClientApplications() {
    const fixtures = ClientApplicationFixtures.fixtures;
    return Promise.resolve(fixtures);
  }
  getClientApplicationById(id) {
    const fixture = ClientApplicationFixtures.fixtures.find(item => item.id.toString() === id.toString());
    return Promise.resolve(fixture);
  }
}
