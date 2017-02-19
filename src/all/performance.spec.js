import './index';

describe('Array.prototype.all - performance', function () {
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

  describe('all', function () {
    it('should terminate execution after first negative match', function () {
      let whereCondition = jest.fn((customer) => customer.age > 18);
      let all = customers.all(whereCondition);
      expect(all).toBe(false);
      expect(whereCondition).toHaveBeenCalledTimes(1);
    });
  });
});
