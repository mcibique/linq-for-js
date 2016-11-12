import '../Array.prototype';
import Iterator from '../Iterator';

describe('Array.prototype.count', function () {
  describe('when array has items', function () {
    let array,
        result;

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
    });

    describe('and has no condition', function () {
      it('should return number of items', function () {
        result = array.count();
        expect(result).toBe(5);
      });
    });

    describe('and has condition', function () {
      it('should return number of items that match the given condition', function () {
        result = array.count(item => item > 3);
        expect(result).toBe(2);
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
      it('should return 0', function () {
        result = array.count();
        expect(result).toBe(0);
      });
    });

    describe('and has condition', function () {
      it('should return undefined', function () {
        result = array.count(item => item > 3);
        expect(result).toBe(0);
      });
    });
  });
});
