import {bindable} from 'aurelia-templating';
import {Project} from 'models/project';
import {Index} from '../index';
import {ProjectStore} from 'services/project-store';

export class StepThree {
  projectStore;
  @bindable wizardState;

  static inject = [Index, ProjectStore];
  constructor(index, projectStore) {
    this.routeIndex = index;
    this.projectStore = projectStore;
  }

  activate(wizardState) {
    this.wizardState = wizardState;
    this.routeIndex.showCreateProject = true;
    this.projectStore.statusMessage = 'Review project details...';

    if (!!this.wizardState.skeletonProject && !!this.wizardState.name) {
      const name = this.wizardState.name.split(' ').join('_');
      this.wizardState.skeletonProject.name = name;
      this.wizardState.skeletonProject.description = this.wizardState.description;
    }
  }
  detached() {
    this.routeIndex.showCreateProject = false;
  }
}
