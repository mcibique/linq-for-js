import Iterator from '../iterators/Iterator';
import SelectManyIterator from '../iterators/SelectManyIterator';

Array.prototype.selectMany = function selectMany(callback) {
  return new SelectManyIterator(this, callback);
};
