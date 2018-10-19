export class ProjectAction {
  id;
  name = '';
  serviceName = '';

  type = 'project-action';

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
