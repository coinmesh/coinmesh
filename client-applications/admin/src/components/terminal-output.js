import {WebSocketService} from 'services/web-socket-service';
import { Terminal } from 'xterm';

export class TerminalOutput {
  terminal;

  static inject = [WebSocketService];
  constructor(webSocketService) {
    this.webSocketService = webSocketService;
    this.webSocketService.connect();
    this.webSocketService.subscribe(data => {
      this.consoleOutput += data;
      this.term.writeln(data);
    });
  }

  attached() {
    this.term = new Terminal({
      cursorBlink: true
    });
    this.term.open(this.terminal);
  }
  detached() {
    this.webSocketService.disconnect();
  }
}
