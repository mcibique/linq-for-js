import WhereIterator from '../WhereIterator';

describe('WhereIterator.iterator', function () {
  describe('when items match the given condition', function () {
    let array = [1, 2, 3, 4, 5],
        condition =  (item) => item > 2;

    it('should return matched items', function () {
      let spyCondition = jest.fn(condition);
      let iterator = new WhereIterator(array, spyCondition);
      let result = Array.from(iterator);
      expect(result.length).toBe(3);
      expect(result[0]).toBe(3);
      expect(spyCondition).toHaveBeenCalledTimes(5);
    });
  });

  describe('when no item matches the condition', function () {
    let array = [1, 2, 3, 4, 5],
        condition =  (item) => item > 6;

    it('should return empty array', function () {
      let iterator = new WhereIterator(array, condition);
      let result = Array.from(iterator);
      expect(result).toBeDefined();
      expect(result.length).toBe(0);
    });
  });
});