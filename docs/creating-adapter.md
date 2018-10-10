# Creating an Adapter

## Overview

Adapters should typically provide a common JavaScript and HTTP interface.  There should also be a strong set of tests for both the JavaScript code and HTTP interface as well to instill confidence in the end user.

## Creating (or enhancing) an Adapter

To get started we recommend using the [HTTP API template](https://github.com/coinmesh/coinmesh/templates/libraries/http-api).  With this you can see that the tests are already set up with Jasmine for the unit tests and Supertest for the integration tests at the HTTP Layer.

The first thing you will want to do is modify the `package.json` file to reflect your adapter project and what it does, where it is located, etc...

## Recommended Project Structure

Having a simple project structure that matches the "Best Practices" that CoinMesh establishes makes it much easier for other developers to contribute to your project.  Because of this we have set up some basic guidelines -

```
- Root Adapter Directory
| - bin
| - routes
| - services
| - spec
| - app.js
| - index.js
| - package.json
```

The bin directory is the script that node.js launches your project under when using the HTTP layer.  Inside you'll see some basic express application code.

### Routes

Routes should be where you define routes that will be loaded by your application when running the HTTP layer.  Routes should be very basic and easy to test so it is recommended to put *no business logic in the route*.  When testing a route you can make a simple call and watch the underlying service using a spy or simply let it call through.

### Services

Services are where the meat of your adapter should live.  Services should be written in a way that they can be called by both a route and by a developer who is importing the adapter in to it.  We do this by writing the service as a class that is exported.

Once the service is written the developer of the adapter is encouraged to have the routes each create a new instance of the service and the `index.js` file export an instance of the service by new'ing it up.

Services are what the bulk of your unit tests will be written for.  This is because the services should contain the business logic.

If the adapter you are working on interfaces back to a node, bitcoind for example, you want to make sure that you have a service that interacts with the node through it's proper interface.  For bitcoind this would be the json-rpc interface.  Then all of the other services can use this re-usable logic.

### Spec

The spec directory is where all of our integration tests, unit tests, and test configuration should live.

### app.js

The `app.js` file is the file we use when running the adapter as an HTTP layer.  It is a standard express.js format that pulls in the routes and registers.  If you have any middle-ware to install this is where you would want to register it as well.

### index.js

The `index.js` file is the file that is specified in the package.json as the main entry point of the application when using it as an npm package.  This is where you would want to export the services that are available to the developer who is consuming the adapter.

### package.json

All configuration in CoinMesh adapters are contained within the package.json file.  There should be a `coinmesh` stanza in each adapter's package.json with any relevant information to the project.

#### Scripts

The scripts in the package.json are the main way of interacting with your project.  One easy win is to have `npm start` call `npm install` first.
