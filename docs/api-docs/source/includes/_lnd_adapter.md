# Lnd-adapter

The lnd-adapter is a wrapper project on top of [@AlexBosworth](github.com/alexbosworth) 's ln-service.  It is currently available thanks to his tireless work on maintaining and improving it.

The differences in what is exported from this adapter is that the service is instantiated and the methods are available grouped on services to provide the common API layer for CoinMesh.

> When using the REST interface you will need to supply a basic authentication token as show here -

```
const username = 'rpcuser';
const password = 'rpcpassword';
let token = btoa(`${username}:${password}`);
```

The token will be used below in the curl examples

## Create Address

```shell
curl -X POST
  -d '{
      "format": "np2wpkh"
    }'
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/addresses/"
```

```javascript
const addressesService = require('@coinmesh/lnd-adapter').addressesService;

addressesService.getNewAddress('np2wpkh').then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "address": "2NEWwwQ959SLvZsWhaVYuUoEvQG9LxbJSU2",
  "type": "chain_address"
}
```

This endpoint retrieves a new address created in the wallet.

### HTTP Request

`POST http://localhost:3098/v0/addresses/`

### Body Parameters

Parameter | Default | Description
--------- | ------- | -----------
format | np2wkh | Format of the address to return



## Send To Chain Address

```shell
curl -X POST
  -d '{
      "address": "{{address}}",
      "tokens": 20000
    }'
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/transactions/"
```

```javascript
const addressesService = require('@coinmesh/lnd-adapter').addressesService;

const address = `${address}`;
const amount = 20000; // satoshis

addressesService.sendToAddress(address, amount).then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "txid": "{{transaction id}}"
}
```

This endpoint sends coins from this wallet to an address on chain.

### HTTP Request

`POST http://localhost:3098/v0/transactions/`

### Body Parameters

Parameter | Default | Description
--------- | ------- | -----------
address | null | Address to send coins to
tokens | null | number of tokens to send, in satoshis



## Get Chain Balance

```shell
curl -X GET
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/balance/"
```

```javascript
const balancesService = require('@coinmesh/lnd-adapter').balancesService;

balancesService.getChainBalance().then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "chain_balance": 5000000000,
  "channel_balance": 0,
  "pending_chain_balance": 0,
  "pending_channel_balance": 0,
  "type":"balances"
}
```

This endpoint returns the chain and channel balances.

### HTTP Request

`GET http://localhost:3098/v0/balance/`

### Body Parameters

None



## Get Connections

```shell
curl -X GET
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/connections/"
```

```javascript
const balancesService = require('@coinmesh/lnd-adapter').balancesService;

balancesService.getChainBalance().then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "connections": [{
    "channels": [{
      "id": "<Channel Id String>",
      "is_active": "<Channel Active Bool>",
      "is_closing": "<Channel Closing Bool>",
      "is_opening": "<Channel Opening Bool>",
      "local_balance": "<Local Balance Satoshis Number>",
      "received": "<Received Satoshis Number>",
      "remote_balance": "<Remote Balance Satoshis Number>",
      "sent": "<Sent Satoshis Number>",
      "transaction_id": "<Blockchain Transaction Id>",
      "transaction_vout": "<Blockchain Transaction Vout Number>",
      "transfers_count": "<Channel Transfers Total Number>",
      "unsettled_balance": "<Unsettled Balance Satoshis Number>"
    }],
    "peers": [{
      "bytes_received": "<Bytes Received Number>",
      "bytes_sent": "<Bytes Sent Number>",
      "network_address": "<Network Address String>",
      "ping_time": "<Milliseconds Number>",
      "tokens_received": "<Amount Received Satoshis Number>",
      "tokens_sent": "<Amount Sent Satoshis Number>"
    }],
    "public_key": "<Public Key String>",
    "type": "<Type String>"
  }]
}
```

This endpoint returns an aggregate of the connections (channels and nodes) to the node.

### HTTP Request

`GET http://localhost:3098/v0/connections/`

### Body Parameters

None



## Get Channels

```shell
curl -X GET
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/channels/"
```

