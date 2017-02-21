import '../Array.prototype.all';
import customersData from '../../test/customers';

describe('Array.prototype.distinct - performance', function () {
  let customers;

  beforeEach(function () {
    customers = [ ...customersData ];
  });

  describe('distinct iterator', function () {
    let selectCallback,
        result;

    beforeEach(function () {
      selectCallback = jest.fn((customer) => customer.name);
      result = customers.select(selectCallback).distinct();
    });

    it('should not execute select callback before first iteration', function () {
      expect(selectCallback).not.toHaveBeenCalled();
    });

    describe('when iteration is performed', function () {
      describe('via Array.from()', function () {
        it('should execute callbacks over each customer', function () {
          let selected = Array.from(result);
          expect(selected).toEqual(['John', 'Joe', 'Adele', 'Ben', 'Jane']);
          expect(selectCallback).toHaveBeenCalledTimes(customers.length);
        });
      });

      describe('via toArray()', function () {
        it('should execute callbacks over each customer', function () {
          let selected = result.toArray();
          expect(selected).toEqual(['John', 'Joe', 'Adele', 'Ben', 'Jane']);
          expect(selectCallback).toHaveBeenCalledTimes(customers.length);
        });
      });

      describe('via spread operator', function () {
        it('should execute callbacks over each customer', function () {
          let selected = [...result];
          expect(selected).toEqual(['John', 'Joe', 'Adele', 'Ben', 'Jane']);
          expect(selectCallback).toHaveBeenCalledTimes(customers.length);
        });
      });

      describe('via aggregate()', function () {
        it('should execute callbacks over each customer', function () {
          let aggregated = result.aggregate((prev, curr) => prev + ' | ' + curr);
          expect(aggregated).toBe('John | Joe | Adele | Ben | Jane');
          expect(selectCallback).toHaveBeenCalledTimes(customers.length);
        });
      });

      describe('via toMap()', function () {
        it('should execute callbacks over each customer', function () {
          let map = result.toMap(name => name, name => name.length);
          expect(map.size).toBe(customers.length);
          expect(selectCallback).toHaveBeenCalledTimes(customers.length);
        });
      });
    });
  });

  describe('distinct + select iterators', function () {
    let selectCallback;

    beforeEach(function () {
      selectCallback = jest.fn((customer) => customer.name);
    });

    describe('chaining', function () {
      let result;

      beforeEach(function () {
        result = [1, 2, 3, 1, 2, 3, 4]
          .distinct()
          .select(selectCallback);
      });

      it('should not execute any condition or callback before first iteration', function () {
        expect(selectCallback).not.toHaveBeenCalled();
      });

      describe('when iteration is performed', function () {
        beforeEach(function () {
          result = result.toArray();
        });

        it('should execute select callback only for unique items', function () {
          expect(selectCallback).toHaveBeenCalledTimes(4);
        });
      });
    });
  });
});
