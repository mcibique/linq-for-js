import WhereIterator from '../iterators/WhereIterator';

Array.prototype.where = function where(condition) {
  return new WhereIterator(this, condition);
};
