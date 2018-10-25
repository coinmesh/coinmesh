import {bindable} from 'aurelia-templating';
import {AdminService} from 'services/admin';
import {PathUtils} from 'resources/path-utils';

export class DirectoryList {
  adminService;
  @bindable currentPath = '~/';
  @bindable items = [];
  @bindable newDirectoryName = '';
  @bindable selectedItem = '';
  @bindable selectItem = () => {};
  @bindable canCreateDirectory = true;
  @bindable selectItemText = 'Select item';

  static inject = [AdminService];
  constructor(adminService) {
    this.adminService = adminService;
  }
  attached() {
    return this.getDirectoryContents();
  }
  goUpOneDirectory() {
    this.currentPath = this.currentPath.split('/').slice(0, -1).join('/');
    this.getDirectoryContents();
  }
  getDirectoryContents(childDir) {
    const originalPath = this.currentPath;
    if (childDir) {
      this.currentPath = PathUtils.getPathToChildDir(this.currentPath, childDir);
    }
    return this.adminService.getDirectoryContents(this.currentPath).then(result => {
      this.currentDirectory = result;
    }).catch(error => {
      this.currentPath = originalPath;
    });
  }
  createDirectory() {
    let name = this.newDirectoryName || '';
    name = name.split(' ').join('_');
    let path = `${this.currentPath || ''}/${name}`;

    return this.adminService.createDirectory(path).then(result => {
      this.currentDirectory.items.push({
        name: name,
        type: 'directory'
      });
      this.newDirectoryName = '';
    });
  }
}
