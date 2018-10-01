# Litecoind-adapter

## List Addresses

```shell
curl -X POST
  -d '{
      "minConfirmations": 0,
      "includeEmpty": true,
      "includeWatchOnly": false
    }'
  -H "Content-Type: application/json"
  "http://localhost:3009/v0/addresses/listaddresses"
```

```javascript
const addressesService = require('@coinmesh/litecoind-adapter').addressesService;

addressesService.listReceivedByAddress(0, true, false).then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{ "result":
  [
    {
      "address": "mfh71i1bbXSoWsPeQ1Sqpy3ivy2zmtfng3",
      "account": "",
      "amount": 0.1,
      "confirmations": 1,
      "label": "",
      "txids": [
        "f4ea8e9cbcf891bdafc2fc4e3c9b15c3edfb6b83d5a9ecf62b0dba592d3202fe"
      ]
    }
  ],
  "error": null,
  "id": "listreceivedbyaddress"
}
```

This endpoint retrieves all addresses that have been the receiving address in a transaction in this wallet.

### HTTP Request

`POST http://localhost:3009/v0/addresses/listaddresses`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
minConfirmations | 0 | Minimum number of confirmations to include
includeEmpty | true | Whether or not empty addresses should be returned (zero balance)
includeWatchOnly | false | Include addresses which are only being watched


## Get a new Receive Address

```shell
curl "http://localhost:3009/v0/addresses/getnewaddress/?:account_name"
```

```javascript
const addressesService = require('@coinmesh/litecoind-adapter').addressesService;

addressesService.getNewAddress().then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "result": "moM8EywChNZqcSJmnikNKaScMyw9thwDwi",
  "error": null,
  "id": "getnewaddress"
}
```

This endpoint retrieves a new address that the wallet can receive coins on.

### HTTP Request

`http://localhost:3009/v0/addresses/getnewaddress/?:account_name`

### URL Parameters

Parameter | Description
--------- | -----------
account_name | Optional account name to use


## Get Received By Address

```shell
curl -X POST
  -d '{
      "address": "moM8EywChNZqcSJmnikNKaScMyw9thwDwi",
      "minConfirmations": 1
    }'
  -H "Content-Type: application/json"
  "http://localhost:3009/v0/addresses/getreceivedbyaddress"
```

```javascript
const addressesService = require('@coinmesh/litecoind-adapter').addressesService;

addressesService.getReceivedByAddress("moM8EywChNZqcSJmnikNKaScMyw9thwDwi", 1).then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "result":0,
  "error":null,
  "id":"getreceivedbyaddress"
}
```

This endpoint looks up addresses in the wallet (including watch-only) for the amount of received coins.

### HTTP Request

`POST http://localhost:3009/v0/addresses/getreceivedbyaddress`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
address | null | The address to look up received amount.
minConfirmations | null | The minimum number of confirmations to assume the balance.


## Send to an Address

```shell
curl -X POST
  -d '{
      "address": "moM8EywChNZqcSJmnikNKaScMyw9thwDwi",
      "amount": 0.1
    }'
  -H "Content-Type: application/json"
  "http://localhost:3009/v0/addresses/sendtoaddress"
```

```javascript
const addressesService = require('@coinmesh/litecoind-adapter').addressesService;

addressesService.sendToAddress("moM8EywChNZqcSJmnikNKaScMyw9thwDwi", 0.1).then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "result": "fc6c5a8e81ea9cef9abb9c67e7d261ee827c34f4ce15cd86f112cbb33d058a75",
  "error": null,
  "id": "sendtoaddress"
}
```

This endpoint sends creates and broadcasts a transaction that sends the supplied address.

### HTTP Request

`POST http://localhost:3009/v0/addresses/sendtoaddress`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
address | null | The address to the send the coins to.
amount | null | The amount of coins to send


## Get Balance Info

```shell
curl "http://localhost:3009/v0/balances/"
```

```javascript
const balancesService = require('@coinmesh/litecoind-adapter').balancesService;

balancesService.getBalance().then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "result": 12936.99252,
  "error": null,
  "id": "getbalance"
}
```

This endpoint retrieves the balance of the wallet.

### HTTP Request

`http://localhost:3009/v0/balances`

Parameter | Description
--------- | -----------
none | none


## Get Block Info

```shell
curl "http://localhost:3009/v0/blocks/:hash/info"
```

