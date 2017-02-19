import '../Array.prototype.all';

describe('Array.prototype.first - performance', function () {
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

  describe('first', function () {
    it('should terminate execution after first positive match', function () {
      let whereCondition = jest.fn((customer) => customer.age > 18);
      let customer = customers.first(whereCondition);
      expect(customer).toBe(customers[1]);
      expect(whereCondition).toHaveBeenCalledTimes(2);
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

      it('should execute select callback only once', function () {
        expect(selectCallback).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('take + first', function () {
    let selectCallback,
        takeCount;

    beforeEach(function () {
      selectCallback = jest.fn(customer => customer);
      takeCount = 3;
    });

    describe('when iteration is performed', function () {
      let result;

      beforeEach(function () {
        result = customers
          .select(selectCallback)
          .take(takeCount)
          .first();
      });

      it('should ignore the takeCount and execute selectCallback only once', function () {
        expect(selectCallback).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('takeWhile + first', function () {
    let takeWhileCallback;

    beforeEach(function () {
      takeWhileCallback = jest.fn(customer => customer.age < 100);
    });

    describe('when iteration is performed', function () {
      let result;

      beforeEach(function () {
        result = customers
          .takeWhile(takeWhileCallback)
          .first();
      });

      it('should iterate takeWhileCallback only once', function () {
        expect(takeWhileCallback).toHaveBeenCalledTimes(1);
      });
    });
  });
});
