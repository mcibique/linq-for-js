import Iterator from '../iterators/Iterator';

Iterator.prototype.max = function max() {
  return Math.max(...this);
};
