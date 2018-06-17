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
    "xterm": "npm:xterm@3.3.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
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
    "npm:buffer@5.1.0": {
      "base64-js": "npm:base64-js@1.3.0",
      "ieee754": "npm:ieee754@1.1.11"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.31"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
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
    },
    "npm:xterm@3.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
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
      "components/card-item.html!github:systemjs/plugin-text@0.0.8.js",
      "components/card-item.js",
      "components/card-list.html!github:systemjs/plugin-text@0.0.8.js",
      "components/card-list.js",
      "components/directory-list.html!github:systemjs/plugin-text@0.0.8.js",
      "components/directory-list.js",
      "components/display-item.html!github:systemjs/plugin-text@0.0.8.js",
      "components/display-item.js",
      "components/network-info.html!github:systemjs/plugin-text@0.0.8.js",
      "components/network-info.js",
      "components/new-channel.html!github:systemjs/plugin-text@0.0.8.js",
      "components/new-channel.js",
      "components/node-info.html!github:systemjs/plugin-text@0.0.8.js",
      "components/node-info.js",
      "components/node-status-list.html!github:systemjs/plugin-text@0.0.8.js",
      "components/node-status-list.js",
      "components/service-status-list.html!github:systemjs/plugin-text@0.0.8.js",
      "components/service-status-list.js",
      "components/terminal-output.html!github:systemjs/plugin-text@0.0.8.js",
      "components/terminal-output.js",
      "main.js",
      "models/adapter.js",
      "models/channel.js",
      "models/client-application.js",
      "models/conf-file.js",
      "models/data-source.js",
      "models/directory.js",
      "models/logic-service.js",
      "models/network-info.js",
      "models/node-status.js",
      "models/project.js",
      "models/service-status.js",
      "models/wallet-info.js",
      "nav-bar.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/adapter-fixtures.js",
      "resources/client-application-fixtures.js",
      "resources/data-source-fixtures.js",
      "resources/logic-service-fixtures.js",
      "resources/node-status-fixtures.js",
      "resources/path-utils.js",
      "resources/service-status-fixtures.js",
      "routes/home/index.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/home/index.js",
      "routes/mount-project/index.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/mount-project/index.js",
      "routes/mounted-project/components/basic-info.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/mounted-project/components/basic-info.js",
      "routes/mounted-project/components/conf-file-details.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/mounted-project/components/conf-file-details.js",
      "routes/mounted-project/components/data-source-options.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/mounted-project/components/data-source-options.js",
      "routes/mounted-project/components/left-nav.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/mounted-project/components/left-nav.js",
      "routes/mounted-project/components/project-info.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/mounted-project/components/project-info.js",
      "routes/mounted-project/components/repository-information.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/mounted-project/components/repository-information.js",
      "routes/mounted-project/index.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/mounted-project/index.js",
      "routes/mounted-project/routes/adapter-details.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/mounted-project/routes/adapter-details.js",
      "routes/mounted-project/routes/client-application-details.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/mounted-project/routes/client-application-details.js",
      "routes/mounted-project/routes/data-source-details.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/mounted-project/routes/data-source-details.js",
      "routes/mounted-project/routes/logic-service-details.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/mounted-project/routes/logic-service-details.js",
      "routes/mounted-project/routes/project-details.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/mounted-project/routes/project-details.js",
      "routes/project-wizard/components/step-five.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/project-wizard/components/step-five.js",
      "routes/project-wizard/components/step-four.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/project-wizard/components/step-four.js",
      "routes/project-wizard/components/step-one.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/project-wizard/components/step-one.js",
      "routes/project-wizard/components/step-six.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/project-wizard/components/step-six.js",
      "routes/project-wizard/components/step-three.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/project-wizard/components/step-three.js",
      "routes/project-wizard/components/step-two.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/project-wizard/components/step-two.js",
      "routes/project-wizard/index.html!github:systemjs/plugin-text@0.0.8.js",
      "routes/project-wizard/index.js",
      "services/adapters.js",
      "services/admin.js",
      "services/client-applications.js",
      "services/data-sources.js",
      "services/http-wrapper.js",
      "services/logic-services.js",
      "services/network-infos.js",
      "services/node-status.js",
      "services/project-store.js",
      "services/registries.js",
      "services/service-status.js",
      "services/web-socket-service.js"
    ]
  },
  depCache: {
    "components/card-item.js": [
      "aurelia-templating"
    ],
    "components/directory-list.js": [
      "aurelia-templating",
      "services/admin",
      "resources/path-utils"
    ],
    "components/display-item.js": [
      "aurelia-templating"
    ],
    "components/network-info.js": [
      "aurelia-templating",
      "services/network-infos"
    ],
    "components/new-channel.js": [
      "aurelia-templating",
      "services/channels"
    ],
    "components/node-info.js": [
      "aurelia-templating",
      "services/network-infos"
    ],
    "components/node-status-list.js": [
      "aurelia-templating",
      "../services/node-status",
      "../models/node-status"
    ],
    "components/service-status-list.js": [
      "aurelia-templating",
      "../services/service-status",
      "../models/service-status"
    ],
    "components/terminal-output.js": [
      "aurelia-templating",
      "services/web-socket-service",
      "xterm",
      "aurelia-router",
      "services/admin"
    ],
    "main.js": [
      "bootstrap"
    ],
    "models/project.js": [
      "./adapter",
      "./client-application",
      "./logic-service",
      "./data-source"
    ],
    "resources/adapter-fixtures.js": [
      "models/adapter"
    ],
    "resources/client-application-fixtures.js": [
      "models/client-application"
    ],
    "resources/data-source-fixtures.js": [
      "models/data-source"
    ],
    "resources/logic-service-fixtures.js": [
      "models/logic-service"
    ],
    "resources/node-status-fixtures.js": [
      "../models/node-status"
    ],
    "resources/service-status-fixtures.js": [
      "../models/service-status"
    ],
    "routes/mount-project/index.js": [
      "aurelia-templating",
      "resources/path-utils",
      "aurelia-router",
      "services/admin",
      "services/project-store"
    ],
    "routes/mounted-project/components/basic-info.js": [
      "aurelia-templating"
    ],
    "routes/mounted-project/components/conf-file-details.js": [
      "aurelia-templating",
      "services/admin"
    ],
    "routes/mounted-project/components/data-source-options.js": [
      "aurelia-templating",
      "services/admin"
    ],
    "routes/mounted-project/components/left-nav.js": [
      "aurelia-templating"
    ],
    "routes/mounted-project/components/project-info.js": [
      "aurelia-templating",
      "services/project-store",
      "aurelia-router"
    ],
    "routes/mounted-project/components/repository-information.js": [
      "aurelia-templating"
    ],
    "routes/mounted-project/index.js": [
      "services/project-store",
      "aurelia-router"
    ],
    "routes/mounted-project/routes/adapter-details.js": [
      "services/project-store",
      "services/admin"
    ],
    "routes/mounted-project/routes/client-application-details.js": [
      "services/project-store",
      "services/admin"
    ],
    "routes/mounted-project/routes/data-source-details.js": [
      "services/project-store",
      "services/admin",
      "models/data-source",
      "aurelia-templating"
    ],
    "routes/mounted-project/routes/logic-service-details.js": [
      "services/project-store",
      "services/admin"
    ],
    "routes/mounted-project/routes/project-details.js": [
      "services/project-store",
      "aurelia-templating"
    ],
    "routes/project-wizard/components/step-five.js": [
      "aurelia-templating",
      "../index"
    ],
    "routes/project-wizard/components/step-four.js": [
      "aurelia-templating",
      "services/client-applications"
    ],
    "routes/project-wizard/components/step-one.js": [
      "aurelia-templating",
      "../index",
      "resources/path-utils"
    ],
    "routes/project-wizard/components/step-six.js": [
      "aurelia-templating",
      "../index"
    ],
    "routes/project-wizard/components/step-three.js": [
      "aurelia-templating",
      "models/logic-service",
      "services/logic-services"
    ],
    "routes/project-wizard/components/step-two.js": [
      "aurelia-templating",
      "models/data-source",
      "models/adapter",
      "services/data-sources",
      "services/adapters"
    ],
    "routes/project-wizard/index.js": [
      "models/project",
      "services/admin",
      "services/project-store",
      "aurelia-router"
    ],
    "services/adapters.js": [
      "./http-wrapper",
      "../models/adapter",
      "../resources/adapter-fixtures"
    ],
    "services/admin.js": [
      "./http-wrapper",
      "../models/directory",
      "../models/project",
      "../models/conf-file"
    ],
    "services/client-applications.js": [
      "./http-wrapper",
      "../models/client-application",
      "../resources/client-application-fixtures"
    ],
    "services/data-sources.js": [
      "./http-wrapper",
      "../models/data-source",
      "../resources/data-source-fixtures"
    ],
    "services/http-wrapper.js": [
      "aurelia-http-client",
      "../../config.json!"
    ],
    "services/logic-services.js": [
      "./http-wrapper",
      "../models/logic-service",
      "../resources/logic-service-fixtures"
    ],
    "services/network-infos.js": [
      "./http-wrapper",
      "models/network-info"
    ],
    "services/node-status.js": [
      "./http-wrapper",
      "../models/node-status",
      "../resources/node-status-fixtures"
    ],
    "services/registries.js": [
      "./http-wrapper"
    ],
    "services/service-status.js": [
      "./http-wrapper",
      "../models/service-status",
      "../resources/service-status-fixtures"
    ]
  }
});