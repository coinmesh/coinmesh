const WebSocketServer = require('ws').Server;
const uuidv1 = require('uuid/v1');

class WebSocketService {
  createServer(server) {
    this.processes = {};
    this.wss = new WebSocketServer({ server });
  }
  addProcess(process) {
    let uuid = uuidv1();
    this.processes[uuid] = process;
    return uuid;
  }
  killProcess(uuid) {
    let process = this.processes[uuid];
    process.kill();
  }
}

module.exports = new WebSocketService();
