import Iterator from '../iterators/Iterator';

Iterator.prototype.elementAt = function elementAt(index) {
  for (let item of this) {
    if (index-- === 0) {
      return item;
    }
  }
};
