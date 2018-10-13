const commandsService = require('@coinmesh/terminal-adapter').commandsService;
const webSocketService = require('../resources/web-socket-service');
const homedirUtils = new (require('../resources/homedir-utils'));
const dockerUtils = new (require('../resources/docker-utils'));

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
  dockerCompose(path, flags = ['up']) {
    let command = 'docker-compose';
    let allFlags = [...flags];

    path = homedirUtils.getPathFromHomeDir(path);
    path = homedirUtils.stripPackageJson(path);
    return commandsService.issueStreamedCommand(command, allFlags, path).then(child => {
      let uuid = webSocketService.subscribe(child);
      return uuid;
    });
  }
  dockerComposeDown(path, flags = []) {
    let command = 'docker-compose';
    let allFlags = ['down', ...flags];

    path = homedirUtils.getPathFromHomeDir(path);
    path = homedirUtils.stripPackageJson(path);

    return commandsService.issueStreamedCommand(command, allFlags, path).then(child => {
      let uuid = webSocketService.subscribe(child);
      return uuid;
    });
  }
  dockerComposeCheckLocked(path, network, containerName) {
    let command = `docker-compose exec -T ${containerName} lncli -n=${network} getinfo`;

    path = homedirUtils.getPathFromHomeDir(path);
    path = homedirUtils.stripPackageJson(path);

    return commandsService.issueCommand(command, path).then(() => {
      return false;
    }).catch(error => {
      const isLocked = error.message.indexOf('lncli unlock' > -1);
      if (isLocked) {
        return true;
      }
      throw error;
    });
  }
  dockerComposeStatus(path, flags = []) {
    let allFlags = ['ps', ...flags];
    let command = `docker-compose ${allFlags.join(' ')}`;

    path = homedirUtils.getPathFromHomeDir(path);
    path = homedirUtils.stripPackageJson(path);

    return commandsService.issueCommand(command, path).then(result => {
      let status = dockerUtils.getStatusFromDockerPs(result);
      return status;
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
