const commandsService = require('@coinmesh/terminal-adapter').commandsService;
const webSocketService = require('../resources/web-socket-service');
const homedirUtils = new (require('../resources/homedir-utils'));

class DockerService {
  dockerRun(path, flags = []) {
    let command = 'docker';
    let allFlags = ['run', ...flags];

    path = homedirUtils.getPathFromHomeDir(path);
    path = homedirUtils.stripPackageJson(path);

    return commandsService.issueStreamedCommand(command, allFlags, path).then(child => {
      let uuid = webSocketService.subscribe(child);
      return uuid;
    });
  }
  dockerCompose(path, flags = []) {
    let command = 'docker-compose';
    let allFlags = ['up', ...flags];

    path = homedirUtils.getPathFromHomeDir(path);
    path = homedirUtils.stripPackageJson(path);

    return commandsService.issueStreamedCommand(command, allFlags, path).then(child => {
      let uuid = webSocketService.subscribe(child);
      return uuid;
    });
  }
  dockerBuild(path, addlFlags = []) {
    let command = 'docker';
    let flags = ['build', '.'];
    if (addlFlags && Array.isArray(addlFlags)) {
      flags.push(...addlFlags)
    }

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

module.exports = DockerService;
