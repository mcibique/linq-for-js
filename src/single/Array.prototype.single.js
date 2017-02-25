import Iterator from '../iterators/Iterator';

Array.prototype.single = function single(condition) {
  return new Iterator(this).single(condition);
};
