import {ProjectStore} from 'services/project-store';
import {AdminService} from 'services/admin';
import {bindable} from 'aurelia-templating';

export class ProjectDetails {
  projectStore;

  static inject = [ProjectStore, AdminService];
  constructor(projectStore, adminService) {
    this.projectStore = projectStore;
    this.adminService = adminService;
  }
  buildProject() {
    return this.buildNodes().then(result => {
      // TODO: Uncomment this when ready
      // return this.buildWebServer();
      return result;
    });
  }
  startProject() {
    return this.startNodes().then(result => {
      // TODO: Uncomment this when ready
      // return this.buildWebServer();
      return result;
    });
  }
  startNodes() {
    let dataSources = this.projectStore.currentProject.dataSources;
    let promises = [];

    dataSources.forEach(dataSource => {
      let path = dataSource.path;
      let packageJsonPath = `${path}/package.json`;
      let name = dataSource.name;
      let imageName = `coinmesh/${name}`;
      // TODO: Move flags to package.json
      let flags = ['-v', `${path}:/home/litecoin/.litecoin`, '--rm', '--name', name, imageName, '-printtoconsole'];

      promises.push(this.dockerRun(packageJsonPath, flags));
    });
    return Promise.all(promises);
  }
  buildNodes() {
    let dataSources = this.projectStore.currentProject.dataSources;
    let promises = [];

    dataSources.forEach(dataSource => {
      let path = dataSource.path;
      let packageJsonPath = `${path}/package.json`;
      let imageName = dataSource.name;
      let flags = ['-t', `coinmesh/${imageName}`];

      promises.push(this.dockerBuild(packageJsonPath, flags));
    });
    return Promise.all(promises);
  }
  buildWebServer() {
    let path = this.clientApplication.path;
    let packageJsonPath = `${path}/package.json`;

    this.dockerBuild(packageJsonPath);
  }
  dockerBuild(path, flags) {
    return this.adminService.dockerBuild(path, flags).then(uuid => {
      this.processUuid = uuid;
      this.commandRunning = true;
    });
  }
  dockerRun(path, flags) {
    return this.adminService.dockerRun(path, flags).then(uuid => {
      this.processUuid = uuid;
      this.commandRunning = true;
    });
  }
}
