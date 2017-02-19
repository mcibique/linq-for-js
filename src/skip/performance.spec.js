import '../Array.prototype.all';
import customersData from '../../test/customers';

describe('Array.prototype.skip - performance', function () {
  let customers;

  beforeEach(function () {
    customers = [ ...customersData ];
  });

  describe('where + skip + select', function () {
    let selectCallback,
        whereCondition,
        skipCount;

    beforeEach(function () {
      selectCallback = jest.fn((customer) => customer.age);
      whereCondition = jest.fn((customer) => customer.age > 18);
      skipCount = 2;
    });

    describe('when iteration is performed', function () {
      let result;

      beforeEach(function () {
        result = customers
          .where(whereCondition)
          .skip(skipCount)
          .select(selectCallback)
          .toArray();
      });

      it('should execute where condition for each customer', function () {
        expect(whereCondition).toHaveBeenCalledTimes(5);
      });

      it('should execute select callback only on customers that were filtered but weren\'t skipped', function () {
        expect(selectCallback).toHaveBeenCalledTimes(2);
      });
    });
  });
});
