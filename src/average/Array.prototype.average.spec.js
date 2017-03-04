import './index';

describe('Array.prototype.average', function () {
  describe('when array has items', function () {
    let array,
      result;

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
    });

    it('should return average value of all items', function () {
      result = array.average();
      expect(result).toBe(3);
    });

    describe('and it contains decimal values', function () {
      beforeEach(function () {
      array = [0.1, 0.2, 0.3, 0.4, 0.5];
    });

      it('should return average value of all items', function () {
        result = array.average();
        expect(result).toBe(0.3);
      });
    });

    describe('and it contains non-numeric values', function () {
      beforeEach(function () {
        array = [1, 2, {}, 4, 5];
      });

      it('should return NaN', function () {
        result = array.average();
        expect(isNaN(result)).toBe(true);
      });
    });
  });

  describe('when array is empty', function () {
    let array,
      result;

    beforeEach(function () {
      array = [];
    });

    it('should return NaN', function () {
      result = array.average();
      expect(isNaN(result)).toBe(true);
    });
  });
});
