import SkipIterator from './SkipIterator';

describe('SkipIterator', function () {

  describe('when count is positive number', function () {
    let array,
        count;

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
      count = 2;
    });

    it('should not throw an error', function () {
      expect(function () {
        let iterator = new SkipIterator(array, count);
      }).not.toThrow();
    });

    it('should expose the given count as a property', function () {
      let iterator = new SkipIterator(array, count);
      expect(iterator.count).toBe(count);
    });

    it('should have own iterator', function () {
      let iterator = new SkipIterator(array, count);
      expect(iterator[Symbol.iterator]()).toBeDefined();
      expect(iterator[Symbol.iterator]()).not.toBe(array[Symbol.iterator]());
    });
  });

  describe('when count is 0', function () {
    let array,
        count;

    beforeEach(function () {
      array = [1, 2];
      count = 0;
    });

    it('should not throw an error', function () {
      expect(function () {
        let iterator = new SkipIterator(array, count);
      }).not.toThrow();
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
        let iterator = new SkipIterator(array, count);
      }).toThrow();
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
        let iterator = new SkipIterator(array, count);
      }).toThrow();
    });
  });

  describe('when count is not a number', function () {
    let array,
        count;

    beforeEach(function () {
      array = [1, 2];
      count = {};
    });

    it('should throw an error', function () {
      expect(function () {
        let iterator = new SkipIterator(array, count);
      }).toThrow();
    });
  });
});
