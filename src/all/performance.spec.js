import './index';
import customersData from '../../test/customers';

describe('Array.prototype.all - performance', function () {
  let customers;

  beforeEach(function () {
    customers = [ ...customersData ];
  });

  describe('all', function () {
    it('should terminate execution after first negative match', function () {
      let whereCondition = jest.fn((customer) => customer.age > 18);
      let all = customers.all(whereCondition);
      expect(all).toBe(false);
      expect(whereCondition).toHaveBeenCalledTimes(1);
    });
  });
});
