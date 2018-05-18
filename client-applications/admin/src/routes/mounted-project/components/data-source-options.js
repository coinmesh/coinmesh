import {bindable} from 'aurelia-templating';
import {AdminService} from 'services/admin';

export class DataSourceOptions {
  @bindable dataSource;
  @bindable selectedNetwork;
  @bindable runHttp;
  isAttached = false;

  networks = [ 'regtest', 'testnet', 'mainnet' ];

  static inject = [AdminService];
  constructor(adminService) {
    this.adminService = adminService;
  }

  selectedNetworkChanged(newValue, oldValue) {
    if (this.dataSource && this.isAttached) {
      this.dataSource.network = newValue;
      let propName = 'coinmesh.network';
      this.adminService.updatePackageJson(this.dataSource, propName, newValue);
    }
  }
  runHttpChanged(newValue, oldValue) {
    if (this.dataSource && this.isAttached) {
      this.dataSource.runHttp = newValue;
      let propName = 'coinmesh.runHttp';
      this.adminService.updatePackageJson(this.dataSource, propName, newValue);
    }
  }
  attached() {
    this.isAttached = true;
  }
  detached() {
    this.isAttached = false;
  }
}
