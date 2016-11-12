import Iterator from './Iterator';

export default class SelectIterator extends Iterator {
  constructor(arr, callback) {
    super(arr);

    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function');
    }

    this.callback = callback;
  }

  [Symbol.iterator] = function *iterator() {
    for (let item of this.arr) {
      yield this.callback(item);
    }
  }
}
