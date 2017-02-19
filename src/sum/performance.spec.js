import '../Array.prototype.all';
import customersData from '../../test/customers';

describe('Array.prototype.sum - performance', function () {
  let customers;

  beforeEach(function () {
    customers = [ ...customersData ];
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
        expect(whereCondition).toHaveBeenCalledTimes(5);
      });

      it('should execute select callback only for items filtered by where condition', function () {
        expect(selectCallback).toHaveBeenCalledTimes(3);
      });
    });
  });
});
