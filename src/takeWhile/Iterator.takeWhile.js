import Iterator from '../iterators/Iterator';
import TakeWhileIterator from '../iterators/TakeWhileIterator';

Iterator.prototype.takeWhile = function takeWhile(condition) {
  return new TakeWhileIterator(this, condition);
};
