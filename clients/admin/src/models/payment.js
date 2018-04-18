export class Payment {
  type = 'payment';
  id = '';

  constructor(data) {
    Object.assign(this, data);
  }
}
