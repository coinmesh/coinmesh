import {ProjectStore} from 'services/project-store';
import {Router} from 'aurelia-router';
import {bindable} from 'aurelia-templating';
import {WebSocketService} from 'services/web-socket-service';
import {AdminService} from 'services/admin';
import { Terminal } from 'xterm';

export class ProjectDetails {
  @bindable command = '';
  @bindable consoleOutput = '';
  @bindable commandRunning = false;
  @bindable uuid;

  static inject = [ProjectStore, Router, AdminService, WebSocketService];
  constructor(projectStore, router, adminService, webSocketService) {
    this.projectStore = projectStore;
    this.router = router;
    this.adminService = adminService;
    this.webSocketService = webSocketService;
    this.webSocketService.connect();
    this.webSocketService.subscribe(data => {
      this.consoleOutput += data;
      this.term.writeln(data);
    });
  }
  unmount() {
    this.projectStore.unmountProject();
    this.router.parent.navigateToRoute('home');
  }
  npmLinkLocal() {
    let path = this.projectStore.currentProject.path;
    return this.adminService.npmLinkLocal(path).then(uuid => {
      this.processUuid = uuid;
      this.commandRunning = true;
    });
  }
  npmStart() {
    let path = this.projectStore.currentProject.path;
    return this.adminService.npmStart(path).then(uuid => {
      this.processUuid = uuid;
      this.commandRunning = true;
    });
  }
  npmInstall() {
    let path = this.projectStore.currentProject.path;
    return this.adminService.npmInstall(path).then(uuid => {
      this.processUuid = uuid;
      this.commandRunning = true;
    });
  }
  npmTest() {
    let path = this.projectStore.currentProject.path;
    return this.adminService.npmTest(path).then(uuid => {
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
  deactivate() {
    this.webSocketService.disconnect();
  }
  attached() {
    this.term = new Terminal({
      cursorBlink: true
    });
    this.term.open(this.terminal);
  }
}
