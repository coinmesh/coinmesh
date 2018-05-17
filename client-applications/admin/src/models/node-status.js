export class NodeStatus {
  id = '';
  name = '';
  description = '';
  type = 'node-status';

  constructor(data) {
    Object.assign(this, data);
  }
}
