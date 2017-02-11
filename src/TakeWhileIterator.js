import WhereIterator from './WhereIterator';

export default class TakeWhileIterator extends WhereIterator {
  constructor(arr, condition) {
    super(arr, condition);
  }

  [Symbol.iterator] = function *iterator() {
    for (let item of this.arr) {
      if (this.condition(item)) {
        yield item;
      } else {
        break;
      }
    }
  }
}
