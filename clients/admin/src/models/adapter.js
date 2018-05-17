export class Adapter {
  id;
  name = '';
  description = '';
  path = '';
  type = 'adapter';

  constructor(data) {
    Object.assign(this, data);
  }
}
