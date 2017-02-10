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

  aggregate(accumulator, initialValue) {
    if (typeof accumulator !== 'function') {
      throw new Error('Missing accumulator function');
    }

    let result;
    let iterator = this[Symbol.iterator]();

    if (typeof initialValue === 'undefined') {
      result = iterator.next().value;
    } else {
      result = initialValue;
    }

    let current;
    while((current = iterator.next()) && current && !current.done) {
      result = accumulator(result, current.value);
    }
    return result;
  }

  all(condition) {
    if (!condition) {
      throw new Error('Missing condition');
    }

    for (let item of this) {
      if (!condition(item)) {
        return false;
      }
    }
    return true;
  }

  any(condition) {
    if (condition) {
      for (let item of this) {
        if (condition(item)) {
          return true;
        }
      }
      return false;
    } else {
      return !!this.first();
    }
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

  take(count) {
    let TakeIterator = require('./TakeIterator').default;
    return new TakeIterator(this, count);
  }

  select(callback) {
    // cannot use import SelectIterator from './SelectIterator' because of circular dependency
    let SelectIterator = require('./SelectIterator').default;
    return new SelectIterator(this, callback);
  }

  sum() {
    return this.aggregate((prev, curr) => prev + curr, 0);
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