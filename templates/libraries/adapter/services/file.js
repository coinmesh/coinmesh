const fs = require('fs-extra');
const fileSystemService = new (require('./file-system'));
const fileUtils = new (require('../resources/file-utils'));

class FileService {
  readFile(filePath, encoding = 'utf8') {
    return new Promise((resolve, reject) => {
      fileSystemService.readFile(filePath).then(file => {
        let json = fileUtils.convertConfToJson(file);
        resolve(json);
      });
    });
  }
}

module.exports = FileService;
