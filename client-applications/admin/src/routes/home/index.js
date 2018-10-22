import {ProjectStore} from 'services/project-store';
import {ProjectsService} from 'services/projects';
import {Router} from 'aurelia-router';

export class Index {
  lastProject;

  static inject = [ProjectStore, Router, ProjectsService];
  constructor(projectStore, router, projectsService) {
    this.projectStore = projectStore;
    this.router = router;
    this.projectsService = projectsService;
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
    console.log('loading everything')
    return this.projectsService.loadProjectAndAllSubProjects(project.path).then(mainProject => {
      console.log('setting current project')
      this.projectStore.setCurrentProject(mainProject);
      return this.router.navigateToRoute('mounted-project');
    });
  }
}
