import {bindable} from 'aurelia-templating';
import {ProjectStore} from 'services/project-store';
import {EventAggregator} from 'aurelia-event-aggregator';
import {ProjectsService} from 'services/projects';

export class NavPanel {
  @bindable router;
  @bindable navMessage = 'Load Project...';
  @bindable isOpen = true;

  @bindable clientsOpen = true;
  @bindable logicServicesOpen = true;
  @bindable adaptersOpen = true;
  @bindable dataSourcesOpen = true;

  static inject = [ProjectStore, EventAggregator, ProjectsService];
  constructor(projectStore, ea, projectsService) {
    this.projectStore = projectStore;
    this.ea = ea;
    this.projectsService = projectsService;
    this.ea.subscribe('router:navigation:processing', event => {
      this.projectStore.statusMessage = '';
    });
  }

  toggle(propName) {
    this[propName] = !this[propName];
  }
  unmount() {
    this.unloadAllSubProjects();
    this.projectStore.unmountProject();
    this.router.navigateToRoute('home');
  }
  unloadAllSubProjects() {
    this.projectsService.unloadProject(this.projectStore.currentProject);
    this.projectStore.currentProject.getSubProjects().forEach(subProject => {
      this.projectsService.unloadProject(subProject);
    });
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
