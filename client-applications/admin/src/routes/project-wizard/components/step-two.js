import {bindable} from 'aurelia-templating';
import {DataSourcesService} from 'services/data-sources';
import {AdaptersService} from 'services/adapters';

export class StepTwo {
  @bindable project;
  @bindable dataSources = [];
  @bindable adapters = [];

  static inject = [DataSourcesService, AdaptersService];
  constructor(dataSourcesService, adaptersService) {
    this.dataSourcesService = dataSourcesService;
    this.adaptersService = adaptersService;
  }

  activate(project) {
    this.project = project;
    let dsPromise = this.dataSourcesService.getDataSources().then(result => {
      this.dataSources = result;
    });
    let adapterPromise = this.adaptersService.getAdapters().then(result => {
      this.adapters = result;
    });
    return Promise.all([dsPromise, adapterPromise]);
  }
  detached() {
    let matchingAdapters = {};
    this.project.dataSources = this.dataSources.filter(dataSource => {
      let isSelected = !!dataSource.selected;
      if (isSelected) {
        matchingAdapters[dataSource.adapter] = true;
      }
      return isSelected;
    });
    this.project.adapters = this.adapters.filter(adapter => {
      return matchingAdapters[adapter.id];
    });
  }
}
