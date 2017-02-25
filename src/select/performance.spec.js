import '../Array.prototype.all';
import customersData from '../../test/customers';

describe('Array.prototype.select - performance', function () {
  let customers;

  beforeEach(function () {
    customers = [ ...customersData ];
  });

  describe('select iterator', function () {
    let selectCallback,
        result;

    beforeEach(function () {
      selectCallback = jest.fn((customer) => customer.name);
      result = customers.select(selectCallback);
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

  describe('select + where iterators', function () {
    let selectCallback,
        whereCondition;

    beforeEach(function () {
      selectCallback = jest.fn((customer) => customer.name);
      whereCondition = jest.fn((customer) => customer.age > 20);
    });

    describe('chaining', function () {
      let result;

      beforeEach(function () {
        result = customers
          .where(whereCondition)
          .select(selectCallback);
      });

      it('should not execute any condition or callback before first iteration', function () {
        expect(selectCallback).not.toHaveBeenCalled();
        expect(whereCondition).not.toHaveBeenCalled();
      });

      describe('when iteration is performed', function () {
        beforeEach(function () {
          result = result.toArray();
        });

        it('should execute where condition for every customer', function () {
          expect(whereCondition).toHaveBeenCalledTimes(customers.length);
        });

        it('should execute select callback only for items filtered by where condition', function () {
          expect(selectCallback).toHaveBeenCalledTimes(3);
        });
      });
    });
  });

  describe('select + elementAt', function () {
    let selectCallback;

    beforeEach(function () {
      selectCallback = jest.fn((customer) => customer.name);
    });

    describe('chaining', function () {
      let result;

      beforeEach(function () {
        result = customers.select(selectCallback);
      });

      it('should not execute any condition or callback before first iteration', function () {
        expect(selectCallback).not.toHaveBeenCalled();
      });

      describe('when iteration is performed', function () {
        beforeEach(function () {
          result = result.elementAt(2);
        });

        it('should execute select callback only for first three items', function () {
          expect(result).toBe('Adele');
          expect(selectCallback).toHaveBeenCalledTimes(3);
        });
      });
    });
  });
});
