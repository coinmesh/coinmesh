import {bindable} from 'aurelia-templating';

export class StepFour {
  @bindable project;

  activate(project) {
    this.project = project;
  }
}
