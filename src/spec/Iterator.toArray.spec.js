import Iterator from '../Iterator';

describe('Iterator.toArray', function () {
  describe('when array has items', function () {
    let array,
        iterator,
        result;

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
      iterator = new Iterator(array);
      result = iterator.toArray();
    });

    it('should iterate over all items in the array', function () {
      expect(result.length).toBe(array.length);
      for (var i = 0, len = array.length; i < len; i++) {
        expect(array[i]).toBe(result[i]);
      }
    });
  });

  describe('when array is empty', function () {
    let array,
        iterator,
        result;

    beforeEach(function () {
      array = [];
      iterator = new Iterator(array);
      result = iterator.toArray();
    });

    it('should result empty array', function () {
      expect(result.length).toBe(array.length);
      expect(result instanceof Array).toBe(true);
    });
  });
});