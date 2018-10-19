import {bindable} from 'aurelia-templating';
import {ProjectStore} from 'services/project-store';
import {EventAggregator} from 'aurelia-event-aggregator';

export class NavPanel {
  @bindable router;
  @bindable navMessage = 'Load Project...';
  @bindable isOpen = true;

  @bindable clientsOpen = true;
  @bindable logicServicesOpen = true;
  @bindable adaptersOpen = true;
  @bindable dataSourcesOpen = true;

  static inject = [ProjectStore, EventAggregator];
  constructor(projectStore, ea) {
    this.projectStore = projectStore;
    this.ea = ea;
    this.ea.subscribe('router:navigation:processing', event => {
      this.projectStore.statusMessage = '';
    });
  }

  toggle(propName) {
    this[propName] = !this[propName];
  }
  unmount() {
    this.projectStore.unmountProject();
    this.router.navigateToRoute('home');
  }
  isOpenChanged(newValue) {
    if (!newValue) {
      this.clientsOpen = false;
      this.logicServicesOpen = false;
      this.adaptersOpen = false;
      this.dataSourcesOpen = false;
    }
  }
}
