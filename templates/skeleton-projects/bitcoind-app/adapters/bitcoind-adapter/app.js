const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const addresses = require('./routes/addresses');
const balances = require('./routes/balances');
const blocks = require('./routes/blocks');
const exchangeRates = require('./routes/exchange-rates');
const crypto = require('./routes/crypto');
const networkInfo = require('./routes/network-info');
const peers = require('./routes/peers');
const transactions = require('./routes/transactions');
const walletInfo = require('./routes/wallet-info');
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/v0/addresses', addresses);
app.use('/v0/balances', balances);
app.use('/v0/blocks', blocks);
app.use('/v0/exchange-rates', exchangeRates);
app.use('/v0/crypto', crypto);
app.use('/v0/network-info', networkInfo);
app.use('/v0/peers', peers);
app.use('/v0/transactions', transactions);
app.use('/v0/wallet-info', walletInfo);

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
