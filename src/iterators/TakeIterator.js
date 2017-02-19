import Iterator from './Iterator';

export default class TakeIterator extends Iterator {
  constructor(arr, count) {
    super(arr);

    if (!count || count < 1) {
      throw new Error('The count must be larger than 0');
    }

    this.count = count;
  }

  *[Symbol.iterator]() {
    for (let item of this.arr) {
      yield item;

      if (--this.count <= 0) {
        break;
      }
    }
  }
}
