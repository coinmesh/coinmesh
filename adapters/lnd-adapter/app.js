const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');

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
const {isWalletLocked} = require('ln-service/service');
const {lightningDaemon} = require('ln-service/lightning');
const {localLnd} = require('ln-service/service');
const {networkInfoRouter} = require('ln-service/routers');
const {paymentsRouter} = require('ln-service/routers');
const {peersRouter} = require('ln-service/routers');
const {purchasedRouter} = require('ln-service/routers');
const {rowTypes} = require('ln-service/lightning');
const {transactionsRouter} = require('ln-service/routers');
const {unlockWallet} = require('ln-service/lightning');
const {walletInfoRouter} = require('ln-service/routers');
const {walletPasswordPrompt} = require('ln-service/service');

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

const lnd = localLnd({});
app.lnd = lnd;

app.use('/v0/addresses', addressesRouter({lnd, log}));
app.use('/v0/balance', balanceRouter({lnd, log}));
app.use('/v0/channels', channelsRouter({lnd, log}));
app.use('/v0/connections', connectionsRouter({lnd, log}));
app.use('/v0/crypto', cryptoRouter({lnd, log}));
app.use('/v0/exchange', exchangeRouter({log}));
app.use('/v0/history', historyRouter({lnd, log}));
app.use('/v0/invoices', invoicesRouter({lnd, log}));
app.use('/v0/network_info', networkInfoRouter({lnd, log}));
app.use('/v0/payments', paymentsRouter({lnd, log}));
app.use('/v0/peers', peersRouter({lnd, log}));
app.use('/v0/purchased', purchasedRouter({lnd, log}));
app.use('/v0/transactions', transactionsRouter({lnd, log}));
app.use('/v0/wallet_info', walletInfoRouter({lnd, log}));

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

module.exports = app;
