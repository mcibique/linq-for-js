import Iterator from '../iterators/Iterator';

Array.prototype.all = function all(condition) {
  return new Iterator(this).all(condition);
};
