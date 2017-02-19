import Iterator from './Iterator';

describe('Iterator', function () {
  describe('when array is defined', function () {
    let array;

    beforeEach(function () {
      array = [1, 2];
    });

    it('should not throw an error', function () {
      expect(function () {
        let iterator = new Iterator(array);
      }).not.toThrow();
    });

    it('should expose the given array as a property', function () {
      let iterator = new Iterator(array);
      expect(iterator.arr).toBe(array);
    });
  });

  describe('when array is another Iterator', function () {
    let array;

    beforeEach(function () {
      array = new Iterator([1, 2]);
    });

    it('should not throw an error', function () {
      expect(function () {
        let iterator = new Iterator(array);
      }).not.toThrow();
    });
  });

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

  describe('when array is not array', function () {
    let array;

    beforeEach(function () {
      array = 'Random string';
    });

    it('should throw an error', function () {
      expect(function () {
        let iterator = new Iterator(array);
      }).toThrow();
    });
  });
});
