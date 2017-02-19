import Iterator from '../iterators/Iterator';

Iterator.prototype.aggregate = function aggregate(accumulator, initialValue) {
  if (typeof accumulator !== 'function') {
    throw new Error('Missing accumulator function');
  }

  let result;
  let iterator = this[Symbol.iterator]();

  if (typeof initialValue === 'undefined') {
    result = iterator.next().value;
  } else {
    result = initialValue;
  }

  let current;
  while ((current = iterator.next()) && current && !current.done) {
    result = accumulator(result, current.value);
  }
  return result;
};
