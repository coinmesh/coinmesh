# LND Adapter

LND Adapter uses `ln-service` under the covers.  This is a wrapper with tests and documentation for that project.  There are some additional subtle differences in what is exported and how the library is used.

## Tests

You must have regtest bitcoind node running to run the specs.  You can do this by running the following from the root of the project -

```
$ docker-compose up bitcoind
```
