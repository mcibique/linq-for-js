import Iterator from '../iterators/Iterator';
import '../first';

Iterator.prototype.contains = function contains(value) {
  if (typeof value === 'undefined') {
    throw new Error('Missing value to compare with.');
  }

  return !!this.first(item => Object.is(item, value));
};
