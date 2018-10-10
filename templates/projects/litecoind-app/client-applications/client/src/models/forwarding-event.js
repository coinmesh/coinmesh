export class ForwardingEvent {
  timestamp = 0;
  chan_id_in = 0;
  chan_id_out = 0;
  amt_in = 0;
  amt_out = 0;
  fee = 0;
  type = 'forwarding-event';

  constructor(data) {
    Object.assign(this, data);
  }
}
