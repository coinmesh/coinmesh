import {bindable} from 'aurelia-templating';
import {Index} from '../index';

export class StepFour {
  @bindable project;

  static inject = [Index];
  constructor(index) {
    this.routeIndex = index;
  }

  activate(project) {
    this.project = project;
    this.routeIndex.showCreateProject = true;
  }
  deactivate() {
    this.routeIndex.showCreateProject = false;
  }
}
