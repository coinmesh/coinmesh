import {bindable} from 'aurelia-templating';
import {WalletsService} from 'services/wallets';
import {BalancesService} from 'services/balances';

export class WalletInfo {
  @bindable value;
  @bindable balance;

  static inject = [WalletsService, BalancesService];
  constructor(walletsService, balancesService) {
    this.walletsService = walletsService;
    this.balancesService = balancesService;
  }

  attached() {
    this.getBalance();
    return this.getWallets();
  }

  getBalance() {
    this.balancesService.getBalance().then(result => {
      this.balance = result;
    });
  }
  getWallets() {
    this.walletsService.getInfo().then(result => {
      this.value = result;
    });
  }
}
