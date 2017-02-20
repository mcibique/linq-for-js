import Iterator from '../iterators/Iterator';

Array.prototype.max = function max() {
  return new Iterator(this).max();
};
