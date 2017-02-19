import '../Array.prototype.all';
import customersData from '../../test/customers';

describe('Array.prototype.takeWhile - chaining', function () {
  let customers;

  beforeEach(function () {
    customers = [ ...customersData ];
  });

  describe('takeWhile + first', function () {
    describe('when condition matches first X customers', function () {
      it('should return first element', function () {
        let customer = customers
          .takeWhile(customer => customer.age < 65)
          .first();

        expect(customer).toBe(customers[0]);
      });
    });

    describe('when condition doesn\'t match first customer', function () {
      it('should return undefined', function () {
        let customer = customers
          .takeWhile(customer => customer.age > 18)
          .first();

        expect(customer).toBeUndefined();
      });
    });
  });

  describe('takeWhile + count', function () {
    describe('when condition matches first X customers', function () {
      it('should return number of matching customers', function () {
        let count = customers
          .takeWhile(customer => customer.name.startsWith('J'))
          .count();

        expect(count).toBe(2);
      });
    });

    describe('when condition doesn\'t match first customer', function () {
      it('should return 0', function () {
        let count = customers
          .takeWhile(customer => customer.age > 18)
          .count();

        expect(count).toBe(0);
      });
    });
  });

  describe('takeWhile + any', function () {
    describe('when condition matches first X customers', function () {
      it('should return true', function () {
        let any = customers
          .takeWhile(customer => customer.age < 65)
          .any();

        expect(any).toBe(true);
      });
    });

    describe('when condition doesn\'t match first customer', function () {
      it('should return false', function () {
        let any = customers
          .takeWhile(customer => customer.age > 65)
          .any();

        expect(any).toBe(false);
      });
    });
  });

  describe('takeWhile + all', function () {
    describe('when condition matches first X customers', function () {
      it('should return true', function () {
        let all = customers
          .takeWhile(customer => customer.name.startsWith('J'))
          .all(customer => customer.age > 12);

        expect(all).toBe(true);
      });
    });

    describe('when condition doesn\'t match all customers returned by takeWhile call', function () {
      it('should return false', function () {
        let all = customers
          .takeWhile(customer => customer.name.startsWith('J'))
          .all(customer => customer.age > 18);

        expect(all).toBe(false);
      });
    });
  });

  describe('takeWhile + aggregate', function () {
    describe('when condition matches first X customers', function () {
      it('should return aggregated result', function () {
        let aggregated = customers
          .takeWhile(customer => customer.name.startsWith('J'))
          .aggregate((prev, curr) => (prev.name || prev) + ', ' + curr.name);

        expect(aggregated).toBe('John, Joe');
      });
    });

    describe('when condition doesn\'t match first customer', function () {
      it('should return initialValue', function () {
        let aggregated = customers
          .takeWhile(customer => customer.age > 65)
          .aggregate((prev, curr) => (prev.name || prev) + ', ' + curr.name, '');

        expect(aggregated).toBe('');
      });
    });
  });
});
