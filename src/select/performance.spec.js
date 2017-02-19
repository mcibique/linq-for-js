import '../Array.prototype.all';

describe('Array.prototype.select - performance', function () {
  let customers;

  beforeEach(function () {
    customers = [
      { name: 'John', age: 15 },
      { name: 'Joe', age: 19 },
      { name: 'Adele', age: 21 },
      { name: 'Ben', age: 35 },
      { name: 'Jane', age: 24 }
    ];
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
          expect(selectCallback).toHaveBeenCalledTimes(5);
        });
      });

      describe('via toArray()', function () {
        it('should execute callbacks over each customer', function () {
          let selected = result.toArray();
          expect(selected).toEqual(['John', 'Joe', 'Adele', 'Ben', 'Jane']);
          expect(selectCallback).toHaveBeenCalledTimes(5);
        });
      });

      describe('via spread operator', function () {
        it('should execute callbacks over each customer', function () {
          let selected = [...result];
          expect(selected).toEqual(['John', 'Joe', 'Adele', 'Ben', 'Jane']);
          expect(selectCallback).toHaveBeenCalledTimes(5);
        });
      });

      describe('via aggregate()', function () {
        it('should execute callbacks over each customer', function () {
          let aggregated = result.aggregate((prev, curr) => prev + ' | ' + curr);
          expect(aggregated).toBe('John | Joe | Adele | Ben | Jane');
          expect(selectCallback).toHaveBeenCalledTimes(5);
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
          expect(whereCondition).toHaveBeenCalledTimes(5);
        });

        it('should execute select callback only for items filtered by where condition', function () {
          expect(selectCallback).toHaveBeenCalledTimes(3);
        });
      });
    });
  });
});
