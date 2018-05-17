import {bindable} from 'aurelia-templating';
import {ChannelsService} from 'services/channels';

export class NewChannel {
  @bindable value;

  static inject = [ChannelsService];
  constructor(channelsService) {
    this.channelsService = channelsService;
  }

  connectChannel() {
    let channel = this.newChannel;
    return this.channelsService.connectChannel(channel)
  }
}
