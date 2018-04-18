import {Router} from 'aurelia-router';

export class Index {
  router;

  configureRouter(config, router) {
    config.map([
      { route: ['', 'list'], name: 'list', moduleId: './routes/list', nav: true, title: 'List' },
      { route: 'create', name: 'create', moduleId: './routes/create', nav: false, title: 'Create' }
    ]);

    this.router = router;
  }
}
