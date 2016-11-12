import SelectIterator from '../SelectIterator';

describe('SelectIterator', function () {

  describe('when callback is defined', function () {
    let array,
        callback;

    beforeEach(function () {
      array = [1, 2];
      callback = (item) => item * 2;
    });

    it('should not throw an error', function () {
      expect(function () {
        let iterator = new SelectIterator(array, callback);
      }).not.toThrow();
    });

    it('should expose the given callback as a property', function () {
      let iterator = new SelectIterator(array, callback);
      expect(iterator.callback).toBe(callback);
    });

    it('should have own iterator', function () {
      let iterator = new SelectIterator(array, callback);
      expect(iterator[Symbol.iterator]()).toBeDefined();
      expect(iterator[Symbol.iterator]()).not.toBe(array[Symbol.iterator]());
    });
  });

  describe('when condition is not defined', function () {
    let array,
        callback;

    beforeEach(function () {
      array = [1, 2];
      callback = undefined;
    });

    it('should throw an error', function () {
      expect(function () {
        let iterator = new SelectIterator(array, callback);
      }).toThrow();
    });
  });

  describe('when condition is not a function', function () {
    let array,
        callback;

    beforeEach(function () {
      array = [1, 2];
      callback = 'Random string';
    });

    it('should throw an error', function () {
      expect(function () {
        let iterator = new SelectIterator(array, callback);
      }).toThrow();
    });
  });
});