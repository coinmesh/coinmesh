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
  subscribe(child) {
    child.stdout.on('data', data => {
      this.wss.clients.forEach(client => {
        client.send(data.toString());
      });
    });

    child.stderr.on('data', data => {
      this.wss.clients.forEach(client => {
        client.send(data.toString());
      });
    });

    child.on('exit', code => {
      this.wss.clients.forEach(client => {
        client.send(code);
      });;
    });

    let uuid = this.addProcess(child);
    return uuid;
  }
}

module.exports = new WebSocketService();
