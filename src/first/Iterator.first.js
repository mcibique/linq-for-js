import Iterator from '../iterators/Iterator';
import '../where';

Iterator.prototype.first = function first(condition) {
  if (condition) {
    return this.where(condition).first();
  } else {
    return this[Symbol.iterator]().next().value;
  }
};
