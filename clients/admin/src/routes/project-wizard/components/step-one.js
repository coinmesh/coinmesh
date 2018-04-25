import {bindable} from 'aurelia-templating';

export class StepOne {
  @bindable project;

  activate(project) {
    this.project = project;
  }
}
