import Iterator from '../iterators/Iterator';
import DistinctIterator from '../iterators/DistinctIterator';

Iterator.prototype.distinct = function distinct() {
  return new DistinctIterator(this);
};
