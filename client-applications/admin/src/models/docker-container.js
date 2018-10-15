export class DockerContainer {
  id;
  name = '';
  path = '';
  type = 'container';

  sendCoinsOpen = false;
  generateBlocksOpen = false;
  canSend = false;
  canGenerate = false;
  status = 'unknown';

  constructor(data = {}) {
    Object.assign(this, data);
    if (this.name === 'bitcoind' || this.name === 'litecoind') {
      this.canGenerate = true;
      this.canSend = true;
    }
  }
  toggleOpen(prop) {
    this[prop] = !this[prop];
  }
}
