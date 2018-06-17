System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.6",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-http-client": "npm:aurelia-http-client@1.2.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "aurelia-router": "npm:aurelia-router@1.0.6",
    "aurelia-templating": "npm:aurelia-templating@1.7.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0",
    "bluebird": "npm:bluebird@3.4.1",
    "bootstrap": "npm:bootstrap@4.0.0",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "jquery": "npm:jquery@2.2.4",
    "json": "github:systemjs/plugin-json@0.3.0",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-binding@1.7.1": {
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1"
    },
    "npm:aurelia-bootstrapper@1.0.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.6",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.6",
      "aurelia-templating": "npm:aurelia-templating@1.7.0",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0"
    },
    "npm:aurelia-dependency-injection@1.3.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-event-aggregator@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.4.0"
    },
    "npm:aurelia-framework@1.0.6": {
      "aurelia-binding": "npm:aurelia-binding@1.7.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-http-client@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-loader-default@1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.4.0"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-pal-browser@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-polyfills@1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.0.6": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-templating-binding@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.7.1",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-templating-resources@1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.7.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-templating-router@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.6",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-templating@1.7.0": {
      "aurelia-binding": "npm:aurelia-binding@1.7.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1"
    },
    "npm:bluebird@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bootstrap@4.0.0": {
      "jquery": "npm:jquery@2.2.4",
      "tether": "github:HubSpot/tether@1.4.3"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.31"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  bundles: {
    "aurelia.js": [
      "github:HubSpot/tether@1.4.3.js",
      "github:HubSpot/tether@1.4.3/js/tether.js",
      "npm:aurelia-animator-css@1.0.1.js",
      "npm:aurelia-animator-css@1.0.1/aurelia-animator-css.js",
      "npm:aurelia-binding@1.7.1.js",
      "npm:aurelia-binding@1.7.1/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0.js",
      "npm:aurelia-bootstrapper@1.0.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.3.2.js",
      "npm:aurelia-dependency-injection@1.3.2/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0.js",
      "npm:aurelia-event-aggregator@1.0.0/aurelia-event-aggregator.js",
      "npm:aurelia-framework@1.0.6.js",
      "npm:aurelia-framework@1.0.6/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-http-client@1.2.1.js",
      "npm:aurelia-http-client@1.2.1/aurelia-http-client.js",
      "npm:aurelia-loader-default@1.0.0.js",
      "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.4.0.js",
      "npm:aurelia-logging@1.4.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.3.js",
      "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0.js",
      "npm:aurelia-pal-browser@1.0.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.7.0.js",
      "npm:aurelia-pal@1.7.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.1.1.js",
      "npm:aurelia-polyfills@1.1.1/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.6.js",
      "npm:aurelia-router@1.0.6/aurelia-router.js",
      "npm:aurelia-task-queue@1.2.1.js",
      "npm:aurelia-task-queue@1.2.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0.js",
      "npm:aurelia-templating-binding@1.0.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.1.1.js",
      "npm:aurelia-templating-resources@1.1.1/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.1.1/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.1.1/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.1.1/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.1.1/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.1.1/binding-signaler.js",
      "npm:aurelia-templating-resources@1.1.1/compose.js",
      "npm:aurelia-templating-resources@1.1.1/css-resource.js",
      "npm:aurelia-templating-resources@1.1.1/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/dynamic-element.js",
      "npm:aurelia-templating-resources@1.1.1/focus.js",
      "npm:aurelia-templating-resources@1.1.1/hide.js",
      "npm:aurelia-templating-resources@1.1.1/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.1.1/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.1.1/if.js",
      "npm:aurelia-templating-resources@1.1.1/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.1.1/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.1.1/repeat.js",
      "npm:aurelia-templating-resources@1.1.1/replaceable.js",
      "npm:aurelia-templating-resources@1.1.1/sanitize-html.js",
      "npm:aurelia-templating-resources@1.1.1/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/show.js",
      "npm:aurelia-templating-resources@1.1.1/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/with.js",
      "npm:aurelia-templating-router@1.0.0.js",
      "npm:aurelia-templating-router@1.0.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0/router-view.js",
      "npm:aurelia-templating@1.7.0.js",
      "npm:aurelia-templating@1.7.0/aurelia-templating.js",
      "npm:bootstrap@4.0.0.js",
      "npm:bootstrap@4.0.0/dist/css/bootstrap.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:bootstrap@4.0.0/dist/js/bootstrap.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js"
    ],
    "app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.8.js",
      "app.js",
      "components/addresses-list.html!github:systemjs/plugin-text@0.0.8.js",
      "components/addresses-list.js",
      "components/balance-info.html!github:systemjs/plugin-text@0.0.8.js",
      "components/balance-info.js",
      "components/card-item.html!github:systemjs/plugin-text@0.0.8.js",
      "components/card-item.js",
      "components/card-list.html!github:systemjs/plugin-text@0.0.8.js",
      "components/card-list.js",
      "components/channels-list.html!github:systemjs/plugin-text@0.0.8.js",
      "components/channels-list.js",
      "components/display-item.html!github:systemjs/plugin-text@0.0.8.js",
      "components/display-item.js",
      "components/get-address.html!github:systemjs/plugin-text@0.0.8.js",
      "components/get-address.js",
      "components/invoice-details.html!github:systemjs/plugin-text@0.0.8.js",
      "components/invoice-details.js",
      "components/invoices-list.html!github:systemjs/plugin-text@0.0.8.js",
      "components/invoices-list.js",
      "components/messages-list.html!github:systemjs/plugin-text@0.0.8.js",
      "components/messages-list.js",
      "components/network-info.html!github:systemjs/plugin-text@0.0.8.js",
      "components/network-info.js",
      "components/new-channel.html!github:systemjs/plugin-text@0.0.8.js",
      "components/new-channel.js",
      "components/new-invoice.html!github:systemjs/plugin-text@0.0.8.js",
      "components/new-invoice.js",
      "components/new-payment.html!github:systemjs/plugin-text@0.0.8.js",
      "components/new-payment.js",
      "components/new-peer.html!github:systemjs/plugin-text@0.0.8.js",
      "components/new-peer.js",
      "components/node-info.html!github:systemjs/plugin-text@0.0.8.js",
      "components/node-info.js",
      "components/peers-list.html!github:systemjs/plugin-text@0.0.8.js",
      "components/peers-list.js",
      "components/wallet-info.html!github:systemjs/plugin-text@0.0.8.js",
      "components/wallet-info.js",
      "main.js",
      "models/address.js",
      "models/balance.js",
      "models/channel.js",
      "models/forwarding-event.js",
      "models/invoice.js",
      "models/message.js",
      "models/network-info.js",
      "models/payment.js",
      "models/peer.js",
      "models/wallet-info.js",
      "nav-bar.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/channels/index.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/channels/index.js",
      "routes/channels/routes/create.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/channels/routes/create.js",
      "routes/channels/routes/list.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/channels/routes/list.js",
      "routes/info/index.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/info/index.js",
      "routes/invoices/index.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/invoices/index.js",
      "routes/invoices/routes/create.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/invoices/routes/create.js",
      "routes/invoices/routes/list.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/invoices/routes/list.js",
      "routes/messages/index.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/messages/index.js",
      "routes/messages/routes/create.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/messages/routes/create.js",
      "routes/messages/routes/list.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/messages/routes/list.js",
      "routes/payments/index.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/payments/index.js",
      "routes/payments/routes/list.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/payments/routes/list.js",
      "routes/payments/routes/pay.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/payments/routes/pay.js",
      "routes/payments/routes/receive.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/payments/routes/receive.js",
      "routes/peers/index.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/peers/index.js",
      "routes/peers/routes/create.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/peers/routes/create.js",
      "routes/peers/routes/list.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/peers/routes/list.js",
      "services/addresses.js",
      "services/balances.js",
      "services/channels.js",
      "services/cryptos.js",
      "services/exchanges.js",
      "services/histories.js",
      "services/http-wrapper.js",
      "services/invoices.js",
      "services/network-infos.js",
      "services/payments.js",
      "services/peers.js",
      "services/transactions.js",
      "services/wallets.js"
    ]
  },
  depCache: {
    "components/addresses-list.js": [
      "aurelia-templating",
      "services/addresses",
      "models/address"
    ],
    "components/balance-info.js": [
      "aurelia-templating"
    ],
    "components/card-item.js": [
      "aurelia-templating"
    ],
    "components/channels-list.js": [
      "aurelia-templating",
      "services/channels",
      "models/channel"
    ],
    "components/display-item.js": [
      "aurelia-templating"
    ],
    "components/get-address.js": [
      "services/addresses"
    ],
    "components/invoice-details.js": [
      "models/invoice"
    ],
    "components/invoices-list.js": [
      "aurelia-templating",
      "services/invoices"
    ],
    "components/messages-list.js": [
      "aurelia-templating",
      "services/cryptos",
      "models/message"
    ],
    "components/network-info.js": [
      "aurelia-templating",
      "services/network-infos"
    ],
    "components/new-channel.js": [
      "aurelia-templating",
      "services/channels"
    ],
    "components/new-invoice.js": [
      "aurelia-templating",
      "services/invoices"
    ],
    "components/new-payment.js": [
      "aurelia-templating",
      "services/payments"
    ],
    "components/new-peer.js": [
      "aurelia-templating",
      "services/peers"
    ],
    "components/node-info.js": [
      "aurelia-templating",
      "services/network-infos"
    ],
    "components/peers-list.js": [
      "aurelia-templating",
      "services/peers"
    ],
    "components/wallet-info.js": [
      "aurelia-templating",
      "services/wallets",
      "services/balances"
    ],
    "main.js": [
      "bootstrap"
    ],
    "routes/channels/index.js": [
      "aurelia-router"
    ],
    "routes/invoices/index.js": [
      "aurelia-router"
    ],
    "routes/messages/index.js": [
      "aurelia-router"
    ],
    "routes/payments/index.js": [
      "aurelia-router"
    ],
    "routes/payments/routes/list.js": [
      "aurelia-router"
    ],
    "routes/payments/routes/receive.js": [
      "services/addresses"
    ],
    "routes/peers/index.js": [
      "aurelia-router"
    ],
    "services/addresses.js": [
      "./http-wrapper",
      "models/address"
    ],
    "services/balances.js": [
      "./http-wrapper",
      "models/balance"
    ],
    "services/channels.js": [
      "./http-wrapper",
      "models/channel"
    ],
    "services/cryptos.js": [
      "./http-wrapper",
      "models/message"
    ],
    "services/exchanges.js": [
      "./http-wrapper",
      "models/exchange-rate"
    ],
    "services/histories.js": [
      "./http-wrapper",
      "models/forwarding-event"
    ],
    "services/http-wrapper.js": [
      "aurelia-http-client",
      "../../config.json!"
    ],
    "services/invoices.js": [
      "./http-wrapper",
      "models/invoice"
    ],
    "services/network-infos.js": [
      "./http-wrapper",
      "models/network-info"
    ],
    "services/payments.js": [
      "./http-wrapper",
      "models/payment"
    ],
    "services/peers.js": [
      "./http-wrapper",
      "models/peer"
    ],
    "services/transactions.js": [
      "./http-wrapper",
      "models/address"
    ],
    "services/wallets.js": [
      "./http-wrapper",
      "models/wallet-info"
    ]
  }
});