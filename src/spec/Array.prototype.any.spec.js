import '../Array.prototype';

describe('Array.prototype.any', function () {
  describe('when array has items', function () {
    let array;

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
    });

    describe('and has no condition', function () {
      it('should return true', function () {
        let result = array.any();
        expect(result).toBe(true);
      });
    });

    describe('and has condition', function () {
      describe('when any item matches the given condition', function () {
        it('should return true', function () {
          let result = array.any(item => item > 4);
          expect(result).toBe(true);
        });
      });

      describe('when no item matches the given condition', function () {
        it('should return false', function () {
          let result = array.any(item => item > 6);
          expect(result).toBe(false);
        });
      });
    });
  });

  describe('when array is empty', function () {
    let array;

    beforeEach(function () {
      array = [];
    });

    describe('and has no condition', function () {
      it('should return false', function () {
        let result = array.any();
        expect(result).toBe(false);
      });
    });

    describe('and has condition', function () {
      it('should return false', function () {
        let result = array.any(item => item > 3);
        expect(result).toBe(false);
      });
    });
  });
});
