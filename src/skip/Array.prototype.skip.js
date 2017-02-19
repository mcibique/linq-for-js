import SkipIterator from '../iterators/SkipIterator';

Array.prototype.skip = function skip(count) {
  return new SkipIterator(this, count);
};
