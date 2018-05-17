import {ProjectStore} from 'services/project-store';

export class AdapterDetails {
  projectStore;
  adapter;

  static inject = [ProjectStore];
  constructor(projectStore) {
    this.projectStore = projectStore;
  }

  activate(params) {
    let adapterName = params.name;

    if (adapterName && this.projectStore.currentProject) {
      let match = this.projectStore.currentProject.adapters.find(adapter => {
        return adapter.name === adapterName;
      });
      this.adapter = match;
    }
  }
}
