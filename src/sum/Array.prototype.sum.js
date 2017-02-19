import Iterator from '../iterators/Iterator';

Array.prototype.sum = function sum() {
  return new Iterator(this).sum();
};