```javascript
const channelsService = require('@coinmesh/lnd-adapter').channelsService;

channelsService.getChannels().then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "channels": [{
    "capacity": "<Channel Token Capacity Number>",
    "commit_transaction_fee": "<Commit Transaction Fee Number>",
    "commit_transaction_weight": "<Commit Transaction Weight Number>",
    "id": "<Channel Id String>",
    "is_active": "<Channel Active Bool>",
    "is_closing": "<Channel Is Closing Bool>",
    "is_opening": "<Channel Is Opening Bool>",
    "is_private": "<Channel Is Private Bool>",
    "local_balance": "<Local Balance Satoshis Number>",
    "partner_public_key": "<Channel Partner Public Key String>",
    "pending_payments": [{
      "id": "<Payment Preimage Hash Hex String>",
      "is_outgoing": "<Payment Is Outgoing Bool>",
      "timeout": "<Chain Height Expiration Number>",
      "tokens": "<Payment Tokens Number>"
    }],
    "received": "<Received Satoshis Number>",
    "remote_balance": "<Remote Balance Satoshis Number>",
    "sent": "<Sent Satoshis Number>",
    "transaction_id": "<Blockchain Transaction Id String>",
    "transaction_vout": "<Blockchain Transaction Vout Number>",
    "unsettled_balance": "<Unsettled Balance Satoshis Number>"
  }]
}
```

This endpoint retrieves all of the channels connected to this node.

### HTTP Request

`GET http://localhost:3098/v0/channels/`


## Close Channel

```shell
curl -X DELETE
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/channels/{{channel id}}"
```

```javascript
const channelsService = require('@coinmesh/lnd-adapter').channelsService;

channelsService.closeChannel(channelId).then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "transaction_id": "<Closing Transaction Id Hex String>",
  "type": "close_channel"
}
```

This endpoint closes a channel connected to this node.

### HTTP Request

`DELETE http://localhost:3098/v0/channels/{{channel id}}`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
channel_id | null | Id of channel to close



## Open Channel

```shell
curl -X POST
  -d '{
      "chain_fee_tokens_per_vbyte": 1e3,
      "give_tokens": 0,
      "local_tokens": 100000,
      "partner_public_key": "{{public key of other node}}"
    }'
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/channels/"
```

```javascript
const channelsService = require('@coinmesh/lnd-adapter').channelsService;

const targetNodePublicKey = `${publicKey}`;
const localTokens = 100000;
const giveTokens = 0;
const fee = 1e3;

channelsService.openChannel(targetNodePublicKey, localTokens, giveTokens, fee).then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "transaction_id": "<Funding Transaction Id String>",
  "transaction_vout": "<Funding Transaction Output Index Number>",
  "type": "channel_pending"
}
```

This endpoint opens a channel with a connected peer.

### HTTP Request

`POST http://localhost:3098/v0/channels/`

### Body Parameters

Parameter | Default | Description
--------- | ------- | -----------
chain_fee_tokens_per_vbyte | 1e3 | Chain Fee Tokens Per VByte Number
give_tokens | 0 | Number of tokens to gift to peer
local_tokens | null | Number of tokens to fund channel with
partner_public_key | null | Public key of peer node



## Sign Message

```shell
curl -X POST
  -d '{
      "message": "A message to sign."
    }'
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/crypto/sign/"
```

```javascript
const cryptoService = require('@coinmesh/lnd-adapter').cryptoService;

const message = 'A message to sign.';

cryptoService.signMessage(message).then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "signature": "{{signature}}"
}
```

This endpoint opens a channel with a connected peer.

### HTTP Request

`POST http://localhost:3098/v0/crypto/sign/`

### Body Parameters

Parameter | Default | Description
--------- | ------- | -----------
message | null | Message to sign



## Verify Message

```shell
curl -X POST
  -d '{
      "message": "A message to verify."
    }'
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/crypto/verify/"
```

```javascript
const cryptoService = require('@coinmesh/lnd-adapter').cryptoService;

const message = 'A message to sign.';

cryptoService.signMessage(message).then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "signed_by": "{{public key of signer}}"
}
```

This endpoint opens a channel with a connected peer.

### HTTP Request

`POST http://localhost:3098/v0/crypto/sign/`

### Body Parameters

Parameter | Default | Description
--------- | ------- | -----------
message | null | Message to sign
signature | null | Signature to check the message



## Create Invoice

```shell
curl -X POST
  -d '{
        "description": "Fake description",
        "expires_at": "new Date()",
        "tokens": 20001,
        "internal_description": "receipt info",
        "is_fallback_included": false,
        "is_fallback_nested": false,
        "secret": "sshhhh",
    }'
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/invoices/"
```

```javascript
const invoicesService = require('@coinmesh/lnd-adapter').invoicesService;

const invoiceRequestObject = {
  description: "Fake description",
  expires_at: new Date(),
  tokens: 20001,
  internal_description: "receipt info",
  is_fallback_included: false,
  is_fallback_nested: false,
  secret: "sshhhh"
};

invoicesService.createInvoice(invoiceRequestObject).then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "chain_address": "<Backup Address String>",
  "created_at": "<ISO 8601 Date String>",
  "description": "Fake description",
  "id": "<Payment Hash Hex String>",
  "request": "<BOLT 11 Encoded Payment Request String>",
  "secret": "sshhh",
  "tokens": 20001,
  "type": "create_invoice"
}
```

