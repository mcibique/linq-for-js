import '../Array.prototype.all';
import customersData from '../../test/customers';

describe('Array.prototype.contains - performance', function () {
  let customers;

  beforeEach(function () {
    customers = [...customersData];
  });

  describe('select + contains', function () {
    let result,
      selectCallback;

    beforeEach(function () {
      selectCallback = jest.fn((customer) => customer.name);
    });

    describe('when iteration is performed', function () {
      beforeEach(function () {
        result = customers
          .select(selectCallback)
          .contains('Ben');

        expect(result).toBe(true);
      });

      it('should execute select callback until first customer matches the parameter', function () {
        expect(selectCallback).toHaveBeenCalledTimes(4);
      });
    });
  });

  describe('take + contains', function () {
    let selectCallback,
      takeCount;

    beforeEach(function () {
      selectCallback = jest.fn(customer => customer.age);
      takeCount = 3;
    });

    describe('when iteration is performed', function () {
      let result;

      beforeEach(function () {
        result = customers
          .select(selectCallback)
          .take(takeCount)
          .contains(19);

        expect(result).toBe(true);
      });

      it('should ignore the takeCount and execute selectCallback only two times', function () {
        expect(selectCallback).toHaveBeenCalledTimes(2);
      });
    });
  });

  describe('takeWhile + contains', function () {
    let takeWhileCallback;

    beforeEach(function () {
      takeWhileCallback = jest.fn(customer => customer.age < 100);
    });

    describe('when iteration is performed', function () {
      let result;

      beforeEach(function () {
        result = customers
          .takeWhile(takeWhileCallback)
          .contains(customers[2]);

        expect(result).toBe(true);
      });

      it('should iterate takeWhileCallback only three times', function () {
        expect(takeWhileCallback).toHaveBeenCalledTimes(3);
      });
    });
  });

  describe('selectMany + contains', function () {
    let selectMany1Callback,
      selectMany2Callback;

    beforeEach(function () {
      selectMany1Callback = jest.fn(customer => customer.orders);
      selectMany2Callback = jest.fn(order => order.items);
    });

    describe('when iteration is performed', function () {
      let result;

      beforeEach(function () {
        result = customers
          .selectMany(selectMany1Callback)
          .selectMany(selectMany2Callback)
          .contains(11);

        expect(result).toBe(true);
      });

      it('should iterate selectMany1Callback only once', function () {
        expect(selectMany1Callback).toHaveBeenCalledTimes(1);
      });

      it('should iterate selectMany2Callback only once', function () {
        expect(selectMany2Callback).toHaveBeenCalledTimes(2);
      });
    });
  });
});
