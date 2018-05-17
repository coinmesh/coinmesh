import {ProjectStore} from 'services/project-store';
import {Router} from 'aurelia-router';
import {bindable} from 'aurelia-templating';

export class ProjectDetails {
  @bindable command = '';
  @bindable consoleOutput = '';

  static inject = [ProjectStore, Router];
  constructor(projectStore, router) {
    this.projectStore = projectStore;
    this.router = router;
  }
  unmount() {
    this.projectStore.unmountProject();
    this.router.parent.navigateToRoute('home');
  }
  issueCommand() {
    console.log('issuing command -', this.command);
  }
}
