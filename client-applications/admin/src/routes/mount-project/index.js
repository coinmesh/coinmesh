import {bindable} from 'aurelia-templating';
import {PathUtils} from 'resources/path-utils';
import {Router} from 'aurelia-router';
import {AdminService} from 'services/admin';
import {ProjectStore} from 'services/project-store';
import {ToastMessagesService} from 'services/toast-messages';

export class Index {
  @bindable currentPath = '~/';
  @bindable selectedFilename = '';

  static inject = [Router, AdminService, ProjectStore, ToastMessagesService];
  constructor(router, adminService, projectStore, toastMessagesService) {
    this.router = router;
    this.adminService = adminService;
    this.projectStore = projectStore;
    this.toastMessagesService = toastMessagesService;
  }

  selectFile() {
    let projectJsonPath = PathUtils.getPathToChildDir(this.currentPath, this.selectedFilename);

    return this.adminService.loadProject(projectJsonPath).then(result => {
      result.path = projectJsonPath;
      this.projectStore.setCurrentProject(result);
      return this.router.navigateToRoute('mounted-project');
    }).catch(error => {
      this.toastMessagesService.showMessage(error.message, 'warning');
    });
  }
}
