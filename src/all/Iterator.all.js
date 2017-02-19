import Iterator from '../iterators/Iterator';

Iterator.prototype.all = function all(condition) {
  if (!condition) {
    throw new Error('Missing condition');
  }

  for (let item of this) {
    if (!condition(item)) {
      return false;
    }
  }
  return true;
};
