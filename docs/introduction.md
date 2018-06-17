# Introduction

## The Problem

Application development on top of Litecoin and Bitcoin is notoriously difficult. The amount of protocol level knowledge needed in order to effectively leverage a blockchain client is daunting.  The documentation and help needed are sparse when it comes to building a blockchain client.  This unfortunately becomes a point of frustration for developers which then discourages many from continuing in this industry.

It’s time that we focused on making this process easier. This is the heart behind BlockFuse, a blockchain focused software service startup, and why we created CoinMesh. By providing a platform that automates blockchain nodes and makes it accessible for developers to build thier projects on, we hope to open the floodgates of app development to match the exponential growth that LTC and BTC have experienced over this past year.

## CoinMesh: The Startup Kit for Litecoin and Bitcoin App Development
CoinMesh is a n-tier application platform that provides an architecture needed for developers to create flexible and reusable applications. For now, we've conceptualized an application stack into four layers.

### The Four Layers of an Application Stack
A typical application can be broken up in to four layers:

+ Client Application
+ Logic Service
+ Adapter
+ Data Source

Let's start with the bottom layer and work our way up.

### Data Source
Let's start with the bottom layer. The Data Source refers to the blockchain node your project needs to reference if you want to build on top of Litecoin or Bitcoin. This node could be lnd, litecoind, bitcoind, btcd, or ltcd.

### Adapter
Next is the Adapter. This layer provides an interfact for connecting with your Data Source. It is assumed that all functionality that is provided from the nodes will be available in a unified contract via the adapters, with a clear error for if a node cannot support a given method.

### Logic Service
The Logic Service is the middle part of the application stack and where developers start laying out the foundations for their projects. This is the layer the Client Application interacts with in order to get information from the Data Source via Adapters.

### Client Application
Finally, the Client Application is the visual interfact for the user to interact with. For now this will be 100% browser-based. However, there are options to easily make this a native application and suggestions for doing so will be added. A simple component library with basic styling will be provided to the end-user to see how to interact with the Logic tier

## Additional Key Features of CoinMesh

OpenSource — CoinMesh is open to the community to be peer-reviewed and so that that the proliferation of application development is unrestricted.
JavaScript — As the most popular language, we have strategically chosen JS first to leverage its large community.
Simple — It will be easy to use with an admin view to help troubleshoot errors as well as the ability to restore your project instantly in case your blockchain client crashes.
