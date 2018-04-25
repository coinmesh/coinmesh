import {bindable} from 'aurelia-templating';

export class CardItem {
  @bindable canToggle = true;
  isOpen = false;

  toggle() {
    if (this.canToggle) {
      this.isOpen = !this.isOpen;
    }
  }
}
