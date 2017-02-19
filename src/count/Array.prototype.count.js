import Iterator from '../iterators/Iterator';

Array.prototype.count = function count(condition) {
  return new Iterator(this).count(condition);
};
