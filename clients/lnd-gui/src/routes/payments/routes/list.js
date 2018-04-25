import {Router} from 'aurelia-router';

export class List {
  static inject = [Router];
  constructor(router) {
    this.router = router;
  }
}
