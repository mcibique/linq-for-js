import './index';

describe('Array.prototype.max', function () {
  describe('when array has items', function () {
    let array,
      result;

    describe('and has only one item', function () {
      [1, 0, -1].forEach(function (number) {
        it(`should return the item '${number}' in the array`, function () {
          array = [number];
          result = array.max();
          expect(result).toBe(number);
        });
      });

      it('should return NaN for NaN', function () {
        array = [NaN];
        result = array.max();
        expect(isNaN(result)).toBe(true);
      });

      it('should return NaN for object', function () {
        array = [{}];
        result = array.max();
        expect(isNaN(result)).toBe(true);
      });
    });

    describe('and has more than one item', function () {
      describe('and the maximum is at the beginning of the array', function () {
        it('should return maximum from given array', function () {
          array = [3, 2, 1];
          result = array.max();
          expect(result).toBe(3);
        });
      });

      describe('and the maximum is in the middle of the array', function () {
        it('should return maximum from given array', function () {
          array = [2, 3, 1];
          result = array.max();
          expect(result).toBe(3);
        });
      });

      describe('and the maximum is at the end of the array', function () {
        it('should return maximum from given array', function () {
          array = [1, 2, 3];
          result = array.max();
          expect(result).toBe(3);
        });
      });

      describe('and contains negative numbers', function () {
        it('should return maximum from given array', function () {
          array = [-2, -3, -1];
          result = array.max();
          expect(result).toBe(-1);
        });
      });

      describe('and contains NaN', function () {
        it('should return NaN', function () {
          array = [NaN, 1, 2];
          result = array.max();
          expect(isNaN(result)).toBe(true);
        });
      });

      describe('and contains only objects', function () {
        it('should return NaN', function () {
          array = [{}, {}, {}];
          result = array.max();
          expect(isNaN(result)).toBe(true);
        });
      });
    });
  });

  describe('when array is empty', function () {
    it('should return -Infinity', function () {
      let array = [];
      let result = array.max();
      expect(result).toBe(-Infinity);
    });
  });
});
