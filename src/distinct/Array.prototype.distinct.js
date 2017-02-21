import DistinctIterator from '../iterators/DistinctIterator';

Array.prototype.distinct = function distinct() {
  return new DistinctIterator(this);
};
