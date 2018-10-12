import {bindable} from 'aurelia-templating';
import {ProjectStore} from 'services/project-store';
import {Router} from 'aurelia-router';

export class ProjectInfo {
  @bindable project;
  @bindable processUuid;
  @bindable commandRunning = false;

  static inject = [ProjectStore, Router];
  constructor(projectStore, router) {
    this.projectStore = projectStore;
    this.router = router;
  }
}
