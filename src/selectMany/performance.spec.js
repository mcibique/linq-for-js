import '../Array.prototype.all';
import customersData from '../../test/customers';
import orders from '../../test/orders';

describe('Array.prototype.selectMany - performance', function () {
  let customers;

  beforeEach(function () {
    customers = [ ...customersData ];
  });

  describe('selectMany iterator', function () {
    let selectManyCallback,
        result;

    beforeEach(function () {
      selectManyCallback = jest.fn((customer) => customer.orders);
      result = customers.selectMany(selectManyCallback);
    });

    it('should not execute selectMany callback before first iteration', function () {
      expect(selectManyCallback).not.toHaveBeenCalled();
    });

    describe('when iteration is performed', function () {
      describe('via Array.from()', function () {
        it('should execute callbacks over each customer', function () {
          let selected = Array.from(result);
          expect(selected).toEqual(orders);
          expect(selectManyCallback).toHaveBeenCalledTimes(customers.length);
        });
      });

      describe('via toArray()', function () {
        it('should execute callbacks over each customer', function () {
          let selected = result.toArray();
          expect(selected).toEqual(orders);
          expect(selectManyCallback).toHaveBeenCalledTimes(customers.length);
        });
      });

      describe('via spread operator', function () {
        it('should execute callbacks over each customer', function () {
          let selected = [...result];
          expect(selected).toEqual(orders);
          expect(selectManyCallback).toHaveBeenCalledTimes(customers.length);
        });
      });

      describe('via toMap()', function () {
        it('should execute callbacks over each customer', function () {
          let map = result.toMap(order => order.id, order => order.items);
          expect(map.size).toBe(orders.length);
          expect(selectManyCallback).toHaveBeenCalledTimes(customers.length);
        });
      });
    });
  });

  describe('selectMany + where + first', function () {
    let selectManyCallback,
        whereCondition;

    beforeEach(function () {
      selectManyCallback = jest.fn((customer) => customer.orders);
      whereCondition = jest.fn((order) => order.items.length === 1);
    });

    describe('chaining', function () {
      let result;

      beforeEach(function () {
        result = customers
          .selectMany(selectManyCallback)
          .where(whereCondition);
      });

      it('should not execute any condition or callback before first iteration', function () {
        expect(selectManyCallback).not.toHaveBeenCalled();
        expect(whereCondition).not.toHaveBeenCalled();
      });

      describe('when iteration is performed', function () {
        beforeEach(function () {
          result = result.first();
        });

        it('should execute where condition for each order', function () {
          expect(whereCondition).toHaveBeenCalledTimes(3);
        });

        it('should execute select callback only until first yields first result', function () {
          expect(selectManyCallback).toHaveBeenCalledTimes(2);
        });
      });
    });
  });
});
