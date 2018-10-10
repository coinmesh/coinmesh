export class App {
  configureRouter(config, router) {
    config.title = 'Litecoin Wallet Components';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'routes/home/index', nav: true, title: 'Home' },
      { route: 'send', name: 'send', moduleId: 'routes/pay', nav: true, title: 'Send' },
      { route: 'receive', name: 'receive', moduleId: 'routes/receive', nav: true, title: 'Receive' },
      { route: 'transactions', name: 'transactions', moduleId: 'routes/list', nav: true, title: 'Transactions' }
    ]);

    this.router = router;
  }
}
