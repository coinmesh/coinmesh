import {HttpWrapper} from './http-wrapper';
import {Adapter} from '../models/adapter';
import {AdapterFixtures} from '../resources/adapter-fixtures';

export class AdaptersService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getAdapters() {
    const fixtures = AdapterFixtures.fixtures;
    return Promise.resolve(fixtures);
  }
  getAdapterById(id) {
    const fixture = AdapterFixtures.fixtures.find(item => item.id.toString() === id.toString());
    return Promise.resolve(fixture);
  }
}
