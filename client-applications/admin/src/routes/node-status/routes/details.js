import {NodeStatusService} from 'services/node-status';
import {NodeStatus} from 'models/node-status';

export class Details {
  static inject = [NodeStatusService];
  constructor(nodeStatusService) {
    this.nodeStatusService = nodeStatusService;
  }

  activate(params) {
    return this.getNodeStatus(params.id);
  }

  getNodeStatus(id) {
    return this.nodeStatusService.getNodeStatusById(id).then(result => {
      this.nodeStatus = result;
    });
  }
}
