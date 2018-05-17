import {Project} from 'models/project';
import {AdminService} from 'services/admin';

export class Index {
  project = new Project();
  currentStep;
  showNext = true;
  showCreateProject = false;

  static inject = [AdminService];
  constructor(adminService) {
    this.adminService = adminService;
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
    return this.adminService.createNewProject(this.project).then(result => {
      console.log(result);
    });
  }
}

class Step {
  constructor(data) {
    Object.assign(this, data);
  }
}
