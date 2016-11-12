import '../Array.prototype';

describe('Array.prototype.count', function () {
  describe('when array has items', function () {
    let array,
        result;

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
    });

    describe('and has no condition', function () {
      it('should return number of all items', function () {
        result = array.count();
        expect(result).toBe(5);
      });
    });

    describe('and has condition', function () {
      describe('when any item matches the given condition', function () {
        it('should return number of all items', function () {
          result = array.count(item => item > 3);
          expect(result).toBe(2);
        });
      });

      describe('when no item matches the given condition', function () {
        it('should return 0', function () {
          result = array.count(item => item > 5);
          expect(result).toBe(0);
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
