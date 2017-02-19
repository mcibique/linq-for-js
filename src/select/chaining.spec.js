import '../Array.prototype.all';
import customersData from '../../test/customers';

describe('Array.prototype.select - chaining', function () {
  let customers;

  beforeEach(function () {
    customers = [ ...customersData ];
  });

  describe('select + first', function () {
    it('should return first element', function () {
      let name = customers
        .select(customer => customer.name)
        .first();

      expect(name).toBe(customers[0].name);
    });
  });

  describe('select + sum', function () {
    it('should return sum of selected elements', function () {
      let sum = customers
        .select(customer => customer.age)
        .sum();

      expect(sum).toBe(114);
    });
  });

  describe('select + any', function () {
    describe('when condition matches any customer', function () {
      it('should return true', function () {
        let any = customers
          .select(customer => customer.name)
          .any(name => name.startsWith('A'));

        expect(any).toBe(true);
      });
    });

    describe('when condition doesn\'t match any customer', function () {
      it('should return false', function () {
        let any = customers
          .select(customer => customer.age)
          .any(age => age > 65);

        expect(any).toBe(false);
      });
    });
  });

  describe('select + all', function () {
    describe('when condition matches all customer', function () {
      it('should return true', function () {
        let all = customers
          .select(customer => customer.age)
          .all(age => age > 12);

        expect(all).toBe(true);
      });
    });

    describe('when condition doesn\'t match all customer', function () {
      it('should return false', function () {
        let all = customers
          .select(customer => customer.name)
          .all(name => name.startsWith('J'));

        expect(all).toBe(false);
      });
    });
  });

  describe('select + take', function () {
    it('should return first X customer names', function () {
      let result = customers
        .select(customer => customer.name)
        .take(2)
        .toArray();

      expect(result.length).toBe(2);
      expect(result).toEqual(['John', 'Joe']);
    });
  });

  describe('select + takeWhile', function () {
    it('should return first X customer ages which match the given condition', function () {
      let result = customers
        .select(customer => customer.name)
        .takeWhile(name => name.startsWith('J'))
        .toArray();

      expect(result.length).toBe(2);
      expect(result).toEqual(['John', 'Joe']);
    });
  });
});
