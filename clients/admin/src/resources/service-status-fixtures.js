import {ServiceStatus} from '../models/service-status';

export class ServiceStatusFixtures {
  static fixtures = [
    new ServiceStatus({
      name: 'Service Status',
      type: 'service',
      description: 'A service running to serve service status information to clients'
    }),
    new ServiceStatus({
      name: 'Node Status',
      type: 'service',
      description: 'A service running to serve node status information to clients'
    })
  ];
}
