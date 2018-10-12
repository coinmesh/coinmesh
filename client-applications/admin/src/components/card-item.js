import {bindable} from 'aurelia-templating';

export class CardItem {
  @bindable canToggle = true;
  // @bindable classes = 'text-white bg-dark';
  @bindable classes = '';
  @bindable isSuccess = false;
  @bindable isError = false;
  @bindable isOpen = false;

  toggle() {
    if (this.canToggle) {
      this.isOpen = !this.isOpen;
    }
  }
}
