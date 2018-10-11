import {bindable} from 'aurelia-templating';
import {Project} from 'models/project';
import {Index} from '../index';

export class StepThree {
  @bindable wizardState;

  static inject = [Index];
  constructor(index) {
    this.routeIndex = index;
  }

  activate(wizardState) {
    this.wizardState = wizardState;
    this.routeIndex.showCreateProject = true;
  }
  deactivate() {
    this.routeIndex.showCreateProject = false;
  }
}
