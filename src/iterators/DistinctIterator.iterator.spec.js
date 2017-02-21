import DistinctIterator from './DistinctIterator';

describe('DistinctIterator.iterator', function () {
  let array = ['hello', 'world', 'foo', 'world', 'bar', 'bar'];

  it('should return only unique items', function () {
    let iterator = new DistinctIterator(array);
    let result = Array.from(iterator);
    expect(result.length).toBe(4);
    expect(result).toEqual(['hello', 'world', 'foo', 'bar']);
  });
});
