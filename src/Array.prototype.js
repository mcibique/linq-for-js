import Iterator from './Iterator';
import SelectIterator from './SelectIterator';
import WhereIterator from './WhereIterator';

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
  select(callback) {
    return new SelectIterator(this, callback);
  },
  where(condition) {
    return new WhereIterator(this, condition);
  }
});