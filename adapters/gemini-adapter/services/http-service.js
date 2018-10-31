const axios = require('axios');
const crypto = require('crypto');

const apiKey = process.env.GEMINI_API_KEY;
const secret = process.env.GEMINI_API_SECRET;

if (!apiKey) {
  throw new Error('Error: No GEMINI_API_KEY found.');
} else if (!secret) {
  throw new Error('Error: No GEMINI_API_SECRET found.');
}

class HttpService {
  get(path) {
    const url = `https://api.sandbox.gemini.com${path}`;

    return axios.get(url).catch(error => {
      let data = error.response.data;
      const message = `${data.result} | ${data.reason} | ${data.message}`;
      console.error(message);
      throw new Error(message);
      return error;
    });
  }
  post(path, data) {
    const encodedPayload = this.getEncodedPayload(path, data);

    const signature = crypto
      .createHmac('sha384', secret)
      .update(encodedPayload)
      .digest('hex');

    const config = {
      headers: {
        'Content-Type': 'text/plain',
        'X-GEMINI-APIKEY': apiKey,
        'X-GEMINI-PAYLOAD': encodedPayload,
        'X-GEMINI-SIGNATURE': signature
      }
    };
    const url = `https://api.sandbox.gemini.com${path}`;

    return axios.post(url, null, config).catch(error => {
      let data = error.response.data;
      const message = `${data.result} | ${data.reason} | ${data.message}`;
      console.error(message);
      throw new Error(error);
      return error;
    });
  }
  getEncodedPayload(requestPath, data) {
    const timestampMs = new Date().getTime();

    const payload = Object.assign({
      nonce: timestampMs,
      request: requestPath
    }, data);

    const encoded = Buffer.from(JSON.stringify(payload)).toString('base64')
    return encoded;
  }
}

module.exports = HttpService;
