# Technical Overview

An overview of the proposed technology

## Layers

A typical application can be broken up in to four layers -

### Clients Tier

A client is the application that has a visual interface for the user to interact with.

For now this will be 100% browser-based.  There are options to easily make this a native application and suggestions for doing so will be added.

A simple component library with basic styling will be provided to the end-user to see how to interact with the Logic tier

### Logic Tier

Where the business logic resides.  This is part of the middle tier and is what the "Client" talks to to get information from the "Data Tier" via Adapters.

### Adapters Tier

Adapters provide an interface or contract for connecting to nodes.  It is assumed that all functionality that is provided from the nodes will be available in a unified contract via the adapters, with a clear error for if a node cannot support a given method.

An example would be that an LND node can support creating channels but that functionality is not available in Litecoin or Bitcoin core.

### Data Tier

This is where the data is sourced from the nodes.  The node could be lnd, litecoind, bitcoind, btcd, or ltcd.
