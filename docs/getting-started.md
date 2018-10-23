# Getting Started

1. [Pre-requisites](#pre-requisites)
1. [NPM Dependencies](#npm-dependencies)
1. [Download and Run CoinMesh](#download-and-run-coinmesh)
1. [Create a New Project](#create-a-new-project)
1. [Mount a Project](#mount-a-project)

## Pre-requisites

You must have Node, NPM, and Docker installed in the environment you are working on

- [node @ or > 8.11.4](https://nodejs.org/en/)
- [npm @ or > 5.5.1](https://nodejs.org/en/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker-Compose](https://docs.docker.com/compose/install/)

## NPM Dependencies

Install gulp and jspm globally through NPM -

```
$ npm install gulp -g
$ npm install jspm -g
```

This is for the build tooling in the client application currently.  We plan  to simplify that process.

## Download and Run Coinmesh

Clone the CoinMesh repo.
```
$ git clone https://github.com/coinmesh/coinmesh.git
```

Next, you can run the app locally with `npm start` in the root directory.  This installs all of the required npm packages in all child directories.

Once the process has finished, open up localhost:9000 on a browser to see the following UI.

<img width="1015" alt="create new project" src="https://user-images.githubusercontent.com/32662508/47314477-a0212d00-d5f6-11e8-9b8a-dfb0fdaf0e9c.png">

## Create a New Project

CoinMesh will now guide you through the process of setting up the environment for your Litecoin or Bitcoin application.
```
1. Select "New Project" on the left sidebar.
2. Create a new directory by scrolling to the bottom. It should appear at the bottom of the list.
3. Select the circle to the left of the directory you just created then scroll up and click "Select Directory."
4. Give your project a name and description.
5. Select a data source and pre-packaged wallet skeleton for your project. In the future, you will be able to customize your own stack between various data sources, logic services, and client application.  But for now, we've packaged the data sources with logic services via http and a web-based aurelia skeleton.
6. Finally, review the options you selected.
7. Click create.
```
The browser will refresh and you will see your project successfully mounted on CoinMesh.  This is what it will look like if you chose bitcoind and lnd wallet skeleton.

<img width="1012" alt="coinmesh ui" src="https://user-images.githubusercontent.com/32662508/47314687-3a817080-d5f7-11e8-81c6-258939285086.png">

From here, you can use your favorite text editor (ex. VSCode, Sublime, etc.) to start building out your project!

You can also click on `Start all Containers` and run the wallet skeleton for your app. You should see the status of the containers updating in the UI as well as the status of each 'project' on the left hand side. Once the client-application shows a status of green with a check it's time to open up the wallet in the browser or by clicking the Open UI button on the App container.

## Mount a Project

One of the great things about CoinMesh is that developers can easily share apps with one another to use by mounting it on CoinMesh.  Most of the libraries BlockFuse will provide will use docker.  Simply download the shared project, click on "Mount a Project", and select the directory of your project.

