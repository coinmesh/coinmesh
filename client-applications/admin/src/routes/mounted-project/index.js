import {ProjectStore} from 'services/project-store';
import {ProjectsService} from 'services/projects';
import {Router} from 'aurelia-router';

export class Index {
  router;
  projectStore;
  projectsService;

  static inject = [ProjectStore, ProjectsService];
  constructor(projectStore, projectsService) {
    this.projectStore = projectStore;
    this.projectsService = projectsService;
  }

  configureRouter(config, router) {
    config.map([
      { route: ['', 'project-details'], name: 'project-details', moduleId: './routes/project-details', title: 'Project Details' },
      { route: '/data-sources/:organization/:name', name: 'data-source-details', moduleId: './routes/data-source-details', title: 'Data Source Details' },
      { route: '/adapters/:organization/:name', name: 'adapter-details', moduleId: './routes/adapter-details', title: 'Adapter Details' },
      { route: '/client-applications/:organization/:name', name: 'client-application-details', moduleId: './routes/client-application-details', title: 'Client Application Details' },
      { route: '/logic-services/:organization/:name', name: 'logic-service-details', moduleId: './routes/logic-service-details', title: 'Logic Service Details' },
    ]);

    this.router = router;
  }
  activate() {
    if (!this.projectStore.currentProject) {
      let project = this.projectStore.getProjectFromLocalStorage();

      if (!project) {
        return this.router.parent.navigateToRoute('home');
      }
      this.projectStore.setCurrentProject(project);

      return this.projectsService.loadProjectAndAllSubProjects(project.path).then(mainProject => {
        this.projectStore.setCurrentProject(mainProject);
      });
    }
  }
}
