export class ProjectStore {
  currentProject;

  setCurrentProject(project) {
    this.currentProject = project;
    this.saveProjectToLocalStorage();
  }

  saveProjectToLocalStorage() {
    if (this.currentProject) {
      let json = JSON.stringify(this.currentProject);
      localStorage.setItem('coinmesh:current-project', json);
    }
  }
  getProjectFromLocalStorage() {
    if (!this.currentProject) {
      let projectString = localStorage.getItem('coinmesh:current-project');
      if (projectString) {
        let project = JSON.parse(projectString);
        this.setCurrentProject(project);
      }
    }
  }
  unmountProject() {
    this.currentProject = null;
    this.clearLocalStorage();
  }
  clearLocalStorage() {
    localStorage.removeItem('coinmesh:current-project');
  }
}
