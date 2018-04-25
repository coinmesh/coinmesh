export class WalletInfo {
  active_channels_count = 0;
  block_height = 0;
  is_testnet = false;
  peers_count = 0;
  pending_channels_count = 0;
  public_key = '';
  type = 'wallet';

  constructor(data) {
    Object.assign(this, data);
  }
}
