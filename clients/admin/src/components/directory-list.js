import {bindable} from 'aurelia-templating';

export class DirectoryList {
  @bindable directoryItems = [];
  @bindable getDirectoryContents = () => {};
  @bindable goUpOneDirectory = () => {};
  @bindable newDirectoryName = '';
  @bindable createDirectory = () => {};
  @bindable selectedDirectory = '';
  @bindable selectDirectory = () => {};

  chooseDir(dir) {
    return this.getDirectoryContents({ dir });
  }
  createNewDirectory() {
    return this.createDirectory({ name: this.newDirectoryName }).then(result => {
      this.newDirectoryName = '';
    });
  }
}
