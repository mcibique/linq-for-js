import WhereIterator from './WhereIterator';
import Iterator from './Iterator';

Object.assign(Array.prototype, {
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
  where(condition) {
    return new WhereIterator(this, condition);
  }
});