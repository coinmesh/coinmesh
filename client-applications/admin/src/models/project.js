import {Adapter} from './adapter';
import {ClientApplication} from './client-application';
import {LogicService} from './logic-service';
import {DataSource} from './data-source';
import {DockerService} from './docker-service';
import {ProjectEvent} from './project-event';

export class Project {
  id;
  name = '';
  description = '';
  path = '';
  confFile;

  dataSources = [];
  adapters = [];
  logicServices = [];
  clientApplications = [];

  events = [];
  actions = [];
  subscriptionKeys = [];
  dockerServices = [];

  status = 'unknown';
  type = 'project';

  constructor(data = {}) {
    if (data.coinmesh) {
      this.convertPackageJsonProps(data);
      this.setupDockerServices(data);
      this.setupEventsAndActions(data);

      delete data.coinmesh;
    }

    Object.assign(this, data);
  }
  setupEventsAndActions(data) {
    if (!data) {
      return;
    }
    let events = data.coinmesh.events;
    let actions = data.coinmesh.actions;
    if (!!events && this.events.length === 0) {
      this.events = Object.keys(events).map(key => {
        return new ProjectEvent({
          status: key,
          regexes: events[key]
        });
      });
    }
    if (!!actions && (this.actions.length > 0 || actions.length > 0)) {
      this.actions = actions.map(action => {
        return new ProjectAction(action);
      });
    }
  }
  setupDockerServices(data) {
    if (this.dockerServices.length > 0 || !data) {
      return;
    }
    let dockerServices = data.coinmesh.dockerServices;
    if (!dockerServices || dockerServices.length === 0) {
      return;
    }
    this.dockerServices = dockerServices.map(service => {
      return new DockerService(service);
    });
  }
  convertPackageJsonProps(data) {
    let props = data.coinmesh;

    if (props.adapters) {
      data.adapters = Object.keys(props.adapters).map(key => {
        let value = props.adapters[key];
        return new Adapter({ name: key, path: value });
      });
    }

    if (props.logicServices) {
      data.logicServices = Object.keys(props.logicServices).map(key => {
        let value = props.logicServices[key];
        return new LogicService({ name: key, path: value });
      });
    }

    if (props.dataSources) {
      data.dataSources = Object.keys(props.dataSources).map(key => {
        let value = props.dataSources[key];
        return new DataSource({ name: key, path: value });
      });
    }

    if (props.clientApplications) {
      data.clientApplications = Object.keys(props.clientApplications).map(key => {
        let value = props.clientApplications[key];
        return new ClientApplication({ name: key, path: value });
      });
    }
  }
  updateTypeToFullProject(subProject, oldProject, pluralPropertyName) {
    let typeArray = this[pluralPropertyName];
    let match = typeArray.find(project => {
      return project.name === oldProject.name;
    });
    let indexToRemove = typeArray.indexOf(match);

    typeArray.splice(indexToRemove, 1);
    typeArray.push(subProject);
  }
  setStatus(newStatus) {
    this.status = newStatus;
  }
  setStatusAllSubProjects(status) {
    let subProjects = this.getSubProjects();
    subProjects.forEach(project => {
      project.setStatus(status);
    });
  }
  getSubProjects() {
    return [
      ...this.dataSources,
      ...this.adapters,
      ...this.logicServices,
      ...this.clientApplications
    ];
  }
}
