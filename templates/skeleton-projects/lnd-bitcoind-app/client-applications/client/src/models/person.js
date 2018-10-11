export class Person {
  id;
  firstName = '';
  lastName = '';
  type = 'person';

  constructor(data) {
    Object.assign(this, data);
  }
}
