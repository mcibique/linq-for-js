import Iterator from '../iterators/Iterator';

Array.prototype.first = function first(condition) {
  return new Iterator(this).first(condition);
};
