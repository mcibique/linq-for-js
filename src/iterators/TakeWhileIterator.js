import SkipIterator from './WhereIterator';

export default class TakeWhileIterator extends SkipIterator {
  constructor(arr, condition) {
    super(arr, condition);
  }

  *[Symbol.iterator]() {
    for (let item of this.arr) {
      if (this.condition(item)) {
        yield item;
      } else {
        break;
      }
    }
  }
}
