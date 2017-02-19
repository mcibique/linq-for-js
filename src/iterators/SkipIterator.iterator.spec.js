import SkipIterator from './SkipIterator';

describe('SkipIterator.iterator', function () {
  describe('when items length is bigger than count', function () {
    let array = [1, 2, 3, 4, 5],
        count = 2;

    it('should skip first X items', function () {
      let iterator = new SkipIterator(array, count);
      let result = Array.from(iterator);
      expect(result.length).toBe(array.length - count);
      expect(result).toEqual([3, 4, 5]);
    });
  });

  describe('when items length is equal to count', function () {
    let array = [1, 2, 3, 4, 5],
        count = array.length;

    it('should return an empty array', function () {
      let iterator = new SkipIterator(array, count);
      let result = Array.from(iterator);
      expect(result).toEqual([]);
    });
  });

  describe('when items length is lower than count', function () {
    let array = [1, 2, 3, 4, 5],
        count = array.length + 1;

    it('should return an empty array', function () {
      let iterator = new SkipIterator(array, count);
      let result = Array.from(iterator);
      expect(result).toEqual([]);
    });
  });
});
