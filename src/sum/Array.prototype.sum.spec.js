import './index';

describe('Array.prototype.sum', function () {
  describe('when array has items', function () {
    let array;

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
    });

    it('should return sum of all numbers', function () {
      let result = array.sum();
      expect(result).toBe(15);
    });
  });

  describe('when array is empty', function () {
    let array;

    beforeEach(function () {
      array = [];
    });

    it('should return 0', function () {
      let result = array.sum();
      expect(result).toBe(0);
    });
  });
});
