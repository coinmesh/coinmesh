export class DataSource {
  id;
  name = '';
  description = '';
  path = '';
  type = 'data-source';
  network = '';
  runHttp = false;
  confFilePath = '';
  adapter;

  enabled = true;
  selected = false;

  constructor(data = {}) {
    if (data.coinmesh) {
      this.convertPackageJsonProps(data);
    }

    Object.assign(this, data);
  }

  convertPackageJsonProps(data) {
    let props = data.coinmesh;

    if (props.network) {
      data.network = props.network;
    }
    if (props.runHttp) {
      data.runHttp = props.runHttp;
    }
    if (props.confFilePath) {
      data.confFilePath = props.confFilePath;
    }

    delete data.coinmesh;
  }
}
