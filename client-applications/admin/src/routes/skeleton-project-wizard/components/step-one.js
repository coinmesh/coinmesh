import {bindable} from 'aurelia-templating';
import {Index} from '../index';
import {PathUtils} from 'resources/path-utils';
import {ProjectStore} from 'services/project-store';

export class StepOne {
  routeIndex;
  projectStore;
  @bindable currentPath = '~/';
  @bindable wizardState;
  @bindable selectedDirectoryName = '';

  static inject = [Index, ProjectStore];
  constructor(index, projectStore) {
    this.routeIndex = index;
    this.projectStore = projectStore;
  }
  activate(wizardState) {
    this.wizardState = wizardState;
    this.routeIndex.showNext = false;
    this.projectStore.statusMessage = 'Choose or create a directory for your project...';
  }
  selectDirectory() {
    let path = PathUtils.getPathToChildDir(this.currentPath, this.selectedDirectoryName);
    this.wizardState.targetPath = path;
    this.routeIndex.showNext = true;
    this.routeIndex.next();
  }
}
