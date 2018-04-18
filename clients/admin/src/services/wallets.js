import {HttpWrapper} from './http-wrapper';
import {WalletInfo} from 'models/wallet-info';

export class WalletsService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getInfo() {
    return this.http.get('/wallet_info').then(result => {
      return new WalletInfo(result);
    });
  }
}
