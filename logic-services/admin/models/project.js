class Project {
  constructor(data) {
    this.name = data.name;
    this.description = data.description;
    this.path = data.path;
    this.sourcePath = data.path;

    Object.assign(this, data);
  }
}

module.exports = Project;
