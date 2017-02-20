import '../Array.prototype.all';
import customersData from '../../test/customers';

describe('Array.prototype.max - chaining', function () {
  let customers;

  beforeEach(function () {
    customers = [ ...customersData ];
  });

  describe('selectMany + select + max', function () {
    it('should return max total of all orders', function () {
      let max = customers
        .selectMany(customer => customer.orders)
        .select(order => order.total)
        .max();

      expect(max).toBe(500);
    });
  });

  describe('selectMany + skip + select + max', function () {
    it('should return max total of all orders that weren\'t skipped', function () {
      let max = customers
        .selectMany(customer => customer.orders)
        .skip(4)
        .select(order => order.total)
        .max();

      expect(max).toBe(450);
    });
  });

  describe('selectMany + take + select + max', function () {
    it('should return max total of all orders that were taken', function () {
      let max = customers
        .selectMany(customer => customer.orders)
        .take(4)
        .select(order => order.total)
        .max();

      expect(max).toBe(500);
    });
  });
});
