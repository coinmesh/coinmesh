import {bindable} from 'aurelia-templating';
import {WebSocketService} from 'services/web-socket-service';
import {Terminal} from 'xterm';
import {Router} from 'aurelia-router';
import {AdminService} from 'services/admin';
import {NpmService} from 'services/npm';
import {DockerService} from 'services/docker';

export class TerminalOutput {
  @bindable canNpmInstall = false;
  @bindable canNpmLinkLocal = false;
  @bindable canNpmStart = false;
  @bindable canNpmTest = false;
  @bindable canDockerRun = false;
  @bindable canDockerBuild = false;
  @bindable canDockerCompose = false;
  @bindable canDockerComposeDown = false;

  @bindable projectRoot = '';
  @bindable processUuid;
  @bindable commandRunning = false;

  isInitialized = false;
  terminal;

  static inject = [WebSocketService, Router, AdminService, NpmService, DockerService];
  constructor(webSocketService, router, adminService, npmService, dockerService) {
    this.webSocketService = webSocketService;
    this.router = router;
    this.adminService = adminService;
    this.npmService = npmService;
    this.dockerService = dockerService;
  }

  attached() {
    if (this.isInitialized) {
      return;
    }
    this.term = new Terminal({
      cursorBlink: true
    });
    this.term.open(this.terminal);

    this.webSocketService.connect();
    this.webSocketService.subscribe(data => {
      if (data && (data.toString() === '0' || data.toString() === '1')) {
        if (!!this.processUuid) {
          this.term.writeln('(Process ended)');
          return this.killProcess();
        }
        return;
      }
      this.consoleOutput += data;
      this.term.writeln(data);
    });
    this.isInitialized = true;
  }
  detached() {
    this.webSocketService.disconnect();
  }
  npmLinkLocal() {
    let path = this.projectRoot;
    return this.npmService.npmLinkLocal(path).then(uuid => {
      this.processUuid = uuid;
      this.commandRunning = true;
    });
  }
  npmStart() {
    let path = this.projectRoot;
    return this.npmService.npmStart(path).then(uuid => {
      this.processUuid = uuid;
      this.commandRunning = true;
    });
  }
  npmInstall() {
    let path = this.projectRoot;
    return this.npmService.npmInstall(path).then(uuid => {
      this.processUuid = uuid;
      this.commandRunning = true;
    });
  }
  npmTest() {
    let path = this.projectRoot;
    return this.npmService.npmTest(path).then(uuid => {
      this.processUuid = uuid;
      this.commandRunning = true;
    });
  }
  dockerRun() {
    let path = this.projectRoot;
    return dockerServiceRun(path).then(uuid => {
      this.processUuid = uuid;
      this.commandRunning = true;
    });
  }
  dockerBuild() {
    let path = this.projectRoot;
    return this.dockerService.dockerBuild(path).then(uuid => {
      this.processUuid = uuid;
      this.commandRunning = true;
    });
  }
  dockerCompose() {
    let path = this.projectRoot;
    return this.dockerService.dockerCompose(path).then(uuid => {
      this.processUuid = uuid;
      this.commandRunning = true;
    });
  }
  dockerComposeDown() {
    let path = this.projectRoot;
    return this.dockerService.dockerComposeDown(path);
  }
  killProcess() {
    return this.adminService.killProcess(this.processUuid).then(result => {
      this.commandRunning = false;
      this.processUuid = null;
    });
  }
}
