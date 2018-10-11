const rp = require('request-promise');
const config = require('./config');

class JsonRpc {
  post(requestBody) {
    const {
      protocol,
      username,
      password,
      host,
      port
    } = config;

    let url = `${protocol}${username}:${password}@${host}:${port}/`;

    let options = {
      method: 'POST',
      uri: url,
      body: JSON.stringify(requestBody)
    };

    return rp(options).then(result => {
      return JSON.parse(result);
    });
  }
}

class JsonRpcRequest {
  constructor(data) {
    this.method = data.method;
    this.params = data.params || [];
    this.id = data.id;
  }
}

module.exports = {
  jsonRpcClient: new JsonRpc(),
  JsonRpcRequest: JsonRpcRequest
};
