export class Message {
  message = '';
  signature = '';
  type = 'address';

  constructor(data) {
    Object.assign(this, data);
  }
}
