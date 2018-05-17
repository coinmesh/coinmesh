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

    data.adapters = Object.keys(props.adapters).map(key => {
      let value = props.adapters[key];
      return new Adapter({ name: value.name, path: value.path });
    });

    data.logicServices = Object.keys(props.logicTiers).map(key => {
      let value = props.logicTiers[key];
      return new LogicService({ name: value.name, path: value.path });
    });

    data.dataSources = Object.keys(props.nodes).map(key => {
      let value = props.nodes[key];
      return new DataSource({ name: value.name, path: value.path });
    });

    data.clientApplications = Object.keys(props.clients).map(key => {
      let value = props.clients[key];
      return new ClientApplication({ name: value.name, path: value.path });
    });

    delete data.coinmesh;
  }
}
