import axios from 'axios';
import Config from '../config.json';

export class HttpWrapper {
  http;

  constructor() {
    let {username, password} = Config;
    let token = btoa(`${username}:${password}`);

    this.http = axios.create({
      baseURL: 'http://localhost:3098/v0/',
      headers: {'Authorization': `Basic ${token}`}
    });
  }

  get(path) {
    return this.http.get(path).then(result => {
      return result.data;
    });
  }
  post(path, body) {
    return this.http.post(path, body).then(result => {
      return result.data;
    });
  }
  patch(path, body) {
    return this.http.patch(path, body).then(result => {
      return result.data;
    });
  }
  delete(path) {
    return this.http.delete(path).then(result => {
      return result.data;
    });
  }
}
