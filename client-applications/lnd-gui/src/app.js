export class App {
  configureRouter(config, router) {
    config.title = 'LND Node Information';
    config.map([
      { route: ['', 'info'], name: 'info', moduleId: 'routes/info/index', nav: true, title: 'LND Info' },
      { route: 'payments', name: 'payments', moduleId: 'routes/payments/index', nav: true, title: 'Payments' },
      { route: 'channels', name: 'channels', moduleId: 'routes/channels/index', nav: true, title: 'Channels' },
      { route: 'invoices', name: 'invoices', moduleId: 'routes/invoices/index', nav: true, title: 'Invoices' },
      { route: 'peers', name: 'peers', moduleId: 'routes/peers/index', nav: true, title: 'Peers' },
      { route: 'messages', name: 'messages', moduleId: 'routes/messages/index', nav: true, title: 'Messages' }
    ]);

    this.router = router;
  }
}
