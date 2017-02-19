import Iterator from '../iterators/Iterator';
import '../first';

Iterator.prototype.any = function any(condition) {
  if (condition) {
    for (let item of this) {
      if (condition(item)) {
        return true;
      }
    }
    return false;
  } else {
    return !!this.first();
  }
};
