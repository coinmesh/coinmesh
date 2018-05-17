import {NodeStatus} from '../models/node-status';

export class NodeStatusFixtures {
  static fixtures = [
    new NodeStatus({
      id: 1,
      name: 'litecoind',
      type: 'node-status',
      description: 'Litecoin core software',
      version: '15.1',
      status: 'up'
    }),
    new NodeStatus({
      id: 2,
      name: 'lnd',
      type: 'node-status',
      description: 'Lightning Network Daemon',
      version: '0.4.1',
      status: 'down'
    })
  ];
}
