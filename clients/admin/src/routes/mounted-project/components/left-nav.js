import {bindable} from 'aurelia-templating';

export class LeftNav {
  @bindable router;
  @bindable projectStore;
  @bindable clientsOpen = true;
  @bindable logicServicesOpen = true;
  @bindable adaptersOpen = true;
  @bindable dataSourcesOpen = true;

  toggle(propName) {
    this[propName] = !this[propName];
  }
  attached() {
    console.log(this.projectStore.currentProject)
  }
}
