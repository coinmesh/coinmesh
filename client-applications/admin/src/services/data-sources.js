import {HttpWrapper} from './http-wrapper';
import {DataSource} from '../models/data-source';
import {DataSourceFixtures} from '../resources/data-source-fixtures';

export class DataSourcesService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getDataSources() {
    const fixtures = DataSourceFixtures.fixtures;
    return Promise.resolve(fixtures);
  }
  getDataSourceById(id) {
    const fixture = DataSourceFixtures.fixtures.find(item => item.id.toString() === id.toString());
    return Promise.resolve(fixture);
  }
}
