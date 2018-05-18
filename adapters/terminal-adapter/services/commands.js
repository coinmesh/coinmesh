const exec = require('child_process').exec;
const spawn = require('child_process').spawn;

class CommandsService {
  issueCommand(command, path) {
    return new Promise((resolve, reject) => {
      exec(command, {
        cwd: path
      }, (error, stdout, stderr) => {
        if (error) {
          return error;
        }
        resolve(stdout);
      });
    });
  }
  issueStreamedCommand(command, flags = [], path) {
    return new Promise((resolve, reject) => {
      const child = spawn(command,
        flags,
        {
          cwd: path
        });

      resolve(child);
    });
  }
}

module.exports = CommandsService;
