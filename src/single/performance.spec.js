import '../Array.prototype.all';
import customersData from '../../test/customers';

describe('Array.prototype.single - performance', function () {
  let customers;

  beforeEach(function () {
    customers = [ ...customersData ];
  });

  describe('single', function () {
    it('should terminate execution after second iteration', function () {
      let whereCondition = jest.fn(customer => customer.age > 18);
      let customer;

      expect(function () {
        customer = customers.single(whereCondition);
      }).toThrow('More than one element found.')

      expect(whereCondition).toHaveBeenCalledTimes(3);
    });
  });
});
