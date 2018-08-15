# Overview of a Client Application

The client application is the application served in the browser.  This can be written in a traditional manner where the application talks to a central database and services in addition to the node or even as a decentralized application that only uses the litecoin or bitcoin blockchain as a decentralized ledger.

The sample application that is generated contains the `src` directory with the files that need to be edited.  These are built in to the `dist` directory.  The generated app contains the following directories (they are not enforced so you are welcome to change anything of course!) -

## Components

Re-usable components that you use around your app can go here.  An example might be a component for displaying balance of a wallet.

## Services

The services interact back with the logic services.  You can use this to abstract out API calls.

## Models

You can use the models to add functionality to various objects built in your application.  For example, if you have a `wallet` model instead of having the same code around your app for adding a new address you could add it to the model and call that code on the model instance.

## Routes

The routes are what is currently serving the web page when the URL changes.  The routes should reuse the components from the components directory above to compose functional User Interfaces.
