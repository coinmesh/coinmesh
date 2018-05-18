const fs = require('fs-extra');
const fileSystemService = new (require('./file-system'));
const confFileUtils = new (require('../resources/conf-file-utils'));

class ConfFileService {
  readConfFile(filePath, encoding = 'utf8') {
    return new Promise((resolve, reject) => {
      fileSystemService.readFile(filePath).then(file => {
        let json = confFileUtils.convertConfToJson(file);
        resolve(json);
      });
    });
  }
  writeJsonAsConfFile(filePath, json, encoding = 'utf8') {
    return new Promise((resolve, reject) => {
      let confFile = confFileUtils.convertJsonToConfFile(json);

      fileSystemService.writeFile(filePath, confFile).then(result => {
        resolve(result);
      });
    });
  }
}

module.exports = ConfFileService;
