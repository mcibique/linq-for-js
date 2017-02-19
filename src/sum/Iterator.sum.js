import Iterator from '../iterators/Iterator';
import '../aggregate';

Iterator.prototype.sum = function sum() {
  return this.aggregate((prev, curr) => prev + curr, 0);
};
