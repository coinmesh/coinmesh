# Creating a Logic Service

## Overview

Logic Service should typically provide some sort of business logic that can be re-used easily.  A good example of this is a logic service for generating a new passphrase or a service that provides some common task that is typically done against a node.

## Creating (or enhancing) an Logic Service

To get started we recommend using the [HTTP API template](https://github.com/coinmesh/coinmesh/templates/projects/http-api).  With this you can see that the tests are already set up with Jasmine for the unit tests and Supertest for the integration tests at the HTTP Layer.

The first thing you will want to do is modify the `package.json` file to reflect your logic service project and what it does, where it is located, etc...

## Recommended Project Structure

Having a simple project structure that matches the "Best Practices" that CoinMesh establishes makes it much easier for other developers to contribute to your project.  Because of this we have set up some basic guidelines -

```
- Root Logic Service Directory
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

Services are where the meat of your logic service should live.  Services should be written in a way that they can be called by both a route and by a developer who is importing the logic service in to it.  We do this by writing the service as a class that is exported.  This makes it even more re-usable such as for developers using other languages than JavaScript.

Once the service is written the developer of the logic service is encouraged to have the routes each create a new instance of the service and the `index.js` file export an instance of the service by new'ing it up.

Services are what the bulk of your unit tests will be written for.  This is because the services should contain the business logic.

### Spec

The spec directory is where all of our integration tests, unit tests, and test configuration should live.

### app.js

The `app.js` file is the file we use when running the logic service as an HTTP layer.  It is a standard express.js format that pulls in the routes and registers.  If you have any middle-ware to install this is where you would want to register it as well.

### index.js

The `index.js` file is the file that is specified in the package.json as the main entry point of the application when using it as an npm package.  This is where you would want to export the services that are available to the developer who is consuming the logic service.

### package.json

All configuration in CoinMesh logic services are contained within the package.json file.  There should be a `coinmesh` stanza in each logic service's package.json with any relevant information to the project.

#### Scripts

The scripts in the package.json are the main way of interacting with your project.  One easy win is to have `npm start` call `npm install` first.
