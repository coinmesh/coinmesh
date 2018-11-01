export class App {
  configureRouter(config, router) {
    config.title = 'Gemini Trading App';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'routes/home/index', nav: true, title: 'Home' }
    ]);

    this.router = router;
  }
}
