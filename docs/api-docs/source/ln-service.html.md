---
title: lnd-adapter Docs

language_tabs: # must be one of https://git.io/vQNgJ
  - javascript

toc_footers:
  - <a href='https://github.com/coinmesh'>Github</a>
  - <a href='https://github.com/lord/slate'>Documentation Powered by Slate</a>

includes:
  - errors

search: true
---

# Introduction

The LND Adapter is an adapter that wraps a library originally @alexbosworth to manage an LND node with JavaScript using gRpc.

Below are some of the end-points that are available.

# Installation

Install the `lnd-adapter` in any project.  With CoinMesh, we recommend using it through a logic service.

```shell
$ npm install @coinmesh/lnd-adapter
```

# Addresses

## Create a new Address

```javascript
const addresses = require('lnd-adapter').addresses;

addresses.createAddress().then(newAddress => {
  console.log(newAddress);
});
```

> The above command returns JSON structured like this:

```json
{
  "id": 1,
  "address": 123456701239
}
```
