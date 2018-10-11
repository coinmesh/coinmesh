import {bindable} from 'aurelia-templating';
import {Index} from '../index';
import {SkeletonProjectsService} from 'services/skeleton-projects';

export class StepTwo {
  name = '';
  description = '';
  @bindable wizardState;
  @bindable skeletonProjects = [];

  static inject = [Index, SkeletonProjectsService];
  constructor(index, skeletonProjectsService) {
    this.routeIndex = index;
    this.skeletonProjectsService = skeletonProjectsService;
  }

  activate(wizardState) {
    this.routeIndex.showNext = false;
    this.wizardState = wizardState;
    return this.skeletonProjectsService.getSkeletonProjects().then(result => {
      this.skeletonProjects = result;
    });
  }
  selectProject(skeletonProject) {
    this.wizardState.skeletonProject = skeletonProject;
  }
  reviewDetails() {
    this.routeIndex.showNext = true;
    this.routeIndex.next();
    this.wizardState.skeletonProject.name = this.name;
    this.wizardState.skeletonProject.description = this.description;
  }
}
