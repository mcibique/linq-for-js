import './index';
import TakeIterator from '../iterators/TakeIterator';

describe('Array.prototype.take', function () {
  it('should return TakeIterator', function () {
    let takeIterator = [1, 2, 3, 4, 5].take(3);
    expect(takeIterator instanceof TakeIterator).toBe(true);
  });

  describe('when a count is positive number', function () {
    let array;

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
    });

    it('should get first X items from the array', function () {
      let result = Array.from(array.take(3));
      expect(result).toEqual([1, 2, 3]);
    });
  });

  describe('chaining', function () {
    it('should handle chaining', function () {
      let customers = [
        { name: 'John', age: 15 },
        { name: 'Joe', age: 19 },
        { name: 'Anna', age: 21 }
      ];

      let result = Array.from(customers
        .take(2)
        .take(1)
      );
      expect(result.length).toBe(1);
      expect(result[0]).toBe(customers[0]);
    });
  });
});
