import {bindable, containerless} from 'aurelia-templating';

@containerless
export class HeaderPanel {
  @bindable isOpen = true;
  toggleNav() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      document.body.classList.remove('open');
    } else {
      document.body.classList.add('open');
    }
  }
}
