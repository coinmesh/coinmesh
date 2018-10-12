import {bindable, containerless} from 'aurelia-templating';
import {ProjectStore} from 'services/project-store';

@containerless
export class SubHeaderPanel {
  @bindable router;
  projectStore;

  static inject = [ProjectStore];
  constructor(projectStore) {
    this.projectStore = projectStore;
  }
}
