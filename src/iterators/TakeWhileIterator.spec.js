import TakeWhileIterator from './TakeWhileIterator';

describe('TakeWhileIterator', function () {

  describe('when condition is defined', function () {
    let array,
        condition;

    beforeEach(function () {
      array = [1, 2];
      condition = (item) => item > 1;
    });

    it('should not throw an error', function () {
      expect(function () {
        let iterator = new TakeWhileIterator(array, condition);
      }).not.toThrow();
    });

    it('should expose the given condition as a property', function () {
      let iterator = new TakeWhileIterator(array, condition);
      expect(iterator.condition).toBe(condition);
    });

    it('should have own iterator', function () {
      let iterator = new TakeWhileIterator(array, condition);
      expect(iterator[Symbol.iterator]()).toBeDefined();
      expect(iterator[Symbol.iterator]()).not.toBe(array[Symbol.iterator]());
    });
  });

  describe('when condition is not defined', function () {
    let array,
        condition;

    beforeEach(function () {
      array = [1, 2];
      condition = undefined;
    });

    it('should throw an error', function () {
      expect(function () {
        let iterator = new TakeWhileIterator(array, condition);
      }).toThrow();
    });
  });

  describe('when condition is not a function', function () {
    let array,
        condition;

    beforeEach(function () {
      array = [1, 2];
      condition = 'Random string';
    });

    it('should throw an error', function () {
      expect(function () {
        let iterator = new TakeWhileIterator(array, condition);
      }).toThrow();
    });
  });
});