import Iterator from '../iterators/Iterator';

Array.prototype.contains = function contains(value) {
  return new Iterator(this).contains(value);
};
