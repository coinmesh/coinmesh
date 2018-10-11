import {Adapter} from './adapter';
import {ClientApplication} from './client-application';
import {DataSource} from './data-source';
import {LogicService} from './logic-service';

export class SkeletonProject {
  id;
  name = '';
  description = '';
  path = '';
  targetPath = '';
  dataSources = [];
  adapters = [];
  logicServices = [];
  clientApplications = [];

  type = 'skeleton-project';

  constructor(data = {}) {
    this.convertRegistryProps(data);

    Object.assign(this, data);
  }
  convertRegistryProps(data) {
    if (data.adapters) {
      data.adapters = Object.keys(data.adapters).map(key => {
        let value = data.adapters[key];
        return new Adapter({ name: key, path: value });
      });
    }

    if (data.logicServices) {
      data.logicServices = Object.keys(data.logicServices).map(key => {
        let value = data.logicServices[key];
        return new LogicService({ name: key, path: value });
      });
    }

    if (data.dataSources) {
      data.dataSources = Object.keys(data.dataSources).map(key => {
        let value = data.dataSources[key];
        return new DataSource({ name: key, path: value });
      });
    }

    if (data.clientApplications) {
      data.clientApplications = Object.keys(data.clientApplications).map(key => {
        let value = data.clientApplications[key];
        return new ClientApplication({ name: key, path: value });
      });
    }

    delete data.coinmesh;
  }
}
