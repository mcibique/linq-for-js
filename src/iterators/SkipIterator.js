import Iterator from './Iterator';

export default class SkipIterator extends Iterator {
  constructor(arr, count) {
    super(arr);

    if (isNaN(count)) {
      throw new Error('Missing count.');
    }

    if (count < 0) {
      throw new Error('Count cannot be negative.');
    }

    this.count = count;
  }

  *[Symbol.iterator]() {
    let index = this.count;
    for (let item of this.arr) {
      if (index-- > 0) {
        continue;
      } else {
        yield item;
      }
    }
  }
}
