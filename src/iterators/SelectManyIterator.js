import Iterator from './Iterator';

export default class SelectManyIterator extends Iterator {
  constructor(arr, callback) {
    super(arr);

    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function');
    }

    this.callback = callback;
  }

  *[Symbol.iterator]() {
    for (let item of this.arr) {
      for (let subItem of this.callback(item)) {
        yield subItem;
      }
    }
  }
}
