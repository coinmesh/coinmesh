import {bindable} from 'aurelia-templating';
import {CryptosService} from 'services/cryptos';
import {Message} from 'models/message';

export class MessagesList {
  @bindable messages;
  @bindable newMessage = new Message();

  static inject = [CryptosService];
  constructor(cryptosService) {
    this.cryptosService = cryptosService;
  }
}
