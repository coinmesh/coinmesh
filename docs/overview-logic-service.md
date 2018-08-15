# Overview of a Logic Service

Logic services are where the core business logic should reside.  Typically a logic service would want to add some application-specific business logic on top of an adapter.

By doing this the application can keep current with any changes in the code upstream in the adapter but still be able to having logic that is specific to your application.  This makes staying up to date much easier.

## Using outside of CoinMesh

Because logic services are built on top of adapters typically it is easy to use this functionality outside of a CoinMesh-managed application.

CoinMesh is designed to be an eco-system of re-usable bits to help encourage building projects from ideas so we in no way force the developer to use various logic services and adapters only in CoinMesh.

## Re-usable logic services

It is encouraged to contribute back to CoinMesh and the community by developing various logic services that can be reviewed, tested, and used by everyone.  By doing this everyone works together to prevent security flaws and issues.

## Testing

Currently the logic services are generated with working tests using Jasmine and Supertest.  Jasmine handles the unit tests and Supertest handles the HTTP requests in an easy to use manner.
