export class ConfFile {
  id;
  name = '';
  pathToProject = '';
  type = 'conf-file';
  props = [];

  constructor(data = {}) {
    if (data && data.props) {
      let tmpProps = [];
      Object.keys(data.props).forEach(key => {
        tmpProps.push(new ConfFileProp({key: key, value: data.props[key]}));
      });
      data.props = tmpProps;
    }
    Object.assign(this, data);
  }
}

export class ConfFileProp {
  key = '';
  value;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