```javascript
const blocksService = require('@coinmesh/litecoind-adapter').blocksService;

let hash = 'f202e9cfb5d40328a4b471b4f1d752bc8b560e3c9f32382968fffb32c1d04a39';
blocksService.getBlock(hash).then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "result": {
    "hash": "e920f6a888352250bdfdc164fd10849e6d3ece079ec06849ac2e98d5339ddcc9",
    "confirmations": 1,
    "strippedsize": 228,
    "size": 264,
    "weight": 948,
    "height": 967,
    "version": 536870912,
    "versionHex": "20000000",
    "merkleroot": "1c6b256351f23d7c36c851b16a4b86ac18305ec3f100c500ebf8f4b34f089c74",
    "tx": [ "1c6b256351f23d7c36c851b16a4b86ac18305ec3f100c500ebf8f4b34f089c74" ],
    "time": 1534798346,
    "mediantime": 1534798345,
    "nonce": 5,
    "bits": "207fffff",
    "difficulty": 4.656542373906925e-10,
    "chainwork": "0000000000000000000000000000000000000000000000000000000000000790",
    "previousblockhash": "1a8b43aaf7a318cba08109aa815afd538581b7bde41cbbf7a0cbd4088d47ddba"
  },
  "error": null,
  "id": "getblock"
}
```

This endpoint retrieves the information about a block.

### HTTP Request

`http://localhost:3009/v0/blocks/:hash/info`

### Url Parameters

Parameter | Description
--------- | -----------
hash | Hash of a block that is known by the node.


## Get Current Block Height of Chain

```shell
curl "http://localhost:3009/v0/blocks/height"
```

```javascript
const blocksService = require('@coinmesh/litecoind-adapter').blocksService;

blocksService.getChainHeight().then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "result": 972,
  "error": null,
  "id": "getblockcount"
}
```

This endpoint retrieves the information about a block.

### HTTP Request

`http://localhost:3009/v0/blocks/height`

Parameter | Description
--------- | -----------
none | none


## Generate Blocks (regtest mode only)

```shell
curl "http://localhost:3009/v0/blocks/generate/:num_of_blocks"
```

```javascript
const blocksService = require('@coinmesh/litecoind-adapter').blocksService;

blocksService.generate(5).then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "result": [
    "9282eaa85b0c9591ade5a64d88b541971e604bb4902d231bf04441634c2d549b",
    "49efce51c4a2c8c4b539ce490ffe2b672a5c9f13829d690a04e789711d002880",
    "b4652422d5ea82365b1eebfdc13127a2a154ba1d79f224148346c3db057232e4",
    "eba31d82278f875ceecf010db5a81fda91c1b91be21f0a97ca3d3578f1e00492",
    "5b8c3a82fa46e601bc7d4cce733809ee5d6c285aacdc1e2a37acfb9a74c415cb"
  ],
  "error": null,
  "id": "generate"
}
```

This endpoint generates additional blocks.  This only works in regtest mode!

### HTTP Request

`http://localhost:3009/v0/blocks/generate/:num_of_blocks`

### Url Parameters

Parameter | Description
--------- | -----------
num_of_blocks | Number of new blocks to generate


## Sign Message

```shell
curl -X POST
  -d '{
      "address": "moM8EywChNZqcSJmnikNKaScMyw9thwDwi",
      "message": "Hello word"
    }'
  -H "Content-Type: application/json"
  "http://localhost:3009/v0/crypto/sign"
```

```javascript
const cryptoService = require('@coinmesh/litecoind-adapter').cryptoService;

let address = 'moM8EywChNZqcSJmnikNKaScMyw9thwDwi';
let message = 'Hello word';

cryptoService.signMessage(address, message).then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "result": "IMB0g6YJEawYtYefPV9rZcuK/EjrSexuYNQ0SqikbZTqaUr4W1b78+CKRMd1UHYQKoKmgGw1B3UdgYyx7wJ03QA=",
  "error": null,
  "id": "signmessage"
}
```

This endpoint returns a message signed by wallet for a specified address.

### HTTP Request

`POST http://localhost:3009/v0/crypto/sign`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
address | none | The address whose private key will be used to sign the message
message | none | The message to sign


## Verify Message

```shell
curl -X POST
  -d '{
      "address": "moM8EywChNZqcSJmnikNKaScMyw9thwDwi",
      "signature": "IMB0g6YJEawYtYefPV9rZcuK",
      "message": "Hello word"
    }'
  -H "Content-Type: application/json"
  "http://localhost:3009/v0/crypto/sign"
```

```javascript
const cryptoService = require('@coinmesh/litecoind-adapter').cryptoService;

let address = 'moM8EywChNZqcSJmnikNKaScMyw9thwDwi';
let signature = 'IMB0g6YJEawYtYefPV9rZcuK';
let message = 'Hello word';

cryptoService.signMessage(address, message).then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "result": true,
  "error": null,
  "id": "verifymessage" }
```

This endpoint returns a message signed by wallet for a specified address.

### HTTP Request

`POST http://localhost:3009/v0/crypto/verify`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
address | none | The address whose key will be used to validate the message
signature | none | The signature to verify
message | none | The message to verify


