import {DataSource} from 'models/data-source';

export class DataSourceFixtures {
  static fixtures = [
    new DataSource({
      enabled: true,
      id: 'litecoind',
      name: 'Litecoind',
      description: 'Litecoin core software.',
      adapter: 'litecoind-adapter',
      path: '../../data-sources/litecoind'
    }),
    new DataSource({
      enabled: true,
      id: 'bitcoind',
      name: 'Bitcoind',
      description: 'Bitcoin core software.',
      adapter: 'bitcoind-adapter',
      path: '../../data-sources/bitcoind'
    }),
    new DataSource({
      enabled: true,
      id: 'lnd',
      name: 'LND',
      description: 'Lightning Network Daemon.',
      adapter: 'ln-service',
      path: '../../data-sources/lnd'
    }),
    new DataSource({
      id: 'ltcd',
      name: 'LTCD',
      description: 'Alternative Litecoin implementation in node.js.',
      adapter: 'ltcd-adapter',
      path: '../../data-sources/ltcd'
    }),
    new DataSource({
      id: 'btcd',
      name: 'BTCD',
      description: 'Alternative Bitcoin implementation in node.js.',
      adapter: 'btcd-adapter',
      path: '../../data-sources/btcd-adapter'
    }),
  ];
}
