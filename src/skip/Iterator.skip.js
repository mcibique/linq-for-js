import Iterator from '../iterators/Iterator';
import SkipIterator from '../iterators/SkipIterator';

Iterator.prototype.skip = function skip(count) {
  return new SkipIterator(this, count);
};
