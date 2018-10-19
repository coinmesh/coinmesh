import {bindable} from 'aurelia-templating';

export class NavPanelGroup {
  @bindable isOpen = true;
  @bindable title = '';

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
