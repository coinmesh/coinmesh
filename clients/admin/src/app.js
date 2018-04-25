export class App {
  configureRouter(config, router) {
    config.title = 'BF Platform';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'routes/home/index', nav: true, title: 'BF Platform' },
      { route: 'service-status', name: 'service-status', moduleId: 'routes/service-status/index', nav: true, title: 'Services' },
      { route: 'node-status', name: 'node-status', moduleId: 'routes/node-status/index', nav: true, title: 'Nodes' },
      { route: 'project-wizard', name: 'project-wizard', moduleId: 'routes/project-wizard/index', nav: true, title: 'New Project' }
    ]);

    this.router = router;
  }
}
