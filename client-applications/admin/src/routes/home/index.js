import {ProjectStore} from 'services/project-store';
import {Router} from 'aurelia-router';

export class Index {
  static inject = [ProjectStore, Router];
  constructor(projectStore, router) {
    this.projectStore = projectStore;
    this.router = router;
  }

  attached() {
    console.log(this.projectStore.currentProject);
    if (this.projectStore.currentProject) {
      return this.router.navigateToRoute('mounted-project');
    }
    this.projectStore.statusMessage = 'Please create or mount a project to get started';
  }
}
