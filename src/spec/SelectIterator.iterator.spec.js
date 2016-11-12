import SelectIterator from '../SelectIterator';

describe('SelectIterator.iterator', function () {
  let array = [1, 2, 3, 4, 5],
      callback = (item) => item * 2;

  it('should return selected items', function () {
    let spyCallback = jest.fn(callback);
    let iterator = new SelectIterator(array, spyCallback);
    let result = Array.from(iterator);
    expect(result.length).toBe(5);
    expect(result[0]).toBe(2);
    expect(spyCallback).toHaveBeenCalledTimes(5);
  });
});
