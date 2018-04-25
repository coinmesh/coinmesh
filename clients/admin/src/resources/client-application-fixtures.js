import {ClientApplication} from 'models/client-application';

export class ClientApplicationFixtures {
  static fixtures = [
    new ClientApplication({
      enabled: true,
      id: 'empty-aurelia',
      name: 'Empty Aurelia Skeleton',
      description: 'An empty Aurelia browser application.'
    }),
    new ClientApplication({
      id: 'lnd-gui',
      name: 'LND GUI',
      description: 'An LND graphical user interface to interact with the lnd node.'
    }),
  ];
}
