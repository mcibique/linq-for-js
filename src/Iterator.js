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

  count(condition) {
    if (condition) {
      return this.where(condition).count();
    } else {
      let count = 0;
      for (let item of this) {
        count++;
      }
      return count;
    }
  }

  first(condition) {
    if (condition) {
      return this.where(condition).first();
    } else {
      return this[Symbol.iterator]().next().value;
    }
  }

  toArray() {
    return Array.from(this);
  }

  where(condition) {
    // cannot use import WhereIterator from './WhereIterator' because of circular dependency
    let WhereIterator = require('./WhereIterator').default;
    return new WhereIterator(this, condition);
  }
}