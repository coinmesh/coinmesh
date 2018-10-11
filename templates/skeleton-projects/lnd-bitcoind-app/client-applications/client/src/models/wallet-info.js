export class WalletInfo {
  balance = 0;
  hdmasterkeyid = '';
  immature_balance = 0;
  keypoololdest = 0;
  keypoolsize = 0;
  keypoolsize_hd_internal = 0;
  paytxfee = 0;
  txcount = 0;
  unconfirmed_balance = 0;
  walletname = '';
  walletversion = 0;

  type = 'wallet';

  constructor(data) {
    Object.assign(this, data);
  }
}
