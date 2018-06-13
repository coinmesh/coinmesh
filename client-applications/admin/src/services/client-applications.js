import {HttpWrapper} from './http-wrapper';
import {ClientApplication} from '../models/client-application';
import {ClientApplicationFixtures} from '../resources/client-application-fixtures';

export class ClientApplicationsService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getClientApplications() {
    return this.http.get('http://localhost:3002/v0/registry/client-applications').then(result => {
      return result.clientApplications;
    });
  }
  getClientApplicationById(id) {
    const fixture = ClientApplicationFixtures.fixtures.find(item => item.id.toString() === id.toString());
    return Promise.resolve(fixture);
  }
}
