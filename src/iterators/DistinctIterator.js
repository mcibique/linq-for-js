import Iterator from './Iterator';

export default class DistinctIterator extends Iterator {
  constructor(arr) {
    super(arr);
  }

  *[Symbol.iterator]() {
    let set = new Set();
    for (let item of this.arr) {
      if (set.has(item)) {
        continue;
      }

      set.add(item);
      yield item;
    }
  }
}
