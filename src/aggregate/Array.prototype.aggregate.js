import Iterator from '../iterators/Iterator';

Array.prototype.aggregate = function aggregate(accumulator, initialValue) {
  return new Iterator(this).aggregate(accumulator, initialValue);
};