This endpoint creates an invoice to be paid via a channel.

### HTTP Request

`POST http://localhost:3098/v0/channels/`

### Body Parameters

Parameter | Default | Description
--------- | ------- | -----------
description | null | Description of the invoice
expires_at | null | When the invoice expires
internal_description | null | Description to use internally
is_fallback_included | null | Include a fallback address?
is_fallback_nested | null | Should fallback address be nested
secret | null | Secret
tokens | null | Number of tokens in satoshis


## Get Invoice

```shell
curl -X GET
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/invoices/{{request}}"
```

```javascript
const invoicesService = require('@coinmesh/lnd-adapter').invoicesService;

invoicesService.getInvoice(invoice.id).then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "description": "Fake description",
  "expires_at": "new Date()",
  "id": "Invoice id string",
  "is_confirmed": true,
  "is_outgoing": false,
  "request": "<BOLT 11 Encoded Payment Request String>",
  "secret": "ssshhhh",
  "tokens": 20001,
  "type": "get_invoice"
}
```

This endpoint retrieves details of a specific invoice.

### HTTP Request

`GET http://localhost:3098/v0/invoices/{{request}}`



## Get Invoices

```shell
curl -X GET
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/invoices/"
```

```javascript
const invoicesService = require('@coinmesh/lnd-adapter').invoicesService;

invoicesService.getInvoices().then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "description": "Fake description",
  "expires_at": "new Date()",
  "id": "invoice.id",
  "is_confirmed": true,
  "is_outgoing": false,
  "request": "<BOLT 11 Encoded Payment Request String>",
  "secret": "ssshhh",
  "tokens": 20001,
  "type": "get_invoices"
}
```

This endpoint retrieves all of the invoices open for this node.

### HTTP Request

`GET http://localhost:3098/v0/invoices/`



## Get Network Info

```shell
curl -X GET
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/network-info/"
```

```javascript
const networkInfosService = require('@coinmesh/lnd-adapter').networkInfosService;

networkInfosService.getNetworkInfo().then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "average_channel_size": 100000,
  "channel_count": 20,
  "maximum_channel_size": 10000000000,
  "minimum_channel_size": 10000,
  "node_count": 10,
  "total_capacity": 1000000,
  "type": "network-info"
}
```

This endpoint retrieves network information about the node.

### HTTP Request

`GET http://localhost:3098/v0/network_info/`



## Get Network Graph

```shell
curl -X GET
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/network-info/graph"
```

```javascript
const networkInfosService = require('@coinmesh/lnd-adapter').networkInfosService;

networkInfosService.getNetworkGraph().then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "edges": [{
    "capacity": 1000000000,
    "from_self": false,
    "id": "Channel id",
    "policies": [{
      "base_fee_mtokens": 0,
      "cltv_delta": 0,
      "fee_rate": 0,
      "is_disabled": false,
      "minimum_htlc_mtokens": 0
    }],
    "source": "{{source public key}}",
    "target": "{{target public key}}",
    "to_self": false,
    "transaction_id": "{{transaction id}}",
    "transaction_output_index": "{{ transaction output index }}",
    "updated_at": "new Date()",
  }],
  "nodes": [{
    "alias": "",
    "color": "",
    "community": "",
    "id": "Public key of node",
    "is_self": false,
    "sockets": [""],
    "updated_at": "new Date()"
  }],
  "own_node": {
    "channel_count": 1,
    "id": ""
  }
}
```

This endpoint retrieves a graph of information about the peers and edges node.

### HTTP Request

`GET http://localhost:3098/v0/network_info/graph`



## Get Payments

```shell
curl -X GET
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/history/"
```

```javascript
const paymentsService = require('@coinmesh/lnd-adapter').paymentsService;

paymentsService.getPayments().then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "history": [{
    "block_id": "{{block id}}",
    "chain_address": "{{ fallback chain address }}",
    "confirmation_count": 1,
    "confirmed_at": "new Date()",
    "created_at": "new Date()",
    "description": "Fake description",
    "description_hash": "",
    "destination": "",
    "expires_at": "new Date()",
    "fee": 1000,
    "hop_count": 5,
    "id": "{{id}}",
    "is_confirmed": true,
    "is_outgoing": false,
    "request": "<BOLT 11 Payment Request String>",
    "tokens": 20001,
    "type": "history"
  }]
}
```

This endpoint retrieves all of the payments made from this wallet.

### HTTP Request

`GET http://localhost:3098/v0/history/`



