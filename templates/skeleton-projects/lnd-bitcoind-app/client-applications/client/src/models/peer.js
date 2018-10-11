export class Peer {
  public_key = '';
  bytes_sent = 0;
  is_inbound = false;
  network_address = '';
  ping_time = 0;
  tokens_received = 0;
  tokens_sent = 0;
  type = 'peer';

  constructor(data) {
    Object.assign(this, data);
  }
}
