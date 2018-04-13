const fs = require('fs')

class WriteFilesService {
  writeFile(path, encoding = 'utf8') {
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
}

module.exports = {
  fileService: new WriteFilesService()
};
