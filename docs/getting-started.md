# Getting Started

For now you will need to install a few global NPM dependencies -

```
$ npm install gulp -g
$ npm install jspm -g
```

This is for the build tooling in the client application currently.  We plan  to simplify that process.

Pull down this repository.

```
$ git clone https://github.com/coinmesh/coinmesh.git
```

Next, you can run the app locally with `npm start` in the root directory.  This installs all of the required npm packages in all child directories.

## Docker

You will want to have docker installed to run the generated application.

We are currently working on setting up distributions of CoinMesh to make using it even easier.

Once Docker is installed you can run the generated or mounted application by clicking the `Docker Compose` button in the application.

## How to Generate a New Project
1. Select "Create a new project".
1. Select a directory for your projects or create a new one by scrolling to the bottom.
1. Select the data source for your project.
1. Select the logic service for your project.  Currently, only HTTP is available.
1. Next, choose the client application for the end user.  Currently, only an empty Aurelia skeleton is available.
1. Finally, give your project a name and description.  You can review the options you selected before creating your project if you'd like.
1. Click create. 
