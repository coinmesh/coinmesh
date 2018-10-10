export class Payment {
  address = '';
  label = '';
  amount = 0.0;
  type = 'payment';
  id = '';

  constructor(data) {
    Object.assign(this, data);
  }
}
