import {HttpWrapper} from './http-wrapper';
import {ForwardingEvent} from 'models/forwarding-event';

export class HistoriesService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getForwardingHistory() {
    return this.http.get('/history').then(result => {
      return result.histories.map(item => {
        return new ForwardingEvent(item);
      });
    });
  }
}
