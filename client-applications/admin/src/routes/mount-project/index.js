import {bindable} from 'aurelia-templating';
import {PathUtils} from 'resources/path-utils';
import {Router} from 'aurelia-router';
import {AdminService} from 'services/admin';
import {ProjectStore} from 'services/project-store';

export class Index {
  @bindable currentPath = '~/';
  @bindable selectedFilename = '';

  static inject = [Router, AdminService, ProjectStore];
  constructor(router, adminService, projectStore) {
    this.router = router;
    this.adminService = adminService;
    this.projectStore = projectStore;
  }

  selectFile() {
    let projectJsonPath = PathUtils.getPathToChildDir(this.currentPath, this.selectedFilename);

    return this.adminService.loadProject(projectJsonPath).then(result => {
      this.projectStore.setCurrentProject(result);
      return this.router.navigateToRoute('mounted-project');
    });
  }
}
