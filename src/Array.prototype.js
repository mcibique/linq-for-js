import WhereIterator from './WhereIterator';

Object.assign(Array.prototype, {
  where(condition) {
    return new WhereIterator(this, condition);
  }
});