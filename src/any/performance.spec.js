import './index';

describe('Array.prototype.any - performance', function () {
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

  describe('any', function () {
    it('should terminate execution after first positive match', function () {
      let whereCondition = jest.fn((customer) => customer.age > 18);
      let any = customers.any(whereCondition);
      expect(any).toBe(true);
      expect(whereCondition).toHaveBeenCalledTimes(2);
    });
  });
});
