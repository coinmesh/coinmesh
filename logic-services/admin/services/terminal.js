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
      let uuid = webSocketService.subscribe(child);
      return uuid;
    });
  }
  npmInstall(path) {
    let command = 'npm';
    let flags = ['install'];
    path = homedirUtils.getPathFromHomeDir(path);
    path = homedirUtils.stripPackageJson(path);

    return commandsService.issueStreamedCommand(command, flags, path).then(child => {
      console.log('-')
      let uuid = webSocketService.subscribe(child);
      return uuid;
    });
  }
  npmStart(path) {
    let command = 'npm';
    let flags = ['start'];
    path = homedirUtils.getPathFromHomeDir(path);
    path = homedirUtils.stripPackageJson(path);

    return commandsService.issueStreamedCommand(command, flags, path).then(child => {
      let uuid = webSocketService.subscribe(child);
      return uuid;
    });
  }
  npmTest(path) {
    let command = 'npm';
    let flags = ['test'];
    path = homedirUtils.getPathFromHomeDir(path);
    path = homedirUtils.stripPackageJson(path);

    return commandsService.issueStreamedCommand(command, flags, path).then(child => {
      let uuid = webSocketService.subscribe(child);
      return uuid;
    });
  }
  killProcess(uuid) {
    return Promise.resolve(webSocketService.killProcess(uuid));
  }
}

module.exports = TerminalService;
