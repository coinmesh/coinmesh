import {bindable} from 'aurelia-templating';
import {Index} from '../index';
import {PathUtils} from 'resources/path-utils';

export class StepOne {
  routeIndex;
  @bindable currentPath = '~/';
  @bindable project;
  @bindable selectedDirectoryName = '';

  static inject = [Index];
  constructor(index) {
    this.routeIndex = index;
  }
  activate(project) {
    this.project = project;
    this.routeIndex.showNext = false;
  }
  selectDirectory() {
    let path = PathUtils.getPathToChildDir(this.currentPath, this.selectedDirectoryName);
    this.project.path = path;
    this.routeIndex.showNext = true;
    this.routeIndex.next();
  }
}
