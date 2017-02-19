import '../Array.prototype.all';
import customersData from '../../test/customers';

describe('Array.prototype.selectMany - chaining', function () {
  let customers;

  beforeEach(function () {
    customers = [ ...customersData ];
  });

  describe('selectMany + first', function () {
    it('should return first element', function () {
      let order = customers
        .selectMany(customer => customer.orders)
        .first();

      expect(order).toBe(customers[0].orders[0]);
    });
  });

  describe('selectMany + count', function () {
    it('should return count of all orders', function () {
      let count = customers
        .selectMany(customer => customer.orders)
        .count();

      expect(count).toBe(8);
    });
  });

  describe('selectMany + any', function () {
    describe('when condition matches any order', function () {
      it('should return true', function () {
        let any = customers
          .selectMany(customer => customer.orders)
          .any(order => order.items.length === 1);

        expect(any).toBe(true);
      });
    });

    describe('when condition doesn\'t match any order', function () {
      it('should return false', function () {
        let any = customers
          .selectMany(customer => customer.orders)
          .any(order => order.items.length > 4);

        expect(any).toBe(false);
      });
    });
  });

  describe('selectMany + all', function () {
    describe('when condition matches all orders', function () {
      it('should return true', function () {
        let all = customers
          .selectMany(customer => customer.orders)
          .all(order => order.items.length > 0);

        expect(all).toBe(true);
      });
    });

    describe('when condition doesn\'t match all orders', function () {
      it('should return false', function () {
        let all = customers
          .selectMany(customer => customer.orders)
          .all(order => order.items.length > 1);

        expect(all).toBe(false);
      });
    });
  });

  describe('selectMany + take', function () {
    it('should return first X orders', function () {
      let result = customers
        .selectMany(customer => customer.orders)
        .take(3)
        .toArray();

      expect(result.length).toBe(3);
      expect(result).toEqual([
        customers[0].orders[0],
        customers[0].orders[1],
        customers[1].orders[0]
      ]);
    });
  });

  describe('selectMany + takeWhile', function () {
    it('should return first X orders which match the given condition', function () {
      let result = customers
        .selectMany(customer => customer.orders)
        .takeWhile(order => order.items.length < 4)
        .toArray();

      expect(result.length).toBe(6);
      expect(result).toEqual([
        customers[0].orders[0],
        customers[0].orders[1],
        customers[1].orders[0],
        customers[3].orders[0],
        customers[3].orders[1],
        customers[4].orders[0]
      ]);
    });
  });

  describe('selectMany + selectMany', function () {
    it('should return first X orders which match the given condition', function () {
      let result = customers
        .selectMany(customer => customer.orders)
        .selectMany(order => order.items)
        .toArray();

      expect(result.length).toBe(21);
    });
  });

  describe('selectMany + where', function () {
    it('should select orders which match the given condition', function () {
      let orders = customers
        .selectMany(customer => customer.orders)
        .where(order => order.items.length < 3)
        .toArray();

      expect(orders.length).toBe(3);
      expect(orders).toEqual([
        customers[0].orders[1],
        customers[1].orders[0],
        customers[3].orders[0],
      ]);
    });
  });

  describe('selectMany + select', function () {
    it('should select ids of all orders', function () {
      let orders = customers
        .selectMany(customer => customer.orders)
        .select(order => order.id)
        .toArray();

      expect(orders.length).toBe(8);
      expect(orders).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });
});
