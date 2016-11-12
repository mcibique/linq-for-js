import '../Array.prototype';
import WhereIterator from '../WhereIterator';

describe('Array.prototype.where', function () {
  it('should return WhereIterator', function () {
    let whereIterator = [1, 2, 3, 4, 5].where(item => item > 2);
    expect(whereIterator instanceof WhereIterator).toBe(true);
  })
});
