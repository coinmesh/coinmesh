export class Directory {
  items = [];

  constructor(data) {
    data.items = this.cleanItems(data.items);
    Object.assign(this, data);
  }
  cleanItems(items) {
    return items.filter(item => {
      return item.name[0] !== '.';
    });
  }
}
