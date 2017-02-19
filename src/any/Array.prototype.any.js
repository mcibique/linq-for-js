import Iterator from '../iterators/Iterator';

Array.prototype.any = function any(condition) {
  return new Iterator(this).any(condition);
};
