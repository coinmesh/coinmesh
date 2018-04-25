export class Invoice {
  id = '';
  description = '';
  include_address = false;
  tokens = 0;

  chain_address = '';
  confirmed_at = '';
  created_at = '';
  description_hash = '';
  expires_at = '';
  invoice = '';
  is_confirmed = false;
  is_outgoing = false;
  type = 'channel_transaction';

  constructor(data) {
    Object.assign(this, data);
  }
}
