#!/usr/bin/env bash

# exit from script if error was raised.
set -e

if [ -f ~/.lnd/tls.key ]
then
  # remove certs so they are regenerated for the new ip of the container
  rm ~/.lnd/tls.key
  rm ~/.lnd/tls.cert
fi

exec lnd "$@"
