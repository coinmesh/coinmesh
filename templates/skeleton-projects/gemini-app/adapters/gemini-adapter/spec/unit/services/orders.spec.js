const OrdersService = require('../../../services/orders');

describe('OrdersService', () => {
  const path = 'spec/sample-dir/';
  let ordersService;
  let fakeOrder;

  beforeEach(() => {
    fakeOrder = {
      amount: '34.12',
      price: '622.13'
    };
    ordersService = new OrdersService();

    // Don't get rate limited by Gemini
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  });

  describe('getOrders()', () => {
    it('returns the active orders', (done) => {
      ordersService.getOrders().then(result => {
        expect(Array.isArray(result)).toBe(true);
        done();
      });
    });
  });

  describe('newOrder()', () => {
    it('creates a new order', (done) => {
      ordersService.newOrder(fakeOrder).then(result => {
        expect(!!result.order_id).toBe(true);
        done();
      });
    });
  });

  describe('cancelOrder()', () => {
    it('cancels an existing order', (done) => {
      ordersService.newOrder(fakeOrder).then(result => {
        ordersService.cancelOrder(result.order_id).then(result => {
          expect(result.is_cancelled).toBe(true);
          done();
        });
      });
    });
  });

  describe('cancelAllOrders()', () => {
    it('cancels an all existing orders', (done) => {
      let orderIds = [];

      ordersService.newOrder(fakeOrder)
        .then(result => {
          orderIds.push(result.order_id);
          return ordersService.newOrder(fakeOrder);
        }).then(result => {
          orderIds.push(result.order_id);
          ordersService.cancelAllOrders().then(result => {
            orderIds.forEach(id => {
              expect(result.details.cancelledOrders.indexOf(parseInt(id)) > -1).toBe(true);
            });
            done();
          });
      });
    });
  });
});
