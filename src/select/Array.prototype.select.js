import Iterator from '../iterators/Iterator';
import SelectIterator from '../iterators/SelectIterator';

Array.prototype.select = function select(callback) {
  return new SelectIterator(this, callback);
};
