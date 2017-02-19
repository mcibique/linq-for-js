import './index';
import SelectManyIterator from '../iterators/SelectManyIterator';

describe('Array.prototype.selectMany', function () {
  it('should return SelectManyIterator', function () {
    let selectIterator = ['hello', 'world'].selectMany(item => item);
    expect(selectIterator instanceof SelectManyIterator).toBe(true);
  });

  describe('when callback is defined', function () {
    it('should flattern the given array', function () {
      let array = ['hello', 'world'];
      let result = Array.from(array.selectMany(item => item));
      expect(result.length).toBe(10);
      expect(result).toEqual([...'hello', ...'world']);
    });

    it('should skip empty iterables', function () {
      let array = ['', 'hello', '', '', 'world'];
      let result = Array.from(array.selectMany(item => item));
      expect(result.length).toBe(10);
      expect(result).toEqual([...'hello', ...'world']);
    });
  });

  describe('chaining', function () {
    it('should handle chained callbacks', function () {
      let objects = [
        { arr: ["foo", "bar"] },
        { arr: ["baz", "fubar"] }
      ];

      let result = Array.from(objects
        .selectMany(obj => obj.arr)
        .selectMany(str => str)
      );
      expect(result.length).toBe(14);
      expect(result).toEqual([...'foo', ...'bar', ...'baz', ...'fubar']);
    });
  });
});
