import './index';
import customersData from '../../test/customers';

describe('Array.prototype.any - performance', function () {
  let customers;

  beforeEach(function () {
    customers = [ ...customersData ];
  });

  describe('any', function () {
    it('should terminate execution after first positive match', function () {
      let whereCondition = jest.fn((customer) => customer.age > 18);
      let any = customers.any(whereCondition);
      expect(any).toBe(true);
      expect(whereCondition).toHaveBeenCalledTimes(2);
    });
  });
});
