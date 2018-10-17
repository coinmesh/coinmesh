import {Adapter} from './adapter';
import {ClientApplication} from './client-application';
import {LogicService} from './logic-service';
import {DataSource} from './data-source';
import {DockerContainer} from './docker-container';

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

  dockerContainers = [];

  type = 'project';

  constructor(data = {}) {
    if (data.coinmesh) {
      this.convertPackageJsonProps(data);
    }

    Object.assign(this, data);
  }
  setupContainers() {
    if (this.dockerContainers.length > 0) {
      return;
    }
    let nodeContainers = this.dataSources.map(dataSource => {
      return new DockerContainer({ name: dataSource.name });
    });
    this.dockerContainers.push(...nodeContainers);
    this.dockerContainers.push(new DockerContainer({ name: 'app' }));
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

    delete data.coinmesh;
  }
}
