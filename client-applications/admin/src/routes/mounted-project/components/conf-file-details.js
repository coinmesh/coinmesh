import {bindable} from 'aurelia-templating';
import {AdminService} from 'services/admin';

export class ConfFileDetails {
  adminService;
  confFileExists = false;
  @bindable project;

  static inject = [AdminService];
  constructor(adminService) {
    this.adminService = adminService;
  }
  attached() {
    if (this.project) {
      return this.adminService.checkConfFileExists(this.project.path).then(result => {
        this.confFileExists = result;
      });
    }
  }
  createConf() {
    if (this.project) {
      return this.adminService.createConfFile(this.project.path).then(result => {
        this.confFileExists = result;
      });
    }
  }
}
