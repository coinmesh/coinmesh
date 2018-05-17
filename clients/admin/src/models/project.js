export class Project {
  id;
  name = '';
  description = '';
  path = '';
  type = 'project';

  dataSources = [];
  adapters = [];
  logicService = [];
  clientApplications = [];

  constructor(data) {
    Object.assign(this, data);
  }
}
