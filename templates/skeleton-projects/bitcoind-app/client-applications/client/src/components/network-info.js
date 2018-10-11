import {bindable} from 'aurelia-templating';
import {NetworkInfosService} from 'services/network-infos';

export class NetworkInfo {
  @bindable value;

  static inject = [NetworkInfosService];
  constructor(networkInfosService) {
    this.networkInfosService = networkInfosService;
  }

  attached() {
    return this.getNetworkInfo();
  }

  getNetworkInfo() {
    this.networkInfosService.getInfo().then(result => {
      this.value = result;
    });
  }
}
