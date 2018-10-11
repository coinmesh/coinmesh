export class Address {
  type = 'address';
  address = '';

  constructor(data) {
    Object.assign(this, data);
  }
}
