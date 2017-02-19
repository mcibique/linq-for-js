import './index';

describe('Array.prototype.all', function () {
  describe('when array has items', function () {
    let array;

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
    });

    describe('and has no condition', function () {
      it('should throw an error', function () {
        expect(function () {
          array.all();
        }).toThrow();
      });
    });

    describe('and has condition', function () {
      describe('when all items match the given condition', function () {
        it('should return true', function () {
          let result = array.all(item => item > 0);
          expect(result).toBe(true);
        });
      });

      describe('when at least one item doesn\'t match the given condition', function () {
        it('should return false', function () {
          let result = array.all(item => item > 3);
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

    describe('and has condition', function () {
      it('should return true', function () {
        let result = array.all(item => item > 0);
        expect(result).toBe(true);
      });
    });
  });
});
