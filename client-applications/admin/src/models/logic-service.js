export class LogicService {
  id;
  name = '';
  description = '';

  // TODO: Move to a view-model
  enabled = true;
  selected = false;
  type = 'logic-service';

  constructor(data) {
    Object.assign(this, data);
  }
}
