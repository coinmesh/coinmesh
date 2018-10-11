import {HttpClient} from 'aurelia-http-client';
import Config from '../../config.json!';

export class HttpWrapper {
  http;
  walletHttp;

  constructor() {
    let {username, password} = Config;
    let token = btoa(`${username}:${password}`);

    this.http = new HttpClient()
      .configure(x => {
        x.withBaseUrl(`http://localhost:3005/v0/`);
        x.withHeader('Authorization', `Basic ${token}`);
      });
  }

  get(path) {
    return this.http.get(path).then(result => {
      return result.content;
    });
  }
  post(path, body) {
    return this.http.post(path, body);
  }
  patch(path, body) {
    return this.http.patch(path, body);
  }
  delete(path) {
    return this.http.delete(path);
  }
}
