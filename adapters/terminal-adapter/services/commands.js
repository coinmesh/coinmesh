const exec = require('child_process').exec;
const spawn = require('child_process').spawn;
const EventEmitter = require('events');

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
    const eventEmitter = new EventEmitter();

    return new Promise((resolve, reject) => {
      const child = spawn(command,
        flags,
        {
          cwd: path
        });

      child.stdout.on('data', data => {
        eventEmitter.emit('data', data);
      });

      resolve(eventEmitter);
    });
  }
}

module.exports = CommandsService;
