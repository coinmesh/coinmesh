const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const generatePassword = require('generate-password').generate;

const {addressesRouter} = require('ln-service/routers');
const {authorizer} = require('ln-service/routers');
const {balanceRouter} = require('ln-service/routers');
const {channelsRouter} = require('ln-service/routers');
const {connectionsRouter} = require('ln-service/routers');
const {cryptoRouter} = require('ln-service/routers');
const {exchangeRouter} = require('ln-service/routers');
const {getWalletInfo} = require('ln-service/lightning');
const {historyRouter} = require('ln-service/routers');
const {invoicesRouter} = require('ln-service/routers');
const {lightningDaemon} = require('ln-service/lightning');
const {localLnd} = require('ln-service');
const {networkInfoRouter} = require('ln-service/routers');
const {paymentsRouter} = require('ln-service/routers');
const {peersRouter} = require('ln-service/routers');
const {purchasedRouter} = require('ln-service/routers');
const {rowTypes} = require('ln-service/lightning');
const {transactionsRouter} = require('ln-service/routers');
const {walletInfoRouter} = require('ln-service/routers');
const {walletPasswordPrompt} = require('ln-service/service');

const {verifyClient} = require('ln-service/push');
const {subscribeToGraph} = require('ln-service/push');
const {subscribeToInvoices} = require('ln-service/push');
const {subscribeToTransactions} = require('ln-service/push');

const unlockerLnd = localLnd({is_unlocker: true});
const {createSeed} = require('ln-service/lightning');
const {createWallet} = require('ln-service/lightning');
const {isWalletLocked} = require('ln-service/service');
const {unlockWallet} = require('ln-service/lightning');

const secretsAdapter = require('./services/secrets-adapter');

const WebSocketServer = require('ws').Server;

const log = console.log;
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(basicAuth({authorizer, authorizeAsync: true}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

function getApp(getServer = null) {
  return new Promise((resolve, reject) => {
    return new Promise((res, rej) => {
      let lnd;

      // If there is no wallet yet, create one and save the info
      try {
        lnd = localLnd({});
        // Check if the wallet is locked
        isWalletLocked({}, (lockedError, result) => {
          if (result) {
            secretsAdapter.getPassword().then(walletPassword => {
              if (walletPassword) {
                // Unlock the wallet
                unlockWallet({lnd: unlockerLnd, password: walletPassword}, err => {
                  if (err) {
                    console.error(err);
                    throw err;
                  }
                });
              } else {
                throw new Error('Password file does not exist!');
              }
            });
          }
        });

        return res(lnd);
      } catch(error) {
        // If there is no macaroon file, the wallet hasn't been created yet
        if (error.message.indexOf('ExpectedMacaroonFile') > -1) {

          // Create a seed to use for backing up the wallet
          createSeed({lnd: unlockerLnd}, (err, result) => {
            const password = generatePassword({
                length: 10,
                numbers: true
            });

            let seed = result.seed;

            secretsAdapter.saveSeed(seed).then(() => {
              return secretsAdapter.savePassword(password);
            }).then(() => {
              // Create a wallet using the backup seed
              createWallet({lnd: unlockerLnd, password, seed}, (error, result) => {
                lnd = localLnd({});
                return res(lnd);
              });
            });
          });
        }
      }
    }).then(lnd => {
      let wss;

      if (getServer) {
        const server = getServer(app);

        wss = [
          new WebSocketServer({ server, verifyClient })
        ];
      }

      app.use('/v0/addresses', addressesRouter({lnd, log}));
      app.use('/v0/balance', balanceRouter({lnd, log}));
      app.use('/v0/channels', channelsRouter({lnd, log}));
      app.use('/v0/connections', connectionsRouter({lnd, log}));
      app.use('/v0/crypto', cryptoRouter({lnd, log}));
      app.use('/v0/exchange', exchangeRouter({log}));
      app.use('/v0/history', historyRouter({lnd, log}));
      app.use('/v0/invoices', invoicesRouter({lnd, log, wss}));
      app.use('/v0/network_info', networkInfoRouter({lnd, log}));
      app.use('/v0/payments', paymentsRouter({lnd, log, wss}));
      app.use('/v0/peers', peersRouter({lnd, log}));
      app.use('/v0/purchased', purchasedRouter({lnd, log}));
      app.use('/v0/transactions', transactionsRouter({lnd, log, wss}));
      app.use('/v0/wallet_info', walletInfoRouter({lnd, log}));

      if (wss) {
        subscribeToGraph({lnd, log, wss});
        subscribeToInvoices({lnd, log, wss});
        subscribeToTransactions({lnd, log, wss});
      }

      // catch 404 and forward to error handler
      app.use((req, res, next) => {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
      });

      // error handler
      app.use((err, req, res, next) => {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.json({ error: err });
      });

      return resolve(app);
    })
  });
}

module.exports = getApp;
