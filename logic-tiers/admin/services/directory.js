const fileSystemService = require('file-system-adapter').fileSystemService;
const homedirUtils = new (require('../resources/homedir-utils'));

class DirectoryService {
  createDirectory(path) {
    path = homedirUtils.getPathFromHomeDir(path);

    return fileSystemService.createDirectory(path);
  }
  getDirectoryContents(path) {
    path = homedirUtils.getPathFromHomeDir(path);

    return fileSystemService.readAllFilesAndDirectoriesInDirectory(path);
  }
}

module.exports = DirectoryService;
