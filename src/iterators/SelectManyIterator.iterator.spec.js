import SelectManyIterator from './SelectManyIterator';

describe('SelectManyIterator.iterator', function () {
  let array = ['hello', 'world'],
      callback = item => item;

  it('should return selected items', function () {
    let spyCallback = jest.fn(callback);
    let iterator = new SelectManyIterator(array, spyCallback);
    let result = Array.from(iterator);
    expect(result.length).toBe(10);
    expect(result).toEqual([...'hello', ...'world']);
    expect(spyCallback).toHaveBeenCalledTimes(2);
  });
});
