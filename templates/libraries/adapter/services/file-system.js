const fs = require('fs-extra');

class FileSystemService {
  readFile(filePath, encoding = 'utf8') {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, encoding, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }
}

module.exports = FileSystemService;
