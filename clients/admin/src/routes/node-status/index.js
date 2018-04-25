import {Router} from 'aurelia-router';

export class Index {
  router;

  configureRouter(config, router) {
    config.map([
      { route: ['', 'list'], name: 'list', moduleId: './routes/list', nav: true, title: 'List' },
      { route: ':id', name: 'details', moduleId: './routes/details', title: 'Details' }
    ]);

    this.router = router;
  }
}
