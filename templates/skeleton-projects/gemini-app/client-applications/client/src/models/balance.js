export class Balance {
  amount = '';
  available = '';
  availableForWithdrawal = '';
  currency = '';

  type = '';

  constructor(data) {
    Object.assign(this, data);
  }
}
