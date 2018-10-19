import {bindable} from 'aurelia-templating';

export class StatusIcon {
  @bindable status = 'unknown';

  color = 'gray';
  icon = 'question-circle';

  statusChanged(newValue) {
    switch (newValue) {
      case 'up':
      case 'ready':
        this.color = 'green';
        this.icon = 'check-circle';
        break;
      case 'exit':
      case 'failed':
        this.color = 'red';
        this.icon = 'times-circle';
        break;
      case 'loading':
      case 'waiting':
      case 'pending':
        this.color = 'light-green';
        this.icon = 'circle-o-notch fa-spin';
        break;
      default:
        this.color = 'gray';
        this.icon = 'question-circle';
        break;
    }
  }
}
