import Iterator from './Iterator';

export default class WhereIterator extends Iterator {
  constructor(arr, condition) {
    super(arr);

    if (typeof condition !== 'function') {
      throw new Error('Condition must be a function');
    }

    this.condition = condition;
  }

  [Symbol.iterator] = function *iterator() {
    for (let item of this.arr) {
      if (this.condition(item)) {
        yield item;
      }
    }
  }
}
