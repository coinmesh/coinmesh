export class DockerContainer {
  id;
  name = '';
  path = '';
  type = 'container';

  status = 'unknown';

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
