import Iterator from '../iterators/Iterator';
import '../where';

Iterator.prototype.single = function single(condition) {
  if (condition) {
    return this.where(condition).single();
  } else {
    let iterator = this[Symbol.iterator]();
    let first = iterator.next();
    let result = first.value;

    if (first.done) {
      throw new Error('No elements in the iterable');
    }

    let second = iterator.next();
    if (!second.done) {
      throw new Error('More than one element found.');
    }

    return result;
  }
};
