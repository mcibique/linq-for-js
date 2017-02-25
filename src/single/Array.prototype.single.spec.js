import './index';

describe('Array.prototype.single', function () {
  describe('when doesn\'t have a condition', function () {
    describe('and array has one item', function () {
      it('should return the item', function () {
        let array = [1];
        let result = array.single();
        expect(result).toBe(1);
      });
    });

    describe('and array has more than one item', function () {
      it('should throw an error', function () {
        let array = [1, 2, 3];
        expect(function () {
          let result = array.single();
        }).toThrow('More than one element found.');
      });
    });

    describe('and array has no items', function () {
      it('should throw an error', function () {
        let array = [];
        expect(function () {
          let result = array.single();
        }).toThrow('No elements in the iterable');
      });
    });
  });

  describe('when does have a condition', function () {
    let array;

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
    });

    describe('and filtered array has one item', function () {
      it('should return the item', function () {
        let result = array.single(i => i % 3 === 0);
        expect(result).toBe(3);
      });
    });

    describe('and array has more than one item', function () {
      it('should throw an error', function () {
        expect(function () {
          let result = array.single(i => i % 2 === 0);
        }).toThrow('More than one element found.');
      });
    });

    describe('and array has no items', function () {
      it('should throw an error', function () {
        let array = [];
        expect(function () {
          let result = array.single(i => i > 5);
        }).toThrow('No elements in the iterable');
      });
    });
  });
});
