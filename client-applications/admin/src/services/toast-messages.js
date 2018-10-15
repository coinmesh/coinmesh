import {ToastMessage} from 'models/toast-message';
import toastr from 'toastr';
import {bindable} from 'aurelia-templating';

export class ToastMessagesService {
  @bindable messages = [];
  constructor() {
    toastr.options.newestOnTop = false;
    toastr.options.timeOut = 2000;
  }
  showMessage(message, status = 'success') {
    toastr[status](message);
    const toast = new ToastMessage({
      message,
      status
    })
    this.messages.push(toast);
  }
}
