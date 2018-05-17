import {ProjectStore} from 'services/project-store';
import {Router} from 'aurelia-router';

export class ProjectDetails {
  static inject = [ProjectStore, Router];
  constructor(projectStore, router) {
    this.projectStore = projectStore;
    this.router = router;
  }
  unmount() {
    this.projectStore.unmountProject();
    this.router.parent.navigateToRoute('home');
  }
}
