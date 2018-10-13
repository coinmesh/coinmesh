export class DockerContainer {
  id;
  name = '';
  path = '';
  type = 'container';

  canGenerate = false;
  status = 'unknown';

  constructor(data = {}) {
    Object.assign(this, data);
    if (this.name === 'bitcoind' || this.name === 'litecoind') {
      this.canGenerate = true;
    }
  }
}
