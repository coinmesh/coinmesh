import {Adapter} from './adapter';
import {ClientApplication} from './client-application';
import {LogicService} from './logic-service';
import {DataSource} from './data-source';

export class Project {
  id;
  name = '';
  description = '';
  path = '';
  type = 'project';

  dataSources = [];
  adapters = [];
  logicServices = [];
  clientApplications = [];

  constructor(data = {}) {
    if (data.coinmesh) {
      this.convertPackageJsonProps(data);
    }

    Object.assign(this, data);
  }
  convertPackageJsonProps(data) {
    let props = data.coinmesh;

    if (data.adapters) {
      data.adapters = Object.keys(props.adapters).map(key => {
        let value = props.adapters[key];
        return new Adapter({ name: key, path: value });
      });
    }

    if (data.logicServices) {
      data.logicServices = Object.keys(props.logicServices).map(key => {
        let value = props.logicServices[key];
        return new LogicService({ name: key, path: value });
      });
    }

    if (data.dataSources) {
      data.dataSources = Object.keys(props.dataSources).map(key => {
        let value = props.dataSources[key];
        return new DataSource({ name: key, path: value });
      });
    }

    if (data.clientApplications) {
      data.clientApplications = Object.keys(props.clientApplications).map(key => {
        let value = props.clientApplications[key];
        return new ClientApplication({ name: key, path: value });
      });
    }

    delete data.coinmesh;
  }
}
