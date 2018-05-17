import {Adapter} from 'models/adapter';

export class AdapterFixtures {
  static fixtures = [
    new Adapter({
      enabled: true,
      id: 'litecoind-adapter',
      name: 'Litecoind Adapter',
      description: 'Litecoin core adapter.',
      path: '../../adapters/litecoind-adapter'
    }),
    new Adapter({
      enabled: true,
      id: 'bitcoind-adapter',
      name: 'Bitcoind Adapter',
      description: 'Bitcoin core adapter.',
      path: '../../adapters/bitcoind-adapter'
    }),
    new Adapter({
      enabled: true,
      id: 'ln-service',
      name: 'LND Service',
      description: 'Lightning Network Daemon service.',
      path: '../../adapters/lnd-adapter'
    }),
    new Adapter({
      id: 'ltcd-adapter',
      name: 'LTCD Adapter',
      description: 'LTCD adapter.',
      path: '../../adapters/ltcd-adapter'
    }),
    new Adapter({
      id: 'btcd-adapter',
      name: 'BTCD Adapter',
      description: 'BTCD adapter.',
      path: '../../adapters/btcd-adapter'
    }),
  ];
}
