import './index';
import SkipIterator from '../iterators/SkipIterator';

describe('Array.prototype.skip', function () {
  it('should return SkipIterator', function () {
    let skipIterator = [1, 2, 3, 4, 5].skip(3);
    expect(skipIterator instanceof SkipIterator).toBe(true);
  });

  describe('when a count is positive number', function () {
    let array;

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
    });

    it('should skip first X items from the array', function () {
      let result = Array.from(array.skip(3));
      expect(result).toEqual([4, 5]);
    });
  });

  describe('chaining', function () {
    it('should handle chaining', function () {
      let customers = [
        { name: 'John', age: 15 },
        { name: 'Joe', age: 19 },
        { name: 'Anna', age: 21 },
        { name: 'Paul', age: 17 }
      ];

      let result = Array.from(customers
        .skip(2)
        .skip(1)
      );
      expect(result.length).toBe(1);
      expect(result[0]).toBe(customers[3]);
    });
  });
});
