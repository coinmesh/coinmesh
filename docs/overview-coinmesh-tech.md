# CoinMesh Technology

CoinMesh is a n-tier application platform that provides an architecture needed for developers to create flexible and reusable applications.  For now, we've conceptualized an application stack into four layers.

## The Four Layers of an Application Stack

A typical application can be broken up in to four layers:

+ Client Application
+ Logic Service
+ Adapter
+ Data Source

Let's start with the bottom layer and work our way up.

### Data Source
Let's start with the bottom layer.  The Data Source refers to the blockchain node your project needs to reference if you want to build on top of Litecoin or Bitcoin.  This node could be lnd, litecoind, bitcoind, btcd, or ltcd.

### Adapter
Next is the Adapter.  This layer provides an interfact for connecting with your Data Source.  It is assumed that all functionality that is provided from the nodes will be available in a unified contract via the adapters, with a clear error for if a node cannot support a given method.

### Logic Service
The Logic Service is the middle part of the application stack and where developers start laying out the foundations for their projects.  This is the layer the Client Application interacts with in order to get information from the Data Source via Adapters.

### Client Application
Finally, the Client Application is the visual interfact for the user to interact with.  For now this will be 100% browser-based.  However, there are options to easily make this a native application and suggestions for doing so will be added.  A simple component library with basic styling will be provided to the end-user to see how to interact with the Logic tier
