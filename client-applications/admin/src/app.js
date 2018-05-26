export class App {
  configureRouter(config, router) {
    config.title = 'CoinMesh';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'routes/home/index', nav: false, title: 'CoinMesh' },
      { route: 'project-wizard', name: 'project-wizard', moduleId: 'routes/project-wizard/index', nav: true, title: 'New Project' },
      { route: 'mount-project', name: 'mount-project', moduleId: 'routes/mount-project/index', nav: true, title: 'Mount / Open an Existing Project' },
      { route: 'mounted-project', name: 'mounted-project', moduleId: 'routes/mounted-project/index', nav: false, title: '' }
    ]);

    this.router = router;
  }
}
