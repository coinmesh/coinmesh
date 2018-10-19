import {Project} from 'models/project';
import {ProjectsService} from 'services/projects';
import {ProjectStore} from 'services/project-store';
import {Router} from 'aurelia-router';

export class Index {
  project = new Project();
  currentStep;
  showNext = true;
  showCreateProject = false;

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
    }),
    new Step({
      number: 4,
      name: 'Step Four',
      viewModel: './components/step-four'
    }),
    new Step({
      number: 5,
      name: 'Step Five',
      viewModel: './components/step-five'
    }),
    new Step({
      number: 6,
      name: 'Step Six',
      viewModel: './components/step-six'
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
    return this.projectsService.createNewProject(this.project).then(result => {
      this.showCreateProject = true;
      return this.projectsService.loadProject(this.project.path).then(result => {
        this.showCreateProject = false;
        this.projectStore.setCurrentProject(result);
        return this.router.navigateToRoute('mounted-project');
      });
    });
  }
}

class Step {
  constructor(data) {
    Object.assign(this, data);
  }
}
