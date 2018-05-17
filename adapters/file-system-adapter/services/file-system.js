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
  createEmptyFile(filePath, encoding = 'utf8') {
    return this.writeFile(filePath, '');
  }
  writeFile(filePath, content, encoding = 'utf8') {
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, content, encoding, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }
  createDirectory(directoryPath) {
    return new Promise((resolve, reject) => {
      fs.ensureDir(directoryPath, err => {
        if (err) {
          reject(err);
        }
        resolve(true);
      });
    });
  }
  createDirectories(directoryPaths) {
    let promises = [];

    directoryPaths.forEach(path => {
      promises.push(this.createDirectory(path));
    });

    return Promise.all(promises);
  }
  copyFile(filePath, newPath) {
    return new Promise((resolve, reject) => {
      this.readFile(filePath).then(result => {
        this.writeFile(newPath, result).then(finished => {
          resolve(true);
        });
      })
    });
  }
  copyAllFilesAndDirectoriesInDirectory(directoryPath, newPath) {
    return fs.copy(directoryPath, newPath);
  }
  readAllFilesAndDirectoriesInDirectory(directoryPath) {
    return new Promise((resolve, reject) => {
      fs.readdir(directoryPath, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }
}

module.exports = FileSystemService;
