import {ProjectStore} from 'services/project-store';
import {bindable} from 'aurelia-templating';

export class ProjectDetails {
  projectStore;

  static inject = [ProjectStore];
  constructor(projectStore) {
    this.projectStore = projectStore;
  }
}
