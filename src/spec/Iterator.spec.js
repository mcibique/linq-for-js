import Iterator from '../Iterator';

describe('Iterator', function () {
  describe('when array is not defined', function () {
    let array;

    beforeEach(function () {
      array = undefined;
    });

    it('should throw an error', function () {
      expect(function () {
        let iterator = new Iterator(array);
      }).toThrow();
    });
  });

  describe('when array is defined', function () {
    let array;

    beforeEach(function () {
      array = [1, 2];

      it('should not throw an error', function () {
        expect(function () {
          let iterator = new Iterator(array);
        }).not.toThrow();
      });

      it('should expose the given array as a property', function () {
        let iterator = new Iterator(array);
        expect(iterator.arr).toBe(array);
      });

      it('should have own iterator', function () {
        let iterator = new Iterator(array);
        expect(iterator[Symbol.iterator]()).toBe(array[Symbol.iterator]());
      });
    });
  });
});