const fileSystemService = require('@coinmesh/file-system-adapter').fileSystemService;
const homedirUtils = new (require('../resources/homedir-utils'));

class DirectoryService {
  createDirectory(path) {
    path = homedirUtils.getPathFromHomeDir(path);

    return fileSystemService.createDirectory(path);
  }
  getDirectoryContents(path) {
    path = homedirUtils.getPathFromHomeDir(path);

    return fileSystemService.readAllFilesAndDirectoriesInDirectory(path).then(results => {
      return results;
    });
  }
  checkFileExists(path) {
    path = homedirUtils.getPathFromHomeDir(path);

    return fileSystemService.checkFileExists(path);
  }
}

module.exports = DirectoryService;
