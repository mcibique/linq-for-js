# linq-for-js
LINQ to JS port using ESnext iteration protocol and generators.

# Performance
Just like in LINQ, the iterable chain is not performing any operation until the iteration is executed, which allows you to build up the chain:
```js
let query = customers.where(customer => customer.age > 18).select(customer => customer.id); // this only returns the iterator, no operation has been performed so far
let filtered = query.toArray(); // or Array.from(query), or for (let id of query) { ... }
```
The query is being iterated in most performant way: `select()` command is executed only on customers filtered by `where()` command. If you have 100 customers and 10 are over 18, `where()` command executes 100 times, `select()` only 10.

Lets try to get only first customer which is over 18:
```js
let query = customers.where(customer => customer.age > 18).select(customer => customer.id) // again, this only returns the iterator, no operation has been performed so far
let customerId = query.first(); // get me the first customer ID which matches the query;
```
Here, the `where()` command executes until it finds first customer with age over 18. Then the `select()` command is performed only with filtered customer and the result is returned. Checkout other useful examples in [Chaining](#chaining)

# Methods implemented
* [Where](#where)
* [First](#first)
* [Count](#count)
* [Any](#all)
* [All](#all)
* [Aggregate](#aggregate)
* [Sum](#sum)
* [Take](#take)
* [TakeWhile](#takeWhile)

# Usage
## Where
```js
let array = [1, 2, 3, 4, 5];
for (let item of array.where(item => item > 3)) {
  console.log(item);
}

// 4
// 5
```

or

```js
let array = [1, 2, 3, 4, 5];
let filtered = Array.from(array.where(item => item > 3));
// [4, 5]
```

or

```js
let array = [1, 2, 3, 4, 5];
let filtered = array.where(item => item > 3).toArray();
// [4, 5]
```

or

```js
let customers = [
  { name: 'John', age: 15 },
  { name: 'Joe', age: 19 },
  { name: 'Anna', age: 21 }
];

let filtered = customers
  .where(customer => customer.age > 18)
  .where(customer => customer.name.startsWith('J'))
  .toArray();
// [{ name: 'Joe', age: 19 }]
```

## First
```js
let array = [1, 2, 3, 4, 5];
let first = array.first();
// 1
```

or

```js
let array = [1, 2, 3, 4, 5];
let first = array.first(item => item > 3);
// 4
```

## Count

```js
let array = [1, 2, 3, 4, 5];
let count = array.count();
// 5
```

or

```js
let array = [1, 2, 3, 4, 5];
let count = array.count(item => item > 3);
// 2
```

## Any

```js
let array = [1, 2, 3, 4, 5];
let any = array.any();
// true
```

or

```js
let array = [1, 2, 3, 4, 5];
let any = array.any(item => item < 3);
// true
```

or

```js
let array = [1, 2, 3, 4, 5];
let any = array.any(item => item === 6);
// false
```

## All

```js
let array = [1, 2, 3, 4, 5];
let all = array.all(item => item < 3);
// false
```

or

```js
let array = [1, 2, 3, 4, 5];
let all = array.all(item => item < 6);
// true
```

## Aggregate

```js
let array = [1, 2, 3, 4, 5];
let aggregate = array.aggregate((prev, curr) => prev + curr);
// 15
```

or

```js
let customers = [
  { name: 'John', age: 15 },
  { name: 'Joe', age: 19 },
  { name: 'Anna', age: 21 }
];

let aggregate = customers.aggregate((prev, curr) => (prev.name || prev) + ', ' + curr.name);
// "John, Joe, Anna"
```

## Sum

```js
let array = [1, 2, 3, 4, 5];
let count = array.sum();
// 15
```

## Take

```js
let array = [1, 2, 3, 4, 5];
let result = array.take(3);
// [1, 2, 3]
```

## TakeWhile

```js
let array = [1, 2, 3, 4, 5];
let result = array.takeWhile(i => i < 3);
// [1, 2]
```

```js
let array = [1, 2, 3, 4, 5];
let result = array.takeWhile(i => i < 0);
// []
```

## Chaining

```js
// where + first
let array = [1, 2, 3, 4, 5];
let first = array.where(item => item > 2).first();
// 3
```

```js
// where + count
let array = [1, 2, 3, 4, 5];
let count = array.where(item => item > 3).count();
// 2
```

```js
// where + any
let array = [1, 2, 3, 4, 5];
let any = array.where(item => item > 3).any();
// true
```

```js
// where + all
let array = [1, 2, 3, 4, 5];
let all = array.where(item => item > 3).all(item => item < 6);
// true
```

```js
// where + sum
let array = [1, 2, 3, 4, 5];
let count = array.where(item => item > 3).sum();
// 9
```

```js
// where + take
let array = [1, 2, 3, 4, 5];
let count = array.where(item => item > 1).take(2);
// [2, 3]
```

```js
// select + first
let array = [1, 2, 3, 4, 5];
let first = array.select(item => item * 2).first();
// 2
```

```js
// select + any
let array = [1, 2, 3, 4, 5];
let any = array.select(item => item * 3).any(item => item > 10);
// true
```

```js
// select + all
let array = [1, 2, 3, 4, 5];
let all = array.select(item => item ** 2).all(item => item < 30);
// true
```

```js
// select + sum
let array = [1, 2, 3, 4, 5];
let sum = array.select(item => item * 2).sum();
// 30
```

```js
// select + take
let array = [1, 2, 3, 4, 5];
let sum = array.take(3).select(item => item * 2).toArray();
// [2, 4, 6]
```

```js
// select + takeWhile
let array = [1, 2, 3, 4, 5];
let sum = array.select(item => item * 2).takeWhile(i => i < 7).toArray();
// [2, 4, 6]
```

```js
// select + where
let array = [1, 2, 3, 4, 5];
let result = array.where(item => item > 2).select(item => item ** 2).toArray();
// [9, 16, 25]
```

```js
// select + where + sum
let array = [1, 2, 3, 4, 5];
let result = array.where(item => item > 2).select(item => item ** 2).sum();
// 50
```

```js
// select + where + aggregate
let array = [1, 2, 3, 4, 5];
let result = array.where(item => item > 2).select(item => item * 2).aggregate((prev, curr) => prev + curr);
// 24
```

```js
// select + where + take
let array = [1, 2, 3, 4, 5];
let result = array.where(item => item > 2).take(2).select(item => item * 2).toArray();
// [6, 8]
```
