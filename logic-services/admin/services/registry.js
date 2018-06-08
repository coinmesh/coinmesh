const fileSystemService = require('@coinmesh/file-system-adapter').fileSystemService;

class RegistryService {
  readRegistry(filePath, encoding = 'utf8') {
    return new Promise((resolve, reject) => {
      fileSystemService.readFile(filePath).then(file => {
        resolve(file);
      });
    });
  }
}

module.exports = RegistryService;
