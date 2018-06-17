import {HttpWrapper} from './http-wrapper';
import {Adapter} from '../models/adapter';
import {AdapterFixtures} from '../resources/adapter-fixtures';

export class AdaptersService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getAdapters() {
    return this.http.get('http://localhost:3002/v0/registry/adapters').then(result => {
      return result.adapters.map(adapter => {
        return new Adapter(adapter);
      });
    });
  }
  getAdapterById(id) {
    const fixture = AdapterFixtures.fixtures.find(item => item.id.toString() === id.toString());
    return Promise.resolve(fixture);
  }
}
