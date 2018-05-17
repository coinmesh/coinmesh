import {LogicService} from 'models/logic-service';

export class LogicServiceFixtures {
  static fixtures = [
    new LogicService({
      enabled: true,
      id: 'data-source-status',
      name: 'DataSource status',
      description: 'Status of a running data source.'
    }),
    new LogicService({
      id: 'service-status',
      name: 'Service status',
      description: 'Status of services that are running.'
    }),
  ];
}
