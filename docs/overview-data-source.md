# Overview of a Data Source

A data source is quite simply a collection of configuration for a node running Litecoin or Bitcoin implementation software.

## Docker

Each project is meant to be stood up with docker.  The data source should include a Dockerfile for downloading the software, verifying the signatures, setting up the node, and making any ports available.

## Configuration files

The package.json includes a `coinmesh` stanza in the JSON that describes aspects of the data source to let the UI set itself up.  This includes a `confFilePath` attribute for naming the configuration file that gets created as well as a `conf` that contains the YAML or JSON configuration file that needs to be created.  The default values will then be used when creating a configuration file.

After the file has been created the CoinMesh UI will be able to do things like toggle between Mainnet / Testnet / Regtest (or simnet) mode.

## Data sources

The first five data sources will be -

- (Litecoind)[https://github.com/litecoin-project/litecoin]
- (Bitcoind)[https://github.com/bitcoin/bitcoin]
- (LTCD)[https://github.com/ltcsuite/ltcd]
- (BTCD)[https://github.com/btcsuite/btcd]
- (LND)[https://github.com/lightningnetwork/lnd]