## Pay Invoice

```shell
curl -X POST
  -d '{
        "fee": 1000,
        "request": "<BOLT 11 Payment Request String>",
    }'
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/payments/"
```

```javascript
const paymentsService = require('@coinmesh/lnd-adapter').paymentsService;

const request = '<BOLT 11 Payment Request String>';
const fee = 1000;

paymentsService.pay(request, fee).then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "fee": 1000,
  "fee_mtokens": 1000000,
  "hops": [{
    "channel_capacity": 10000,
    "channel_id": "",
    "fee_mtokens": 1000,
    "forward_mtokens": 1000,
    "timeout": "<Hop CLTV Expiry Block Height Number>"
  }],
  "id": "",
  "is_confirmed": true,
  "is_outgoing": false,
  "mtokens": 100000,
  "secret": "sshh",
  "tokens": 20001,
  "type": "payments"
}
```

This endpoint pays an invoice request.

### HTTP Request

`POST http://localhost:3098/v0/payments/`

### Body Parameters

Parameter | Default | Description
--------- | ------- | -----------
fee | null | Fee to pay
request | null | The payment request from an invoice



## Add Peer

```shell
curl -X POST
  -d '{
        "public_key": "{{public key}}",
        "host": "localhost",
        "port": "9735"
    }'
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/peers/"
```

```javascript
const peersService = require('@coinmesh/lnd-adapter').peersService;

const socket = `localhost:9735`;
const publicKey = '{{pubkey}}';
peersService.addPeer(socket, publicKey).then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "error": "TODO: Fill this in :)"
}
```

This endpoint connects to a new node.

### HTTP Request

`POST http://localhost:3098/v0/peers/`

### Body Parameters

Parameter | Default | Description
--------- | ------- | -----------
public_key | null | Public Key
host | null | Host of the remote node
port | 9735 | Port the remote node is running on



## Remove Peer

```shell
curl -X DELETE
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/peers/{{peer public key}}"
```

```javascript
const peersService = require('@coinmesh/lnd-adapter').peersService;

peersService.removePeer(peer.public_key).then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "error": "TODO: Fill this in :)"
}
```

This endpoint removes a connected peer.

### HTTP Request

`DELETE http://localhost:3098/v0/peers/{{peer public key}}`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
public_key | null | Public key of the node to disconnect from



## List Peers

```shell
curl -X GET
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/peers/"
```

```javascript
const paymentsService = require('@coinmesh/lnd-adapter').paymentsService;

paymentsService.getPeers().then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "peers": [{
    "bytes_received": 10,
    "bytes_sent": 10,
    "is_inbound": true,
    "ping_time": 110,
    "public_key": "{{public key}}",
    "socket": "localhost:9735",
    "tokens_received": 30000,
    "tokens_sent": 20000,
    "type": "peers"
  }]
}
```

This endpoint retrieves all of the peers connected to this node.

### HTTP Request

`GET http://localhost:3098/v0/peers/`



## Get Chain Transactions

```shell
curl -X GET
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/transactions/"
```

```javascript
const transactionsService = require('@coinmesh/lnd-adapter').transactionsService;

transactionsService.getChainTransactions().then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
  {
    "transactions": [{
      "block_id": "{{block hash}}",
      "confirmation_count": 1,
      "confirmation_height": 1000,
      "created_at": "new Date()",
      "is_confirmed": true,
      "is_outgoing": false,
      "fee": 1000,
      "id": "{{transaction id}}",
      "output_addresses": "[\"{{address}}\"]",
      "tokens": 20001,
      "type": "transactions"
    }]
  }
```

This endpoint retrieves all of the transactions made on chain from this node.

### HTTP Request

`GET http://localhost:3098/v0/transactions/`



## Get Wallet Info

```shell
curl -X GET
  -H "Content-Type: application/json"
  -H "Authorization: Basic cnBjdXNlcjpycGNwYXNzd29yZA=="
  "http://localhost:3098/v0/wallet_info/"
```

```javascript
const walletInfoService = require('@coinmesh/lnd-adapter').walletInfoService;

walletInfoService.getWalletInfo().then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
  {
    "active_channels_count": 1,
    "alias": "Patricks node",
    "current_block_hash": "{{block hash}}",
    "current_block_height": 1000,
    "is_synced_to_chain": true,
    "is_testnet": false,
    "latest_block_at": "new Date()",
    "peers_count": 1,
    "pending_channels_count": 2,
    "public_key": "{{public key}}",
    "type": "wallet_info",
  }
```

This endpoint retrieves the wallet information.

### HTTP Request

`GET http://localhost:3098/v0/wallet_info/`
