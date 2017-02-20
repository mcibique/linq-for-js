import '../Array.prototype.all';
import customersData from '../../test/customers';

describe('Array.prototype.min - chaining', function () {
  let customers;

  beforeEach(function () {
    customers = [ ...customersData ];
  });

  describe('selectMany + select + min', function () {
    it('should return min total of all orders', function () {
      let min = customers
        .selectMany(customer => customer.orders)
        .select(order => order.total)
        .min();

      expect(min).toBe(60);
    });
  });

  describe('selectMany + skip + select + min', function () {
    it('should return min total of all orders that weren\'t skipped', function () {
      let min = customers
        .selectMany(customer => customer.orders)
        .skip(4)
        .select(order => order.total)
        .min();

      expect(min).toBe(80);
    });
  });

  describe('selectMany + take + select + min', function () {
    it('should return min total of all orders that were taken', function () {
      let min = customers
        .selectMany(customer => customer.orders)
        .take(4)
        .select(order => order.total)
        .min();

      expect(min).toBe(60);
    });
  });
});
