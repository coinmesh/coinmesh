export class App {
  configureRouter(config, router) {
    config.title = 'Home';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'routes/home/index', nav: false, title: 'Home' }
    ]);

    this.router = router;
  }
}
