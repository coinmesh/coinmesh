import {ProjectStore} from 'services/project-store';
import {AdminService} from 'services/admin';
import {bindable} from 'aurelia-templating';

export class ProjectDetails {
  projectStore;

  static inject = [ProjectStore, AdminService];
  constructor(projectStore, adminService) {
    this.projectStore = projectStore;
    this.adminService = adminService;
  }
}
