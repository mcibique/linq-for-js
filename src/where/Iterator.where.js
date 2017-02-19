import Iterator from '../iterators/Iterator';
import WhereIterator from '../iterators/WhereIterator';

Iterator.prototype.where = function where(condition) {
  return new WhereIterator(this, condition);
};
