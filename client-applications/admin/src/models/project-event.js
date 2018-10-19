export class ProjectEvent {
  id;
  status = '';
  regexes = '';

  type = 'project-event';

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
