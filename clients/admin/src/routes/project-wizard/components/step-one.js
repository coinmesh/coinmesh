import {bindable} from 'aurelia-templating';
import {AdminService} from 'services/admin';
import {Index} from '../index';

export class StepOne {
  adminService;
  routeIndex;
  @bindable currentPath = '~/';
  @bindable currentDirectory;
  @bindable project;
  @bindable selectedDirectoryName = '';

  static inject = [AdminService, Index];
  constructor(adminService, index) {
    this.adminService = adminService;
    this.routeIndex = index;
  }
  activate(project) {
    this.project = project;
    this.routeIndex.showNext = false;
    return this.getDirectoryContents();
  }
  goUpOneDirectory() {
    this.currentPath = this.currentPath.split('/').slice(0, -1).join('/');
    this.getDirectoryContents();
  }
  getDirectoryContents(childDir) {
    if (childDir) {
      this.currentPath = this.getPathFromCurrent(childDir);
    }
    return this.adminService.getDirectoryContents(this.currentPath).then(result => {
      this.currentDirectory = result;
    });
  }
  createDirectory(name) {
    let path = `${this.currentPath || ''}/${name}`;

    return this.adminService.createDirectory(path).then(result => {
      this.currentDirectory.items.push(name);
    });
  }
  selectDirectory() {
    let path = this.getPathFromCurrent(this.selectedDirectoryName);
    this.project.path = path;
    this.routeIndex.showNext = true;
    this.routeIndex.next();
  }
  getPathFromCurrent(childDir) {
    if (this.currentPath.slice(-1) === '/') {
      this.currentPath = this.currentPath.slice(0, -1);
    }
    return `${this.currentPath || ''}/${childDir}`;
  }
}
