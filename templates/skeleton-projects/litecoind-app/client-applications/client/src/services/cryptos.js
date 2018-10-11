import {HttpWrapper} from './http-wrapper';
import {Message} from 'models/message';

export class CryptosService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  signMessage(message) {
    return this.http.post('/sign', message).then(result => {
      return new Message(result);
    });
  }
  verifyMessage(message) {
    return this.http.post('/verify', message).then(result => {
      return new Message(result);
    });
  }
}
