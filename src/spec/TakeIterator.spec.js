import TakeIterator from '../TakeIterator';

describe('TakeIterator', function () {

  describe('when count is defined', function () {
    let array,
        count;

    beforeEach(function () {
      array = [1, 2];
      count = 2;
    });

    it('should not throw an error', function () {
      expect(function () {
        let iterator = new TakeIterator(array, count);
      }).not.toThrow();
    });

    it('should expose the given condition as a property', function () {
      let iterator = new TakeIterator(array, count);
      expect(iterator.count).toBe(count);
    });

    it('should have own iterator', function () {
      let iterator = new TakeIterator(array, count);
      expect(iterator[Symbol.iterator]()).toBeDefined();
      expect(iterator[Symbol.iterator]()).not.toBe(array[Symbol.iterator]());
    });
  });

  describe('when count is not defined', function () {
    let array,
        count;

    beforeEach(function () {
      array = [1, 2];
      count = undefined;
    });

    it('should throw an error', function () {
      expect(function () {
        let iterator = new TakeIterator(array, count);
      }).toThrow();
    });
  });

  describe('when count is 0', function () {
    let array,
        count;

    beforeEach(function () {
      array = [1, 2];
      count = 0;
    });

    it('should throw an error', function () {
      expect(function () {
        let iterator = new TakeIterator(array, count);
      }).toThrow();
    });
  });

  describe('when count is negative number', function () {
    let array,
        count;

    beforeEach(function () {
      array = [1, 2];
      count = -1;
    });

    it('should throw an error', function () {
      expect(function () {
        let iterator = new TakeIterator(array, count);
      }).toThrow();
    });
  });
});