import {HttpWrapper} from './http-wrapper';
import {DataSource} from '../models/data-source';
import {DataSourceFixtures} from '../resources/data-source-fixtures';

export class DataSourcesService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getDataSources() {
    return this.http.get('http://localhost:3002/v0/registry/data-sources').then(result => {
      return result.dataSources;
    });
  }
  getDataSourceById(id) {
    const fixture = DataSourceFixtures.fixtures.find(item => item.id.toString() === id.toString());
    return Promise.resolve(fixture);
  }
}
