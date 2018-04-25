export class DataSource {
  id;
  name = '';
  description = '';
  // TODO: Move to a view-model
  enabled = false;
  selected = false;
  type = 'data-source';
  adapter;

  constructor(data) {
    Object.assign(this, data);
  }
}
