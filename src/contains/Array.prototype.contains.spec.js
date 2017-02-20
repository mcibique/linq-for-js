import './index';

describe('Array.prototype.contains', function () {
  describe('when array has items', function () {
    let array,
        result;

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
    });

    describe('and has no parameter', function () {
      it('should throw an error', function () {
        expect(function () {
          array.contains();
        }).toThrow();
      });
    });

    describe('and has parameter', function () {
      describe('when any item matches the given parameter', function () {
        it('should return true', function () {
          result = array.contains(3);
          expect(result).toBe(true);
        });
      });

      describe('when no item matches the given parameter', function () {
        it('should return false', function () {
          result = array.contains(6);
          expect(result).toBe(false);
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
      it('should throw an error', function () {
        expect(function () {
          array.contains();
        }).toThrow();
      });
    });

    describe('and has condition', function () {
      it('should return false', function () {
        result = array.contains(3);
        expect(result).toBe(false);
      });
    });
  });
});
