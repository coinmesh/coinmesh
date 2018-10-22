export class DockerService {
  id;
  name = '';
  path = '';

  adapters = [];
  clientApplications = [];
  logicServices = [];
  dataSources = [];

  type = 'service';

  sendCoinsOpen = false;
  generateBlocksOpen = false;

  canSend = false;
  canGenerate = false;
  hasBrowserPage = false;

  status = 'unknown';

  constructor(data = {}) {
    Object.assign(this, data);
    if (this.name === 'bitcoind' || this.name === 'litecoind') {
      this.canGenerate = true;
      this.canSend = true;
    } else if (this.name === 'app') {
      this.hasBrowserPage = true;
    }
  }
  toggleOpen(prop) {
    this[prop] = !this[prop];
  }
}
