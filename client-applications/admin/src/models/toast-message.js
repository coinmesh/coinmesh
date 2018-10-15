export class ToastMessage {
  message = '';
  status = 'success';

  constructor(data) {
    Object.assign(this, data);
  }
}
