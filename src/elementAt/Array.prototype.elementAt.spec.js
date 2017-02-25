import './index';

describe('Array.prototype.elementAt', function () {
  describe('when array has items', function () {
    let array,
      result;

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
    });

    describe('and index is in the range', function () {
      it('should return an element at given index', function () {
        result = array.elementAt(2);
        expect(result).toBe(3);
      });
    });

    describe('and index is out of range', function () {
      it('should return undefined', function () {
        result = array.elementAt(5);
        expect(result).toBeUndefined();
      });
    });
  });

  describe('when array is empty', function () {
    let array,
      result;

    beforeEach(function () {
      array = [];
    });

    it('should return undefined', function () {
      result = array.elementAt(0);
      expect(result).toBeUndefined();
    });
  });
});
