# Overview of an Adapter

The adapter layer rests in between the data source and your logic service.   The adapters are designed to be interfaces in to each of the different Litecoin and Bitcoin implementations.

The adapter abstracts out common functionality like sending coins to another address so that it is easy for the developer to get started writing features instead of working through interacting with the node.

The litecoind and bitcoind adapters use the JSON RPC interface and the LND adapter uses the gRPC interface.

## As a node.js library

Each of the adapters can be `npm install`ed in a logic service (or even another adapter if you wanted) so that the developer can immediately begin interacting directly with the node.

## RESTful HTTP API

The adapter can also be run directly as an HTTP service.  This enables the developer to write their code in any language they choose and still interact with the node in a common way.

## Using outside of CoinMesh

Because adapters are built on top of data sources it is easy to use this functionality outside of a CoinMesh-managed application.

CoinMesh is designed to be an eco-system of re-usable bits to help encourage building projects from ideas so we in no way force the developer to use various logic services and adapters only in CoinMesh.

## Testing

Currently the adapters are tested using Jasmine and Supertest.  Jasmine handles the unit tests and Supertest handles the HTTP requests in an easy to use manner.
