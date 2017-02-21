import './index';
import DistinctIterator from '../iterators/DistinctIterator';

describe('Array.prototype.distinct', function () {
  it('should return DistinctIterator', function () {
    let distinctIterator = [1, 2, 3, 4, 5].distinct();
    expect(distinctIterator instanceof DistinctIterator).toBe(true);
  });

  describe('when array is empty', function () {
    it('should return empty array', function () {
      let result = Array.from([].distinct());
      expect(result).toEqual([]);
    });
  });

  describe('when array is not empty', function () {
    describe('and contains duplicates', function () {
      it('should return only unique values', function () {
        let result = Array.from([1, 2, 1, 5, 3, 4, 2, 5, 3].distinct());
        expect(result).toEqual([1, 2, 5, 3, 4]);
      });
    });

    describe('and doesn\'t contain duplicates', function () {
      it('should return all items', function () {
        let result = Array.from([1, 2, 3, 4, 5].distinct());
        expect(result).toEqual([1, 2, 3, 4, 5]);
      });
    });
  });

  describe('chaining', function () {
    it('should handle chained calls', function () {
      let array = [1, 2, 5, 3, 4, 1, 5];
      let result = Array.from(array
        .distinct()
        .distinct()
      );
      expect(result).toEqual([1, 2, 5, 3, 4]);
    });
  });
});
