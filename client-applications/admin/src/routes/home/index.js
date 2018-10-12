import {ProjectStore} from 'services/project-store';
import {Router} from 'aurelia-router';

export class Index {
  lastProject;

  static inject = [ProjectStore, Router];
  constructor(projectStore, router) {
    this.projectStore = projectStore;
    this.router = router;
  }

  attached() {
    if (this.projectStore.currentProject) {
      return this.router.navigateToRoute('mounted-project');
    }
    this.lastProject = this.projectStore.getLastProjectFromLocalStorage();
    this.projectStore.statusMessage = 'Please create a new project or mount an existing one to get started';
  }
  selectProject(project) {
    this.projectStore.setCurrentProject(project);
    return this.router.navigateToRoute('mounted-project');
  }
}
