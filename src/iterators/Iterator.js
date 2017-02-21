export default class Iterator {
  constructor(arr) {
    if (!arr) {
      throw new Error('Iterable array is null or undefined');
    }
    if (!(arr instanceof Array || arr instanceof Iterator)) {
      throw new Error('Invalid array type');
    }

    this.arr = arr;
  }

  [Symbol.iterator]() {
    return this.arr[Symbol.iterator]();
  }

  toArray() {
    return Array.from(this);
  }

  toMap(keySelector, valueSelector) {
    if (typeof keySelector !== 'function') {
      throw new Error('KeySelector must be a function.');
    }
    if (typeof valueSelector !== 'function') {
      throw new Error('ValueSelector must be a function.');
    }

    let map = new Map();
    for (let item of this) {
      map.set(keySelector(item), valueSelector(item));
    }

    return map;
  }
}
