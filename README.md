> **NOTICE**: This repo is not actively maintained due to lack of interest.  It may not be in a running state.

# CoinMesh

The Startup Kit for Litecoin and Bitcoin App Development

## Documentation

Visit our [documentation site](https://coinmesh.com/docs).

## Running CoinMesh on your local machine

Visit our [documentation site](https://coinmesh.com/docs/#/getting-started) for instructions on getting started.

## Running all tests

Currently to run all of the tests you need to have docker-compose running bitcoind and litecoind.

You can run them from the root of the project -

```
$ docker-compose up
```

Additionally for lnd you need to run lnd locally on your machine using the bitcoind from docker (or your own version of bitcoind running)

Once this is in place you can run all of the tests including the integration tests.

```
$ npm test
```

If any of the sub-packages have not had all of their dependencies installed you may see an error `"jasmine" exec not found`.

You will need to install npm dependencies in that directory to be able to run the tests.

## Contributing

Visit our docs for more info on contributing - [Contributing](https://coinmesh.com/docs/#/contributing)
