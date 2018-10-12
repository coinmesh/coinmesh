import {bindable} from 'aurelia-templating';
import {SkeletonProjectsService} from 'services/skeleton-projects';
import {ProjectStore} from 'services/project-store'

export class StepTwo {
  @bindable wizardState;

  static inject = [SkeletonProjectsService, ProjectStore];
  constructor(skeletonProjectsService, projectStore) {
    this.skeletonProjectsService = skeletonProjectsService;
    this.projectStore = projectStore;
  }

  activate(wizardState) {
    this.wizardState = wizardState;
    this.projectStore.statusMessage = 'Choose a Name and Stack for your project...';

    if (this.wizardState.skeletonProjects.length > 0) {
      return;
    }
    return this.skeletonProjectsService.getSkeletonProjects().then(result => {
      this.wizardState.skeletonProjects = result;
    });
  }
  selectProject(skeletonProject) {
    this.wizardState.skeletonProject = skeletonProject;
  }
}
