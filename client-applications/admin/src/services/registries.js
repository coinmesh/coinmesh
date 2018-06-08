import {HttpWrapper} from './http-wrapper';

export class RegistriesService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }
  getClientApplicationsRegistry() {
    return this.readRegistry('client-applications');
  }
  getLogicServicesRegistry() {
    return this.readRegistry('logic-services');
  }
  getDataSourcesRegistry() {
    return this.readRegistry('data-sources');
  }
  getAdaptersRegistry() {
    return this.readRegistry('adapters');
  }
  readRegistry(name) {
    let url = `http://localhost:3002/v0/registry/${name}`;
    return this.http.get(url).then(response => {
      const result = response.content;
      return result;
    });
  }
}
