import {bindable} from 'aurelia-templating';
import {Index} from '../index';

export class StepFive {
  @bindable project;

  static inject = [Index];
  constructor(index) {
    this.routeIndex = index;
  }

  activate(project) {
    this.routeIndex.showNext = false;
    this.project = project;
  }
  reviewDetails() {
    this.routeIndex.showNext = true;
    this.routeIndex.next();
  }
}