## Get the current exchange rate

```shell
curl "http://localhost:3009/v0/exchange-rates/:pair/current_rate"
```

```javascript
const exchangeRatesService = require('@coinmesh/litecoind-adapter').exchangeRatesService;

exchangeRatesService.getExchangeRate('ltcusd').then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "high": "58.59",
  "last": "55.81",
  "timestamp": "1534800601",
  "bid": "55.80",
  "vwap": "56.32",
  "volume": "20266.31083135",
  "low": "54.78",
  "ask": "55.92",
  "open": "57.95"
}
```

This endpoint retrieves the latest exchange rate from bitstamp.

### HTTP Request

`http://localhost:3009/v0/exchange-rates/:pair/current_rate`

### URL Parameters

Parameter | Description
--------- | -----------
pair | A currency pair supported by bitstamp.


## Get Network Info

```shell
curl "http://localhost:3009/v0/network-info"
```

```javascript
const networkInfoService = require('@coinmesh/litecoind-adapter').networkInfoService;

networkInfoService.getNetworkInfo().then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "result": {
    "version": 150100,
    "subversion": "/LitecoinCore:0.15.1/",
    "protocolversion": 70015,
    "localservices": "000000000000000d",
    "localrelay": true,
    "timeoffset": 0,
    "networkactive": true,
    "connections": 0,
    "networks": [
      {
        "name": "ipv4",
        "limited": false,
        "reachable": true,
        "proxy": "",
        "proxy_randomize_credentials": false
      }
    ],
    "relayfee": 0.00001,
    "incrementalfee": 0.00001,
    "localaddresses": [],
    "warnings": ""
  },
  "error": null,
  "id": "getnetworkinfo"
}
```

This endpoint retrieves the current network information for the node.

### HTTP Request

`http://localhost:3009/v0/network-info`

### URL Parameters

Parameter | Description
--------- | -----------
none | none


## Get Peer Info

```shell
curl "http://localhost:3009/v0/peers/getpeerinfo"
```

```javascript
const peersService = require('@coinmesh/litecoind-adapter').peersService;

peersService.getPeerInfo().then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "result": [],
  "error": null,
  "id": "getpeerinfo"
}
```

This endpoint retrieves information about the peers the node is currently connected to.

### HTTP Request

`http://localhost:3009/v0/peers/getpeerinfo`

### URL Parameters

Parameter | Description
--------- | -----------
none | none


## Get Recent Transactions

```shell
curl "http://localhost:3009/v0/transactions"
```

```javascript
const transactionsService = require('@coinmesh/litecoind-adapter').transactionsService;

transactionsService.getTransactions().then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "result": [
    {
      "account": "",
      "address": "mx4vtMBLn2mMUq6HnZQDCmr7ZwXaW73ni1",
      "category": "immature",
      "amount": 0.00076293,
      "vout": 0,
      "confirmations": 8,
      "generated": true,
      "blockhash": "665a25b74e321ea123f61b58db50b3ee018a77ad23bd36762a3ca1c0f34a5baf",
      "blockindex": 0,
      "blocktime": 1534801960,
      "txid": "26ecd89229badd6ad337337ff2c3ff11e55cbaa3e6960297267d62ad0c0e47e7",
      "walletconflicts": [],
      "time": 1534801936,
      "timereceived": 1534801936,
      "bip125-replaceable": "no"
    },
  ],
  "error": null,
  "id": "listtransactions"
}
```

This endpoint retrieves the recent transactions that have been made to or from the node.

### HTTP Request

`http://localhost:3009/v0/transactions`

### URL Parameters

Parameter | Description
--------- | -----------
none | none


## Get Wallet Info

```shell
curl "http://localhost:3009/v0/wallet-info"
```

```javascript
const walletInfoService = require('@coinmesh/litecoind-adapter').walletInfoService;

walletInfoService.getTransactions().then(result => {
  console.log(result);
});
```

> The above command returns JSON structured like this:

```json
{
  "error": null,
  "id": "getwalletinfo",
  "result": {
    "balance": 14947.23096741,
    "hdmasterkeyid": "fef59a7b971dbc208322e56075a99b973b623443",
    "immature_balance": 0.04680321,
    "keypoololdest": 1534784895,
    "keypoolsize": 999,
    "keypoolsize_hd_internal": 1000,
    "paytxfee": 0,
    "txcount": 2970,
    "unconfirmed_balance": 0,
    "walletname": "wallet.dat",
    "walletversion": 139900
  }
}
```

This endpoint retrieves the information about the wallet.

### HTTP Request

`http://localhost:3009/v0/wallet-info`

### URL Parameters

Parameter | Description
--------- | -----------
none | none
