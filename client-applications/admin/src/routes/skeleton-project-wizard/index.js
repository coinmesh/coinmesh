import {SkeletonProject} from 'models/skeleton-project';
import {ProjectsService} from 'services/projects';
import {ProjectStore} from 'services/project-store';
import {Router} from 'aurelia-router';

export class Index {
  wizardState = new WizardState();
  targetPath = '';
  currentStep;
  showNext = true;
  showCreateProject = false;
  nextDisabled = false;

  static inject = [ProjectsService, Router, ProjectStore];
  constructor(projectsService, router, projectStore) {
    this.projectsService = projectsService;
    this.router = router;
    this.projectStore = projectStore;
  }

  steps = [
    new Step({
      number: 1,
      name: 'Step One',
      viewModel: './components/step-one'
    }),
    new Step({
      number: 2,
      name: 'Step Two',
      viewModel: './components/step-two'
    }),
    new Step({
      number: 3,
      name: 'Step Three',
      viewModel: './components/step-three'
    })
  ];
  attached() {
    this.currentStep = this.steps[0];
  }
  next() {
    this.currentStep = this.steps[this.currentStep.number];
  }
  back() {
    this.currentStep = this.steps[this.currentStep.number - 2];
  }
  createProject() {
    let project = this.wizardState.skeletonProject;
    project.sourcePath = project.path;
    project.path = this.wizardState.targetPath;

    return this.projectsService.cloneProject(project).then(result => {
      this.showCreateProject = true;

      return this.projectsService.loadProjectAndAllSubProjects(project.path).then(mainProject => {
        mainProject.path = project.path;
        this.showCreateProject = false;

        this.projectStore.setCurrentProject(mainProject);
        return this.router.navigateToRoute('mounted-project');
      });
    });
  }
}

class WizardState {
  skeletonProject;
  targetPath = '';
  skeletonProjects = [];

  constructor(data) {
    Object.assign(this, data);
  }
}

class Step {
  constructor(data) {
    Object.assign(this, data);
  }
}
