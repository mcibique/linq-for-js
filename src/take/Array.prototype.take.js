import Iterator from '../iterators/Iterator';
import TakeIterator from '../iterators/TakeIterator';

Array.prototype.take = function take(count) {
  return new TakeIterator(this, count);
};
