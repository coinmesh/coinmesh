# CoinMesh Technology

CoinMesh is a n-tier application platform that provides an architecture for developers to create flexible and reusable applications.  For now, we've conceptualized our application stack into four layers.


## The Four Layers of an Application Stack

The application can be broken up in to four layers:

+ Client Application
+ Logic Service
+ Adapter
+ Data Source

Let's start with the bottom layer and work our way up.

### Data Source

The Data Source refers to the blockchain node your project needs to reference if you want to build on top of Litecoin or Bitcoin.  The various node implementation we plan to support include but are not limited to: lnd, litecoind, bitcoind, btcd, or ltcd.

### Adapter

Next is the Adapter.  This layer provides an interface for connecting with your Data Source.  It is assumed that all functionality that is provided from the nodes will be available in a unified contract via the adapters, with a clear error if a node cannot support a given method.

### Logic Service

The Logic Service is the middle part of the application stack and where developers start laying out the foundations for their projects.  This is the layer the Client Application interacts with in order to get information from the Data Source via Adapters.

### Client Application

Finally, the Client Application is the visual interface for the user to interact with.  A simple component library with basic styling will be provided to the end-user to see how to interact with the Logic tier.  For now this will be 100% browser-based.  However, there are options to easily make this a native application and suggestions for doing so will be added.


## Package management and Project Structure

All packages are written in JavaScript and managed using a few simple concepts -

- Everything is available as an NPM package through the @CoinMesh organization on NPM.
- All dependencies are managed by NPM
- All configuration is in the `package.json` file in a `coinmesh` stanza
- All commands should be NPM scripts in the `package.json` file

## CoinMesh IDE

The UI for CoinMesh is meant to make on-boarding new developers easy.  It automates tasks for the developer so that learning the underlying technology is not step one.  It is not required for running any of the libraries.

If you do not wish to run the CoinMesh IDE and simply build using the libraries you can absolutely do this as well.
