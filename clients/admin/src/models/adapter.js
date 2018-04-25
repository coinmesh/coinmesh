export class Adapter {
  id;
  name = '';
  description = '';
  type = 'adapter';

  constructor(data) {
    Object.assign(this, data);
  }
}
