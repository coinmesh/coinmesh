const PublicApisService = require('../../../services/public-apis');

describe('PublicApisService', () => {
  const knownCurrencyPairs = [
    'btcusd',
    'ethbtc',
    'ethusd',
    'ltcusd',
    'ltcbtc',
    'ltceth',
    'zecusd',
    'zecbtc',
    'zeceth',
    'zecltc'
  ];
  const btcusdPair = knownCurrencyPairs[0];

  let publicApisService;

  beforeEach(() => {
    publicApisService = new PublicApisService();

    // Don't get rate limited by Gemini
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  });

  describe('getTicker()', () => {
    it('returns a ticker data for currency pair', (done) => {
      publicApisService.getTicker(btcusdPair).then(result => {
        expect(!!result.ask).toEqual(true);
        done();
      });
    });
  });

  describe('getCurrentOrderBook()', () => {
    it('returns a ticker data for currency pair', (done) => {
      publicApisService.getCurrentOrderBook(btcusdPair).then(result => {
        expect(Array.isArray(result.bids)).toEqual(true);
        done();
      });
    });
  });

  describe('getTradeHistory()', () => {
    it('returns trade history for a currency pair', (done) => {
      publicApisService.getTradeHistory(btcusdPair).then(result => {
        expect(Array.isArray(result)).toEqual(true);
        done();
      });
    });
  });

  describe('getCurrentAuction()', () => {
    it('returns the current auction information for a currency pair', (done) => {
      publicApisService.getCurrentAuction(btcusdPair).then(result => {
        expect(!!result.next_auction_ms).toEqual(true);
        done();
      });
    });
  });

  describe('getAuctionHistory()', () => {
    it('gets the history for auctions', (done) => {
      publicApisService.getAuctionHistory(btcusdPair).then(result => {
        expect(Array.isArray(result)).toEqual(true);
        done();
      });
    });
  });

  describe('getSymbols()', () => {
    it('returns a list of available symbols', (done) => {
      const currency = 'btc';
      const fakeLabel = 'testing';

      publicApisService.getSymbols(currency, fakeLabel).then(result => {
        expect(result).toEqual(knownCurrencyPairs);
        done();
      });
    });
  });
});
