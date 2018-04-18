const fs = require('fs')

class ReadFilesService {
  readFile(path, encoding = 'utf8') {
    return new Promise((resolve, reject) => {
      fs.readFile(path, encoding, (err, data) => {
        if (err) {
          reject(err);
        }
        let result = this.getJSONFromConfigFile(data);
        resolve(result);
      });
    });
  }
  getJSONFromConfigFile(configFile) {
    let result = {};
    let brokenByNewLine = configFile.split(/\r?\n/);
    brokenByNewLine.forEach(line => {
      let key = line.split(/=/)[0];
      let value = line.split(/=/)[1];
      if (key && value) {
        result[key] = value;
      }
    });
    return result;
  }
}

module.exports = {
  service: new ReadFilesService()
};
