import Iterator from '../iterators/Iterator';

Array.prototype.average = function average() {
  return new Iterator(this).average();
};
