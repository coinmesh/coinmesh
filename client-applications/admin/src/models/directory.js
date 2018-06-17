export class Directory {
  items = [];

  constructor(data) {
    data.items = this.cleanItems(data.items);
    Object.assign(this, data);
  }
  cleanItems(items) {
    return items.filter(item => {
      console.log(item.name)
      return !!item.name && item.name[0] !== '.';
    });
  }
}
