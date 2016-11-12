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
    let result = [];
    for (let item of this) {
      result.push(item);
    }
    return result;
  }
}