import '../Array.prototype.all';
import customersData from '../../test/customers';

describe('Array.prototype.take - performance', function () {
  let customers;

  beforeEach(function () {
    customers = [ ...customersData ];
  });

  describe('where + take + select', function () {
    let selectCallback,
        whereCondition,
        takeCount;

    beforeEach(function () {
      selectCallback = jest.fn((customer) => customer.age);
      whereCondition = jest.fn((customer) => customer.age > 18);
      takeCount = 2;
    });

    describe('when iteration is performed', function () {
      let result;

      beforeEach(function () {
        result = customers
          .where(whereCondition)
          .take(takeCount)
          .select(selectCallback)
          .toArray();
      });

      it('should execute where condition until number of matched customers is 2', function () {
        expect(whereCondition).toHaveBeenCalledTimes(3);
      });

      it('should execute select callback only 2 times', function () {
        expect(selectCallback).toHaveBeenCalledTimes(2);
      });
    });
  });

  describe('where + take + where', function () {
    let whereCondition1,
        whereCondition2,
        takeCount;

    beforeEach(function () {
      whereCondition1 = jest.fn((customer) => customer.name.startsWith('J'));
      whereCondition2 = jest.fn((customer) => customer.age > 18);
      takeCount = 2;
    });

    describe('when iteration is performed', function () {
      let result;

      beforeEach(function () {
        result = customers
          .where(whereCondition1)
          .take(takeCount)
          .where(whereCondition2)
          .toArray();
      });

      it('should execute 1st where condition until number of matched customers is 2', function () {
        expect(whereCondition1).toHaveBeenCalledTimes(2);
      });

      it('should execute 2nd where condition only for customer taken by take(2)', function () {
        expect(whereCondition2).toHaveBeenCalledTimes(2);
      });
    });
  });

  describe('takeWhile + take', function () {
    let takeWhileCallback,
        takeCount;

    beforeEach(function () {
      takeWhileCallback = jest.fn(customer => customer.age < 100);
      takeCount = 2;
    });

    describe('when iteration is performed', function () {
      let result;

      beforeEach(function () {
        result = customers
          .takeWhile(takeWhileCallback)
          .take(takeCount)
          .toArray();
      });

      it('should iterate takeWhileCallback twice', function () {
        expect(takeWhileCallback).toHaveBeenCalledTimes(2);
      });
    });
  });

  describe('selectMany + take', function () {
    let selectManyCallback,
        takeCount;

    beforeEach(function () {
      selectManyCallback = jest.fn(customer => customer.orders);
      takeCount = 5;
    });

    describe('when iteration is performed', function () {
      let result;

      beforeEach(function () {
        result = customers
          .selectMany(selectManyCallback)
          .take(takeCount)
          .toArray();
      });

      it('should iterate takeWhileCallback four times', function () {
        expect(selectManyCallback).toHaveBeenCalledTimes(4);
      });
    });
  });
});
