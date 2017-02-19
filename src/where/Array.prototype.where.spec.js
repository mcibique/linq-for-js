import './index';
import WhereIterator from '../iterators/WhereIterator';

describe('Array.prototype.where', function () {
  it('should return WhereIterator', function () {
    let whereIterator = [1, 2, 3, 4, 5].where(item => item > 2);
    expect(whereIterator instanceof WhereIterator).toBe(true);
  });

  describe('when condition is defined', function () {
    let array;

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
    });

    it('should filter item by the given condition', function () {
      let result = Array.from(array.where(item => item > 3));
      expect(result.length).toBe(2);
      expect(result[0]).toBe(4);
      expect(result[1]).toBe(5);
    });
  });

  describe('chaining', function () {
    it('should handle chained conditions', function () {
      let customers = [
        { name: 'John', age: 15 },
        { name: 'Joe', age: 19 },
        { name: 'Anna', age: 21 }
      ];

      let result = Array.from(customers
        .where(customer => customer.age > 18)
        .where(customer => customer.name.startsWith('J'))
      );
      expect(result.length).toBe(1);
      expect(result[0]).toBe(customers[1]);
    });
  });
});
