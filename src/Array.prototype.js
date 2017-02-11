import Iterator from './Iterator';
import SelectIterator from './SelectIterator';
import TakeIterator from './TakeIterator';
import TakeWhileIterator from './TakeWhileIterator';
import WhereIterator from './WhereIterator';

Object.assign(Array.prototype, {
  aggregate(accumulator, initialValue) {
    return new Iterator(this).aggregate(accumulator, initialValue);
  },
  all(condition) {
    return new Iterator(this).all(condition);
  },
  any(condition) {
    return new Iterator(this).any(condition);
  },
  count(condition) {
    return new Iterator(this).count(condition);
  },
  first(condition) {
    return new Iterator(this).first(condition);
  },
  select(callback) {
    return new SelectIterator(this, callback);
  },
  sum() {
    return new Iterator(this).sum();
  },
  take(count) {
    return new TakeIterator(this, count);
  },
  takeWhile(condition) {
    return new TakeWhileIterator(this, condition);
  },
  where(condition) {
    return new WhereIterator(this, condition);
  }
});