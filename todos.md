## Now

Moved build tooling for the client app over to a separate repository
Need to find the best way to use that tooling from within the app (and using the apps config if necessary)
Test the change to remove build tooling from the client app
Test the build tools have all needed packages
Try to prune unused libraries if possible

## Plan

1. Write admin console
  a. Check status of running services
  b. Check status of nodes
  c. Check and update configuration files - started
    - Reading and writing config files is enabled for litecoind and lnd
  d. Help with set up process (possibly)

1. Write adapters
  a. LND
  a. Litecoind - started
  b. Bitcoind
  c. Ltcd
  d. Btcd

1. Get docker compose working for CLAD (Client, Logic, Adapter, Data)
  a. Each layer should have docker images and various compose scripts should bring them together

1. Start thinking of a name for the platform
