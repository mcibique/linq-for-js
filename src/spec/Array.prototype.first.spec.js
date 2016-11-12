import '../Array.prototype';
import Iterator from '../Iterator';

describe('Array.prototype.first', function () {
  describe('when array has items', function () {
    let array,
        result;

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
    });

    describe('and has no condition', function () {
      it('should return first item', function () {
        result = array.first();
        expect(result).toBe(1);
      });
    });

    describe('and has condition', function () {
      describe('when any item matches the given condition', function () {
        it('should return first item', function () {
          result = array.first(item => item > 3);
          expect(result).toBe(4);
        });
      });

      describe('when no item matches the given condition', function () {
        it('should return undefined', function () {
          result = array.first(item => item > 6);
          expect(result).toBeUndefined();
        });
      });
    });
  });

  describe('when array is empty', function () {
    let array,
        result;

    beforeEach(function () {
      array = [];
    });

    describe('and has no condition', function () {
      it('should return undefined', function () {
        result = array.first();
        expect(result).toBeUndefined();
      });
    });

    describe('and has condition', function () {
      it('should return undefined', function () {
        result = array.first(item => item > 3);
        expect(result).toBeUndefined();
      });
    });
  });
});
