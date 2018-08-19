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

<img width="1183" alt="screen shot 2018-08-14 at 9 04 16 am" src="https://user-images.githubusercontent.com/32662508/44132086-e11752e2-a00b-11e8-9b60-bc641fa3256b.png">

## Create a New Project

CoinMesh will now guide you through the process of setting up the environment for your Litecoin or Bitcoin application.
```
1. Select "Create a new project".
2. Create a new directory by scrolling to the bottom. It should appear at the bottom of the list.
3. Select the circle to the left of the directory you just created then scroll up and click "Select Directory."
4. Select the data source for your project.
5. Select the logic service for your project.  Currently, only HTTP is available.
6. Next, choose the client application for the end user.  Currently, only an empty Aurelia skeleton is available.
7. Give your project a name and description.
8. Finally, review the options you selected.
9. Click create.
```
The browser will refresh and you will see your project successfully mounted on CoinMesh.

<img width="988" alt="screen shot 2018-08-14 at 10 04 11 pm" src="https://user-images.githubusercontent.com/32662508/44132365-0cfaaf42-a00e-11e8-916f-9e5d8d83114d.png">

From here, you can use text editor or sublime to start building out your project!

## Mount a Project

One of the great things about CoinMesh is that developers can easily share apps with one another to use by mounting it on CoinMesh.  Most of the libraries BlockFuse will provide will use docker.

Let's use our "sample-generated-project" as an example of how to mount an app with CoinMesh.  It is a wallet skeleton for Litecoin.  Make sure Docker is running before you continue.

```
$ git clone https://github.com/coinmesh/coinmesh
$ git clone https://github.com/coinmesh/sample-generated-project
$ cd coinmesh
$ npm start
```

Open localhost:9000 on a browser to see the following UI.

<img width="1183" alt="screen shot 2018-08-14 at 9 04 16 am" src="https://user-images.githubusercontent.com/32662508/44132086-e11752e2-a00b-11e8-9b60-bc641fa3256b.png">

Next, click on “Mount an existing Project.”

In the following screen, scroll down to “sample-generated-projects”, click on the circle to the left, scroll back up and choose “select file.”

<img width="999" alt="screen shot 2018-08-14 at 10 15 13 pm" src="https://user-images.githubusercontent.com/32662508/44132599-957facd6-a00f-11e8-90ed-ea924a21b3a8.png">

The browser will refresh and you should see the project successfully mounted on CoinMesh.  Now scroll down and click on `Docker Compose` to compile and run the app.  This will take a few minutes.  You will be able to see activity in the "Output" section of CoinMesh's UI.

<img width="1018" alt="screen shot 2018-08-14 at 10 17 55 pm" src="https://user-images.githubusercontent.com/32662508/44132693-157542de-a010-11e8-8195-e0d03db3831e.png">

Open up localhost:9001 on your browser and the Litecoin wallet UI will appear.

<img width="997" alt="screenshot of wallet app running" src="https://user-images.githubusercontent.com/4238393/44287103-25701600-a231-11e8-91c5-6544a7bf45c5.png">

From here, you can use text editor or sublime to see how the skeleton of the wallet was built with CoinMesh and even fill out the rest of the wallet yourself!
