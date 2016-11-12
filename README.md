# linq-for-js
LINQ to JS port using ESnext iterators and generators.

# Usage
## Where
```
let array = [1, 2, 3, 4, 5];
for (let item of array.where(item => item > 3)) {
  console.log(item);
}

// 4
// 5
```

or

```
let array = [1, 2, 3, 4, 5];
let filtered = Array.from(array.where(item => item > 3));
// [4, 5]
```

or

```
let array = [1, 2, 3, 4, 5];
let filtered = array.where(item => item > 3).toArray();
// [4, 5]
```

or

```
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
```
let array = [1, 2, 3, 4, 5];
let first = array.first();
// 1
```

or

```
let array = [1, 2, 3, 4, 5];
let first = array.first(item => item > 3);
// 4
```

## Count

```
let array = [1, 2, 3, 4, 5];
let count = array.count();
// 5
```

or

```
let array = [1, 2, 3, 4, 5];
let count = array.count(item => item > 3);
// 2
```

## Any

```
let array = [1, 2, 3, 4, 5];
let any = array.any();
// true
```

or

```
let array = [1, 2, 3, 4, 5];
let any = array.any(item => item < 3);
// true
```

or
```
let array = [1, 2, 3, 4, 5];
let any = array.any(item => item === 6);
// false
```

## All

```
let array = [1, 2, 3, 4, 5];
let all = array.all(item => item < 3);
// false
```

or
```
let array = [1, 2, 3, 4, 5];
let all = array.all(item => item < 6);
// true
```

## Chaining
```
// where + first
let array = [1, 2, 3, 4, 5];
let first = array.where(item => item > 2).first();
// 3
```

```
// where + count
let array = [1, 2, 3, 4, 5];
let count = array.where(item => item > 3).count();
// 2
```

```
// where + any
let array = [1, 2, 3, 4, 5];
let any = array.where(item => item > 3).any();
// true
```

```
// where + all
let array = [1, 2, 3, 4, 5];
let all = array.where(item => item > 3).all(item => item < 6);
// true
```

```
// select + first
let array = [1, 2, 3, 4, 5];
let first = array.select(item => item * 2).first();
// 2
```

```
// select + any
let array = [1, 2, 3, 4, 5];
let any = array.select(item => item * 3).any(item => item > 10);
// true
```

```
// select + all
let array = [1, 2, 3, 4, 5];
let all = array.select(item => item ** 2).all(item => item < 30);
// true
```

```
// select + where
let array = [1, 2, 3, 4, 5];
let result = array.where(item => item > 2).select(item => item ** 2).toArray();
// [9, 16, 25]
```
