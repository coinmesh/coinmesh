export class NetworkInfo {
  average_channel_size = 0;
  channel_count = 0;
  maximum_channel_size = 0;
  minimum_channel_size = 0;
  node_count = 0;
  total_capacity = 0;
  type = '';

  constructor(data) {
    Object.assign(this, data);
  }
}
