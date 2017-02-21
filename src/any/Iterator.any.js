import Iterator from '../iterators/Iterator';
import '../first';

Iterator.prototype.any = function any(condition) {
  return !!this.first(condition);
};
