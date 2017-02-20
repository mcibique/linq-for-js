import '../Array.prototype.all';
import customersData from '../../test/customers';

describe('Array.prototype.skip - chaining', function () {
  let customers;

  beforeEach(function () {
    customers = [ ...customersData ];
  });

  describe('skip + first', function () {
    it('should return first element after X skipped', function () {
        let customer = customers
          .skip(3)
          .first();

        expect(customer).toBe(customers[3]);
      });
  });

  describe('skip + any', function () {
    describe('when condition matches any non-skipped customer', function () {
      it('should return true', function () {
        let any = customers
          .skip(3)
          .any(customer => customer.name.startsWith('J'));

        expect(any).toBe(true);
      });
    });

    describe('when condition doesn\'t match first customer', function () {
      it('should return false', function () {
        let any = customers
          .skip(3)
          .any(customer => customer.age < 18);

        expect(any).toBe(false);
      });
    });
  });

  describe('skip + all', function () {
    describe('when condition matches all non-skipped customers', function () {
      it('should return true', function () {
        let all = customers
          .skip(3)
          .all(customer => customer.orders.length > 0);

        expect(all).toBe(true);
      });
    });

    describe('when condition doesn\'t match all non-skipped customers', function () {
      it('should return false', function () {
        let all = customers
          .skip(2)
          .all(customer => customer.orders.length > 0);

        expect(all).toBe(false);
      });
    });
  });

  describe('skip + contains', function () {
    describe('when parameter matches any non-skipped customer', function () {
      it('should return true', function () {
        let contains = customers
          .skip(3)
          .contains(customers[3]);

        expect(contains).toBe(true);
      });
    });

    describe('when parameter doesn\'t match any non-skipped customer', function () {
      it('should return false', function () {
        let contains = customers
          .skip(3)
          .contains(customers[2]);

        expect(contains).toBe(false);
      });
    });
  });

  describe('skip + aggregate', function () {
    it('should return aggregated result', function () {
      let aggregated = customers
        .skip(3)
        .aggregate((prev, curr) => (prev.name || prev) + ', ' + curr.name);

      expect(aggregated).toBe('Ben, Jane');
    });
  });
});
