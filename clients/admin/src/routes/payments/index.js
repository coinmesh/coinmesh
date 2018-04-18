import {Router} from 'aurelia-router';

export class Index {
  router;

  configureRouter(config, router) {
    config.map([
      { route: ['', 'list'], name: 'list', moduleId: './routes/list', nav: false, title: 'List' },
      { route: 'pay', name: 'pay', moduleId: './routes/pay', nav: true, title: 'Pay' },
      { route: 'receive', name: 'receive', moduleId: './routes/receive', nav: true, title: 'Receive' }
    ]);

    this.router = router;
  }
}
