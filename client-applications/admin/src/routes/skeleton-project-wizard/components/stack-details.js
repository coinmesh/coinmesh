import {bindable} from 'aurelia-templating';

export class StackDetails {
  @bindable project;
  @bindable showName = true;
  @bindable showDescription = true;
  @bindable showPath = true;
}
