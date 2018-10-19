import {ProjectStore} from 'services/project-store';
import {ProjectsService} from 'services/projects';

export class App {
  navIsOpen = true;

  static inject = [ProjectStore, ProjectsService];
  constructor(projectStore, projectsService) {
    this.projectStore = projectStore;
    this.projectsService = projectsService;
  }
  configureRouter(config, router) {
    config.title = 'CoinMesh';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'routes/home/index', nav: false, title: 'CoinMesh' },
      {
        route: 'project-wizard',
        name: 'project-wizard',
        moduleId: 'routes/project-wizard/index',
        nav: false,
        title: 'New Project'
      }, {
        route: 'skeleton-project-wizard',
        name: 'skeleton-project-wizard',
        moduleId: 'routes/skeleton-project-wizard/index',
        nav: true,
        title: 'New Project',
        settings: { icon: 'fa-magic' }
      }, {
        route: 'mount-project',
        name: 'mount-project',
        moduleId: 'routes/mount-project/index',
        nav: true,
        title: 'Mount Existing',
        settings: { icon: 'fa-laptop' }
      }, {
        route: 'mounted-project',
        name: 'mounted-project',
        moduleId: 'routes/mounted-project/index',
        nav: false,
        title: 'Mounted Project' }
    ]);

    this.router = router;
  }
  attached() {
    if (!this.projectStore.currentProject) {
      this.projectStore.getProjectFromLocalStorage();
    }

    if (this.projectStore.currentProject) {
      return this.projectsService.loadProjectAndAllSubProjects(this.projectStore.currentProject.path);
    }
  }
}
