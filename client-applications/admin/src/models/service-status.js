export class ServiceStatus {
  id = '';
  name = '';
  description = '';
  type = 'service';

  constructor(data) {
    Object.assign(this, data);
  }
}
