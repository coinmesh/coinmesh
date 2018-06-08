const fs = require('fs')

class WriteFilesService {
  writeFile(path, json, encoding = 'utf8') {
    return new Promise((resolve, reject) => {
      let configFile = this.getConfigFileFormatFromJSON(json);
      fs.writeFile(path, configFile, encoding, (err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      });
    });
  }
  getConfigFileFormatFromJSON(json) {
    let result = '';
    const lineEnding = '\n';

    Object.keys(json).forEach(key => {
      result += `${key}=${json[key]}${lineEnding}`;
    });

    return result;
  }
}

module.exports = {
  service: new WriteFilesService()
};
