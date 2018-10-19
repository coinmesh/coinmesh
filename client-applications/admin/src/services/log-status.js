import {WebSocketService} from 'services/web-socket-service';

export class LogStatusService {
  logOutput = [];
  tests = [];

  static inject = [WebSocketService];
  constructor(webSocketService) {
    this.webSocketService = webSocketService;
    this.connectToLogOutput();
  }

  subscribeToMatchingRegex(name, regexes, callback, status) {
    let test = new LogTest(name, regexes, callback, status);
    this.tests.push(test);
    return test.key;
  }
  unsubscribe(key) {
    let match = this.tests.find(test => test.key === key);
    let index = this.tests.indexOf(match);
    this.tests.splice(index, 1);
  }
  connectToLogOutput() {
    this.webSocketService.connect();
    this.webSocketService.subscribe(data => {
      let logEntries = this.breakUpLogEntries(data);
      logEntries.forEach(entry => {
        let logEntry = new LogEntry(entry);

        this.checkLogEntry(logEntry);
        this.logOutput.push(logEntry);
      });
    });
  }
  breakUpLogEntries(data) {
    return data.split('\n');
  }
  checkLogEntry(logEntry) {
    this.tests.forEach(test => {
      test.regexes.forEach(regexString => {
        let value = regexString.match(/\/(.*)\/(.*)/);
        let isMatch = new RegExp(value[1], value[2]).test(logEntry.rawText);
        if (isMatch) {
          return test.callback(test.status);
        }
      });
    });
  }
}

class LogEntry {
  scope = '';
  value = '';
  rawText = '';

  constructor(data) {
    if (data.indexOf('|') > -1) {
      this.scope = data.split('|')[0];
      this.value = data.split('|')[1];
    }
    this.rawText = data;
  }
}

class LogTest {
  key = '';
  name = '';
  regexes = '';
  callback = () => { throw new Error('Callback must be overridden'); }
  status = '';

  constructor(name, regexes, callback, status) {
    this.key = `${name}|${regexes.toString()}`;
    Object.assign(this, {name, regexes, callback, status});
  }
}
