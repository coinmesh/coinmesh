## Now

1. Write admin console
  x. Add a wizard to the admin app
    x. Choose project name
    x. Choose data-tier options (litecoind, lnd, ex.)
      - Set up docker to spin up those nodes
      - Set up adapters to run on those containers
    c. Choose logic-tier name
    d. Cloose client-tier name

  a. Check status of running services
    - Add a logic tier "service-status" to communicate with all registered services running
      - Add a route to query the health-checks on services
      - Display the various pieces that are running and make sure they have a health-check route
  b. Check status of nodes
    - Add a logic tier "node-status" to communicate with litecoind
      - Return the nodes health
      - Return the full get info call
      - Return whether the node is running
      - Can restart litecoind
      - Service to generate 100 blocks
  c. Check and update configuration files - started
    - Add a configuration logic tier to communicate with the configuration service
      - Get the values of litecoin.conf
      - Allow changing the values of litecoin.conf
  d. Add a console emulator for the web to allow issuing commands

## Plan

1. Write adapters
  a. LND
  a. Litecoind - started
  b. Bitcoind
  c. Ltcd
  d. Btcd

1. Get docker compose working for CLAD (Client, Logic, Adapter, Data)
  a. Each layer should have docker images and various compose scripts should bring them together

1. Start thinking of a name for the platform
