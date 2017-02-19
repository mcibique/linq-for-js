import Iterator from '../iterators/Iterator';
import '../where';

Iterator.prototype.count = function count(condition) {
  if (condition) {
    return this.where(condition).count();
  } else {
    let count = 0;
    for (let item of this) {
      count++;
    }
    return count;
  }
};
