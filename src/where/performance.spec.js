import '../Array.prototype.all';
import customersData from '../../test/customers';

describe('Performance', function () {
  let customers;

  beforeEach(function () {
    customers = [ ...customersData ];
  });

  describe('where iterator', function () {
    let whereCondition,
        result;

    beforeEach(function () {
      whereCondition = jest.fn((customer) => customer.age > 18);
      result = customers.where(whereCondition);
    });

    it('should not execute where condition before first iteration', function () {
      expect(whereCondition).not.toHaveBeenCalled();
    });

    describe('when iteration is performed', function () {
      describe('via Array.from()', function () {
        it('should execute conditions over each customer', function () {
          let filtered = Array.from(result);
          expect(filtered.length).toBe(4);
          expect(whereCondition).toHaveBeenCalledTimes(customers.length);
        });
      });

      describe('via spread operator', function () {
        it('should execute callbacks over each customer', function () {
          let filtered = [...result];
          expect(filtered.length).toBe(4);
          expect(whereCondition).toHaveBeenCalledTimes(customers.length);
        });
      });

      describe('via toArray()', function () {
        it('should execute callbacks over each customer', function () {
          let filtered = result.toArray();
          expect(filtered.length).toBe(4);
          expect(whereCondition).toHaveBeenCalledTimes(customers.length);
        });
      });

      describe('via count()', function () {
        it('should execute conditions over each customer', function () {
          let count = result.count();
          expect(count).toBe(4);
          expect(whereCondition).toHaveBeenCalledTimes(customers.length);
        });
      });

      describe('via aggregate()', function () {
        it('should execute conditions over each customer', function () {
          let aggregated = result.aggregate((prev, curr) => (prev.name || prev) + ' | ' + curr.name);
          expect(aggregated).toBe('Joe | Adele | Ben | Jane');
          expect(whereCondition).toHaveBeenCalledTimes(customers.length);
        });
      });

      describe('via toMap()', function () {
        it('should execute callbacks over each customer', function () {
          let map = result.toMap(customer => customer.id, customer => customer.orders);
          expect(map.size).toBe(4);
          expect(whereCondition).toHaveBeenCalledTimes(customers.length);
        });
      });
    });
  });
});
