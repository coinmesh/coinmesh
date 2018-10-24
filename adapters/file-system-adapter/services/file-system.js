const fs = require('fs-extra');
const dirTree = require('directory-tree');

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
  checkFileExists(filePath) {
    return fs.pathExists(filePath);
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
    return fs.copy(directoryPath, newPath, {
      filter: path => {
        const isNodeModules = (path.indexOf('node_modules') > -1);
        const isJspmPackages = (path.indexOf('jspm_packages') > -1);

        return !isNodeModules && !isJspmPackages;
      }
    });
  }
  readAllFilesAndDirectoriesInDirectory(directoryPath) {
    return new Promise((resolve, reject) => {
      fs.readdir(directoryPath, (err, files) => {
        if (err) {
          return reject(err.message);
        }
        let results = [];
        files.forEach(file => {
          let stats;
          try { stats = fs.statSync(`${directoryPath}/${file}`); }
          catch (e) { return null; }

          if (stats.isFile()) {
            results.push({
              name: file,
              size: stats.size,
              type: 'file'
            });
          } else if (stats.isDirectory()) {
            results.push({
              name: file,
              type: 'directory'
            });
          }
        });
        resolve(results);
      });
    });
  }
}

module.exports = FileSystemService;
