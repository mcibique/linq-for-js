import WhereIterator from './WhereIterator';
import Iterator from './Iterator';

Object.assign(Array.prototype, {
  any(condition) {
    return new Iterator(this).any(condition);
  },
  count(condition) {
    return new Iterator(this).count(condition);
  },
  first(condition) {
    return new Iterator(this).first(condition);
  },
  where(condition) {
    return new WhereIterator(this, condition);
  }
});