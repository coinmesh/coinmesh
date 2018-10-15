import {bindable} from 'aurelia-templating';
import {ChannelsService} from 'services/channels';
import {Channel} from 'models/channel';

export class ChannelsList {
  @bindable channels;
  @bindable newChannel = new Channel();

  static inject = [ChannelsService];
  constructor(channelsService) {
    this.channelsService = channelsService;
  }

  attached() {
    return this.getChannelInfo();
  }

  getChannelInfo() {
    return this.channelsService.getChannels().then(result => {
      this.channels = result;
    });
  }
}
