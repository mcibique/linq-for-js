import './index';
import TakeWhileIterator from '../iterators/TakeWhileIterator';

describe('Array.prototype.takeWhile', function () {
  it('should return TakeWhileIterator', function () {
    let takeWhileIterator = [1, 2, 3, 4, 5].takeWhile(item => item > 2);
    expect(takeWhileIterator instanceof TakeWhileIterator).toBe(true);
  });

  describe('when condition is defined', function () {
    let array;

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
    });

    it('should return items that already have been matched and then stop the iteration', function () {
      let result = Array.from(array.takeWhile(item => item < 4));
      expect(result).toEqual([1, 2, 3]);
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
        .takeWhile(customer => customer.name !== 'Anna')
        .takeWhile(customer => customer.age < 18)
      );
      expect(result.length).toBe(1);
      expect(result[0]).toBe(customers[0]);
    });
  });
});
