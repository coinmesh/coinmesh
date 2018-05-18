const commandsService = require('@coinmesh/terminal-adapter').commandsService;
const webSocketService = require('../resources/web-socket-service');
const homedirUtils = new (require('../resources/homedir-utils'));

class TerminalService {
  npmLinkLocal(path) {
    let command = 'npm';
    let flags = ['run', 'link-local'];
    path = homedirUtils.getPathFromHomeDir(path);
    path = homedirUtils.stripPackageJson(path);

    return commandsService.issueStreamedCommand(command, flags, path).then(child => {
      let uuid = this.subscribe(child);
      return uuid;
    });
  }
  npmInstall(path) {
    let command = 'npm';
    let flags = ['install'];
    path = homedirUtils.getPathFromHomeDir(path);
    path = homedirUtils.stripPackageJson(path);

    return commandsService.issueStreamedCommand(command, flags, path).then(child => {
      let uuid = this.subscribe(child);
      return uuid;
    });
  }
  npmStart(path) {
    let command = 'npm';
    let flags = ['start'];
    path = homedirUtils.getPathFromHomeDir(path);
    path = homedirUtils.stripPackageJson(path);

    return commandsService.issueStreamedCommand(command, flags, path).then(child => {
      let uuid = this.subscribe(child);
      return uuid;
    });
  }
  npmTest(path) {
    let command = 'npm';
    let flags = ['test'];
    path = homedirUtils.getPathFromHomeDir(path);
    path = homedirUtils.stripPackageJson(path);

    return commandsService.issueStreamedCommand(command, flags, path).then(child => {
      let uuid = this.subscribe(child);
      return uuid;
    });
  }
  killProcess(uuid) {
    return Promise.resolve(webSocketService.killProcess(uuid));
  }
  subscribe(child) {
    child.stdout.on('data', data => {
      webSocketService.wss.clients.forEach(client => {
        client.send(data.toString());
      });
    });

    child.stderr.on('data', data => {
      webSocketService.wss.clients.forEach(client => {
        client.send(data.toString());
      });
    });

    child.on('exit', code => {
      webSocketService.wss.clients.forEach(client => {
        client.send(code);
      });;
    });

    let uuid = webSocketService.addProcess(child);
    return uuid;
  }
}

module.exports = TerminalService;
