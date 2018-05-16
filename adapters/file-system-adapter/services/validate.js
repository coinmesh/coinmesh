const fs = require('fs')
const confFileService = new (require('./conf-file'));

class ValidateService {
  checkAllProperties(projectPath) {
    return new Promise((resolve, reject) => {
      let errorProperties = [];

      confFileService.readConfFile(projectPath).then(confFileJson => {
        resolve(true);
      });
    });
  }
}

module.exports = ValidateService;
