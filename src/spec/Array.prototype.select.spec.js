import '../Array.prototype';
import SelectIterator from '../SelectIterator';

describe('Array.prototype.select', function () {
  it('should return SelectIterator', function () {
    let selectIterator = [1, 2, 3, 4, 5].select(item => item > 2);
    expect(selectIterator instanceof SelectIterator).toBe(true);
  });

  describe('when callback is defined', function () {
    let array,
        callback;

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
    });

    it('should filter item by the given callback', function () {
      let result = Array.from(array.select(item => item * 2));
      expect(result.length).toBe(5);
      expect(result).toEqual([2, 4, 6, 8, 10]);
    });
  });

  describe('chaining', function () {
    it('should handle chained callbacks', function () {
      let customers = [
        { name: 'John', age: 15 },
        { name: 'Joe', age: 19 },
        { name: 'Anna', age: 21 }
      ];

      let result = Array.from(customers
        .select(customer => customer.age)
        .select(age => 65 - age)
      );
      expect(result.length).toBe(3);
      expect(result).toEqual([65 - 15, 65 - 19, 65 - 21]);
    });
  });
});
