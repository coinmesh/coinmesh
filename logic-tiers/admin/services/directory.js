const fileSystemService = require('file-system-adapter').fileSystemService;

class DirectoryService {
  createDirectory(path) {
    return fileSystemService.createDirectory(path);
  }
}

module.exports = DirectoryService;
