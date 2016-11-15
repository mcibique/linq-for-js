import '../Array.prototype';

describe('Performance', function () {
  let customers;

  beforeEach(function () {
    customers = [
      { name: 'John', age: 15 },
      { name: 'Joe', age: 19 },
      { name: 'Adele', age: 21 }
    ];
  });

  describe('all', function () {
    it('should terminate execution after first negative match', function () {
      let whereCondition = jest.fn((customer) => customer.age > 18);
      let all = customers.all(whereCondition);
      expect(all).toBe(false);
      expect(whereCondition).toHaveBeenCalledTimes(1);
    });
  });

  describe('any', function () {
    it('should terminate execution after first positive match', function () {
      let whereCondition = jest.fn((customer) => customer.age > 18);
      let any = customers.any(whereCondition);
      expect(any).toBe(true);
      expect(whereCondition).toHaveBeenCalledTimes(2);
    });
  });

  describe('first', function () {
    it('should terminate execution after first positive match', function () {
      let whereCondition = jest.fn((customer) => customer.age > 18);
      let customer = customers.first(whereCondition);
      expect(customer).toBe(customers[1]);
      expect(whereCondition).toHaveBeenCalledTimes(2);
    });
  });

  describe('where iterator', function () {
    let whereCondition,
        result;

    beforeEach(function () {
      whereCondition = jest.fn((customer) => customer.age > 18);
      result = customers.where(whereCondition);
    });

    it('should not execute where condition before first iteration', function () {
      expect(whereCondition).not.toHaveBeenCalled();
    });

    describe('when iteration is performed', function () {
      describe('via Array.from()', function () {
        it('should execute conditions over each customer', function () {
          let filtered = Array.from(result);
          expect(filtered.length).toBe(2);
          expect(whereCondition).toHaveBeenCalledTimes(3);
        });
      });

      describe('via toArray()', function () {
        it('should execute callbacks over each customer', function () {
          let filtered = result.toArray();
          expect(filtered.length).toBe(2);
          expect(whereCondition).toHaveBeenCalledTimes(3);
        });
      });

      describe('via count()', function () {
        it('should execute conditions over each customer', function () {
          let count = result.count();
          expect(count).toBe(2);
          expect(whereCondition).toHaveBeenCalledTimes(3);
        });
      });

      describe('via aggregate()', function () {
        it('should execute conditions over each customer', function () {
          let aggregated = result.aggregate((prev, curr) => prev.name + ' | ' + curr.name);
          expect(aggregated).toBe('Joe | Adele');
          expect(whereCondition).toHaveBeenCalledTimes(3);
        });
      });
    });
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
          expect(selected).toEqual(['John', 'Joe', 'Adele']);
          expect(selectCallback).toHaveBeenCalledTimes(3);
        });
      });

      describe('via toArray()', function () {
        it('should execute callbacks over each customer', function () {
          let selected = result.toArray();
          expect(selected).toEqual(['John', 'Joe', 'Adele']);
          expect(selectCallback).toHaveBeenCalledTimes(3);
        });
      });

      describe('via aggregate()', function () {
        it('should execute callbacks over each customer', function () {
          let aggregated = result.aggregate((prev, curr) => prev + ' | ' + curr);
          expect(aggregated).toBe('John | Joe | Adele');
          expect(selectCallback).toHaveBeenCalledTimes(3);
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
          expect(whereCondition).toHaveBeenCalledTimes(3);
        });

        it('should execute select callback only for items filtered by where condition', function () {
          expect(selectCallback).toHaveBeenCalledTimes(1);
        });
      });
    });
  });

  describe('where + select + first', function () {
    let selectCallback,
        whereCondition;

    beforeEach(function () {
      selectCallback = jest.fn((customer) => customer.name);
      whereCondition = jest.fn((customer) => customer.age > 18);
    });

    describe('when iteration is performed', function () {
      let name;

      beforeEach(function () {
        name = customers
          .where(whereCondition)
          .select(selectCallback)
          .first();
      });

      it('should execute where condition until first customer matches', function () {
        expect(whereCondition).toHaveBeenCalledTimes(2);
      });

      it('should execute select callback only for items filtered by where condition', function () {
        expect(selectCallback).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('where + select + sum', function () {
    let selectCallback,
        whereCondition;

    beforeEach(function () {
      selectCallback = jest.fn((customer) => customer.age);
      whereCondition = jest.fn((customer) => customer.name.startsWith('J'));
    });

    describe('when iteration is performed', function () {
      let sum;

      beforeEach(function () {
        sum = customers
          .where(whereCondition)
          .select(selectCallback)
          .sum();
      });

      it('should execute where condition until first customer matches', function () {
        expect(whereCondition).toHaveBeenCalledTimes(3);
      });

      it('should execute select callback only for items filtered by where condition', function () {
        expect(selectCallback).toHaveBeenCalledTimes(2);
      });
    });
  });
});