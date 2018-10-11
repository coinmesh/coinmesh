import {bindable} from 'aurelia-templating';
import {Index} from '../index';
import {PathUtils} from 'resources/path-utils';

export class StepOne {
  routeIndex;
  @bindable currentPath = '~/';
  @bindable wizardState;
  @bindable selectedDirectoryName = '';

  static inject = [Index];
  constructor(index) {
    this.routeIndex = index;
  }
  activate(wizardState) {
    this.wizardState = wizardState;
    this.routeIndex.showNext = false;
  }
  selectDirectory() {
    let path = PathUtils.getPathToChildDir(this.currentPath, this.selectedDirectoryName);
    this.wizardState.targetPath = path;
    this.routeIndex.showNext = true;
    this.routeIndex.next();
  }
}
