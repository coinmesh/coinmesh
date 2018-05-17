import {bindable} from 'aurelia-templating';
import {NodeStatusService} from '../services/node-status';
import {NodeStatus} from '../models/node-status';

export class NodeStatusList {
  @bindable nodeStatuses;

  static inject = [NodeStatusService];
  constructor(nodeStatusService) {
    this.nodeStatusService = nodeStatusService;
  }

  attached() {
    return this.getNodeStatuses();
  }

  getNodeStatuses() {
    return this.nodeStatusService.getNodeStatuses().then(result => {
      this.nodeStatuses = result;
    });
  }
}
