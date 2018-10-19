import {Project} from 'models/project';

export class ProjectStore {
  currentProject;
  statusMessage = '';

  setCurrentProject(project) {
    if (!!project && !(project instanceof Project)) {
      project = new Project(project);
    }
    this.currentProject = project;
    this.saveProjectToLocalStorage();
  }

  setProjectToKey(key) {
    if (this.currentProject) {
      let json = JSON.stringify(this.currentProject);
      localStorage.setItem(key, json);
    }
  }
  saveProjectToLocalStorage() {
    this.setProjectToKey('coinmesh:current-project');
  }
  saveLastProjectToLocalStorage() {
    this.setProjectToKey('coinmesh:last-project');
  }
  getProjectFromKey(key) {
    let projectString = localStorage.getItem(key);
    if (projectString) {
      return new Project(JSON.parse(projectString));
    }
  }
  getProjectFromLocalStorage() {
    if (!this.currentProject) {
      let project = this.getProjectFromKey('coinmesh:current-project');
      this.setCurrentProject(project);
      return project;
    }
  }
  getLastProjectFromLocalStorage() {
    return this.getProjectFromKey('coinmesh:last-project');
  }
  unmountProject() {
    this.saveLastProjectToLocalStorage();
    this.currentProject = null;
    this.clearLocalStorage();
  }
  clearLocalStorage() {
    localStorage.removeItem('coinmesh:current-project');
  }
}
