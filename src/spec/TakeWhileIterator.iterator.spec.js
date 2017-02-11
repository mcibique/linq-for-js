import TakeWhileIterator from '../TakeWhileIterator';

describe('TakeWhileIterator.iterator', function () {
  describe('when one item doesn\'t match the given condition', function () {
    let array = [1, 2, 3, 4, 5],
        condition = (item) => item < 4;

    it('should return items that already have been matched and then stop the iteration', function () {
      let spyCondition = jest.fn(condition);
      let iterator = new TakeWhileIterator(array, spyCondition);
      let result = Array.from(iterator);
      expect(result.length).toBe(3);
      expect(result).toEqual([1, 2, 3]);
      expect(spyCondition).toHaveBeenCalledTimes(4);
    });
  });

  describe('when all items matches the condition', function () {
    let array = [1, 2, 3, 4, 5],
        condition = (item) => item < 6;

    it('should return all items', function () {
      let iterator = new TakeWhileIterator(array, condition);
      let result = Array.from(iterator);
      expect(result).toEqual(array);
    });
  });

  describe('when first item doesn\'t match the given condition', function () {
    let array = [1, 2, 3, 4, 5],
        condition = (item) => item < 0;

    it('should return empty array', function () {
      let iterator = new TakeWhileIterator(array, condition);
      let result = Array.from(iterator);
      expect(result.length).toEqual(0);
    });
  });
});