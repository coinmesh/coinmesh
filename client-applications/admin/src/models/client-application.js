export class ClientApplication {
  id;
  name = '';
  description = '';

  // TODO: Move to a view-model
  enabled = true;
  selected = false;
  type = 'client-application';

  constructor(data) {
    Object.assign(this, data);
  }
}
