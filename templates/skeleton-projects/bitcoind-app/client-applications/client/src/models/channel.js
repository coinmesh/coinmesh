export class Channel {
  capacity = 0;
  commit_transaction_fee = 0;
  commit_transaction_weight = 0;
  id = '';
  is_active = false;
  is_closing = false;
  is_opening = false;
  local_balance = 0;
  partner_public_key = '';
  received = 0;
  remote_balance = 0;
  sent = 0;
  transaction_id = '';
  transaction_vout = 0;
  transfers_count = 0;
  unsettled_balance = 0;
  type = 'channel';

  constructor(data) {
    Object.assign(this, data);
  }
}
