# Introduction

## The Problem

Application development on top of Litecoin and Bitcoin is hard. The amount of protocol level knowledge needed in order to effectively leverage a blockchain client is daunting.  The documentation and help needed are sparse when it comes to building a blockchain client.  This unfortunately becomes a point of frustration for developers which then discourages many from continuing in this industry.

It’s time that we focused on making this process easier. This is the heart behind BlockFuse, a blockchain focused software service startup, and why we created CoinMesh. By providing a platform that enables developers to bypass the protocol level knowledge needed to adapt a blockchain client to their projects, we hope to open the floodgates of app development to match the exponential growth LTC and BTC have experienced over this past year.
CoinMesh

## The Startup Kit for Litecoin and Bitcoin App Development

CoinMesh is a n-tier platform that provides the architecture for developers to create flexible and reusable applications. Let’s break down what this means by looking at the four layers of an application stack.
The Four Layers of an Application Stack
In order to create a product that interacts with the blockchain, there are several levels it must go through. For now, we’ve decided to broadly categorize these tiers into four layers to better help conceptualize the value CoinMesh provides:

Data Source— This is the blockchain client your project needs to reference if you want to build on top of Litecoin or Bitcoin. Rather than creating our own independent client that may restrict app development, CoinMesh will offer support to the various blockchain clients already available such as bitcoind, litecoind, and Lightning Labs’ lnd.
Adapter— This layer provides a standard interface for interacting with the Data Source. We do this by providing pre-built libraries adapted to the underlying client you choose.
Logic Service— Written by your team, runs on your hardware. The Logic Service is where you can start laying out the groundwork for your project. This is an API layer that runs on the server and contains the core business logic.
Client Application — This is the layer that the client sees in the browser or native app.

Within the four layers of the application stack, CoinMesh automates the Data Source and the Adapter layers with the click of just a few buttons.

Then after a few more steps, all you have to do is type in the project name and description in order to start building out the foundations of your project in the Logic Service.

In this way, developers can go straight to creating, iterating, and validating their projects instantly.

## Additional Key Features of CoinMesh

OpenSource — CoinMesh is open to the community to be peer-reviewed and so that that the proliferation of application development is unrestricted.
JavaScript — As the most popular language, we have strategically chosen JS to leverage its large community.
Simple — It will be easy to use with an admin view to help troubleshoot errors as well as the ability to restore your project instantly in case your blockchain client crashes.

The Current State of the Blockchain Ecosystem and Looking Forward
As it stands today, blockchain’s financial infrastructure consists of exchanges, payment processors, and custodial management services:

Exchanges provide an “on” and “off” ramp for retail investors.
Payment processors make business logic and fiat sweeps (most of the times) readily available for merchants to accept cryptopayments.
Custodial solutions offer security to institutional investors for securely storing large amounts of cryptocurrency. The payoff of this is the removal of the social stigma surrounding cryptocurrency and making it available to different types of investors.

All of these initiatives have been paramount to the success of Litecoin and Bitcoin as they are the foundations of a stable enough financial infrastructure to support the wave of coming applications to be built. If these three services represent the trunk of a tree, then the applications are its branches. With the advent of SegWit and the rapidly developing Layer 2, we are also at the cusp of being transactionally ready to process a plethora of applications that will bring increased utility to these cryptocurrencies.

The time to empower developers with the necessary tools is now. BlockFuse will be at the forefront of this. Let’s work together to build, increase, and sustain an ecosystem that brings utility on top of a censorship resistant future.
