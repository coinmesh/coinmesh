export class Index {
  activeTab = '';

  setActiveTab(tabName) {
    if (this.activeTab === tabName) {
      this.activeTab = '';
    } else {
      this.activeTab = tabName;
    }
  }
}
