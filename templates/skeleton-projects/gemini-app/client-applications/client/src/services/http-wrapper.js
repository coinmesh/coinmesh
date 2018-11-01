import {HttpClient} from 'aurelia-http-client';

export class HttpWrapper {
  http;

  constructor() {
    this.http = new HttpClient()
      .configure(x => {
        x.withBaseUrl(`http://localhost:3987/v1/`);
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
