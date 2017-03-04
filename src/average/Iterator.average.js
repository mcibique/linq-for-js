import Iterator from '../iterators/Iterator';

Iterator.prototype.average = function average() {
  let sum = 0;
  let count = 0;

  for (let item of this) {
    sum += item;
    count++;
  }

  if (count > 0) {
    return sum / count;
  }

  return NaN;
};
