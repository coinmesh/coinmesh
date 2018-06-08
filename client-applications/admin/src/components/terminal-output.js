import {bindable} from 'aurelia-templating';
import {WebSocketService} from 'services/web-socket-service';
import {Terminal} from 'xterm';
import {Router} from 'aurelia-router';
import {AdminService} from 'services/admin';

export class TerminalOutput {
  @bindable canNpmInstall = false;
  @bindable canNpmLinkLocal = false;
  @bindable canNpmStart = false;
  @bindable canNpmTest = false;
  @bindable canDockerRun = false;
  @bindable canDockerBuild = false;

  @bindable projectRoot = '';
  @bindable processUuid;
  @bindable commandRunning = false;

  isInitialized = false;
  terminal;

  static inject = [WebSocketService, Router, AdminService];
  constructor(webSocketService, router, adminService) {
    this.webSocketService = webSocketService;
    this.router = router;
    this.adminService = adminService;
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
        return this.killProcess();
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
    return this.adminService.npmLinkLocal(path).then(uuid => {
      this.processUuid = uuid;
      this.commandRunning = true;
    });
  }
  npmStart() {
    let path = this.projectRoot;
    return this.adminService.npmStart(path).then(uuid => {
      this.processUuid = uuid;
      this.commandRunning = true;
    });
  }
  npmInstall() {
    let path = this.projectRoot;
    return this.adminService.npmInstall(path).then(uuid => {
      this.processUuid = uuid;
      this.commandRunning = true;
    });
  }
  npmTest() {
    let path = this.projectRoot;
    return this.adminService.npmTest(path).then(uuid => {
      this.processUuid = uuid;
      this.commandRunning = true;
    });
  }
  dockerRun() {
    let path = this.projectRoot;
    return this.adminService.dockerRun(path).then(uuid => {
      this.processUuid = uuid;
      this.commandRunning = true;
    });
  }
  dockerBuild() {
    let path = this.projectRoot;
    return this.adminService.dockerBuild(path).then(uuid => {
      this.processUuid = uuid;
      this.commandRunning = true;
    });
  }

  killProcess() {
    return this.adminService.killProcess(this.processUuid).then(result => {
      this.commandRunning = false;
      this.processUuid = null;
    });
  }
}
