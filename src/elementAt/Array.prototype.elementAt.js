import Iterator from '../iterators/Iterator';

Array.prototype.elementAt = function elementAt(index) {
  return new Iterator(this).elementAt(index);
};
