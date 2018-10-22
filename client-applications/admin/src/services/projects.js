import {HttpWrapper} from './http-wrapper';
import {Project} from '../models/project';
import {ProjectStore} from 'services/project-store';
import {ToastMessagesService} from 'services/toast-messages';
import {PathUtils} from 'resources/path-utils';
import {ProjectTypes} from 'resources/project-types';
import {LogStatusService} from 'services/log-status';

export class ProjectsService {
  static inject = [HttpWrapper, ProjectStore, ToastMessagesService, LogStatusService];
  constructor(http, projectStore, toastMessagesService, logStatusService) {
    this.http = http;
    this.projectStore = projectStore;
    this.toastMessagesService = toastMessagesService;
    this.logStatusService = logStatusService;
  }

  createNewProject(project) {
    let url = `http://localhost:3002/v0/project`;
    return this.http.post(url, project);
  }
  cloneProject(project) {
    let url = `http://localhost:3002/v0/project/clone`;
    return this.http.post(url, project);
  }
  loadProjectAndAllSubProjects(path) {
    return this.loadProject(path).then(mainProject => {
      mainProject.path = path;

      this.projectStore.setCurrentProject(mainProject);

      let subProjects = mainProject.getSubProjects();

      let subscriberCount = 0;
      let promises = subProjects.map(oldProject => {
        let pluralPropertyName = `${ProjectTypes[oldProject.type]}s`;

        return this.loadProjectByNameAndType(oldProject.name, pluralPropertyName).then(subProject => {
          mainProject.updateTypeToFullProject(subProject, oldProject, pluralPropertyName);

          subProject.events.filter(event => {
            return (event.regexes && event.regexes.length > 0 && !!event.regexes[0]);
          }).forEach(event => {
            let key = this.logStatusService.subscribeToMatchingRegex(
              subProject.name,
              event.regexes,
              subProject.setStatus.bind(subProject),
              event.status
            );
            subProject.subscriptionKeys.push(key);
            subscriberCount += 1;
          });

        });
      });

      return Promise.all(promises).then(() => {
        this.toastMessagesService.showMessage(`Subscribed to ${subscriberCount} events.`)
        return mainProject;
      });
    });
  }
  unloadProject(project) {
    project.subscriptionKeys.forEach(key => {
      this.logStatusService.unsubscribe(key);
    });
  }
  loadProject(path, className = Project) {
    let url = `http://localhost:3002/v0/project/load`;
    let rootPath = this.projectStore.currentProject ? this.projectStore.currentProject.path : '';

    path = PathUtils.fixRelativePath(path, rootPath);

    let body = { path: path };

    return this.http.post(url, body).then(result => {
      let project = new className(result.content);
      return project;
    });
  }
  loadProjectByNameAndType(name, type) {
    let loadedProject;
    if (name && this.projectStore.currentProject) {
      let match = this.projectStore.currentProject[type].find(project => {
        return project.name.indexOf(name) > -1;
      });
      let path = match.path;

      let packageJsonPath = `${path}/package.json`;
      return this.loadProject(packageJsonPath).then(result => {
        loadedProject = result;
        loadedProject.path = path;
        return loadedProject;
      });
    }
  }
  updatePackageJson(project, propName, newValue) {
    let url = `http://localhost:3002/v0/project/`;
    let path = PathUtils.fixRelativePath(project.path, this.projectStore.currentProject.path);

    let body = {
      projectPath: path,
      propertyPath: propName,
      value: newValue
    }
    return this.http.patch(url, body);
  }
}
