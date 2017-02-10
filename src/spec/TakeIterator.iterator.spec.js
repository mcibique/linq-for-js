import TakeIterator from '../TakeIterator';

describe('TakeIterator.iterator', function () {
  describe('when items length is bigger than count', function () {
    let array = [1, 2, 3, 4, 5],
        count = 2;

    it('should return only first X items', function () {
      let iterator = new TakeIterator(array, count);
      let result = Array.from(iterator);
      expect(result.length).toBe(count);
      expect(result).toEqual([1, 2]);
    });
  });

  describe('when items length is equal to count', function () {
    let array = [1, 2, 3, 4, 5],
        count = array.length;

    it('should return all items', function () {
      let iterator = new TakeIterator(array, count);
      let result = Array.from(iterator);
      expect(result).toEqual(array);
    });
  });

  describe('when items length is lower than count', function () {
    let array = [1, 2, 3, 4, 5],
        count = array.length + 1;

    it('should return only all items', function () {
      let iterator = new TakeIterator(array, count);
      let result = Array.from(iterator);
      expect(result).toEqual(array);
    });
  });
});