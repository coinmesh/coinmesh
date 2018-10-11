export class Balance {
  chain_balance = 0;
  channel_balance = 0;
  pending_chain_balance = 0;
  pending_channel_balance = 0;
  total_balance = 0;
  type = 'balance';

  constructor(data) {
    Object.assign(this, data);
    this.total_balance = this.chain_balance + this.channel_balance;
  }
}
