# LND Adapter

LND Adapter uses `ln-service` under the covers.  This is a wrapper with tests and documentation for that project.

## Tests

You must have regtest bitcoind node running to run the specs.  You can do this by running the following from the root of the project -

```
$ docker-compose up bitcoind
```

## Acknowledgements

LND Adapter uses ln-service, a project maintained by @AlexBosworth, for most interactions.
s