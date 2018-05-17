import {ProjectStore} from 'services/project-store';
import {Router} from 'aurelia-router';

export class Index {
  router;
  projectStore;

  static inject = [ProjectStore];
  constructor(projectStore) {
    this.projectStore = projectStore;
  }

  configureRouter(config, router) {
    config.map([
      { route: ['', 'project-details'], name: 'project-details', moduleId: './routes/project-details', title: 'Project Details' },
      { route: '/data-sources/:name', name: 'data-source-details', moduleId: './routes/data-source-details', title: 'Data Source Details' },
      { route: '/adapters/:name', name: 'adapter-details', moduleId: './routes/adapter-details', title: 'Adapter Details' },
      { route: '/client-applications/:name', name: 'client-application-details', moduleId: './routes/client-application-details', title: 'Client Application Details' },
      { route: '/logic-services/:name', name: 'logic-service-details', moduleId: './routes/logic-service-details', title: 'Logic Service Details' },
    ]);

    this.router = router;
  }
  canActivate() {
    return !!this.projectStore.currentProject;
  }
}
