import {bindable} from 'aurelia-templating';
import {BalancesService} from 'services/balances';

export class Index {
  @bindable balances = [];
  activeTab = '';

  static inject = [BalancesService];
  constructor(balancesService) {
    this.balancesService = balancesService;
  }

  setActiveTab(tabName) {
    if (this.activeTab === tabName) {
      this.activeTab = '';
    } else {
      this.activeTab = tabName;
    }
  }
  attached() {
    return this.balancesService.getBalance().then(result => {
      this.balances = result;
    })
  }
}
