import Iterator from '../iterators/Iterator';
import TakeIterator from '../iterators/TakeIterator';

Iterator.prototype.take = function take(count) {
  return new TakeIterator(this, count);
};
