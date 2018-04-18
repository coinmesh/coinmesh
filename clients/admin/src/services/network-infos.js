import {HttpWrapper} from './http-wrapper';
import {NetworkInfo} from 'models/network-info';

export class NetworkInfosService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getInfo() {
    return this.http.get('/network_info').then(result => {
      return new NetworkInfo(result);
    });
  }
  getGraph() {
    return this.http.get('/network_info/graph').then(result => {
      return new NetworkInfo(result);
    });
  }
}
