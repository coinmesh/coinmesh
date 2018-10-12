class DockerUtils {
  getStatusFromDockerPs(psResult) {
    if (psResult.indexOf('Up') > -1) {
      return 'up';
    } else if (psResult.indexOf('Exit') > -1) {
      return 'exit';
    }
    return 'unknown';
  }
}

module.exports = DockerUtils;
