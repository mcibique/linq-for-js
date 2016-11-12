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

## Chaining
```
let array = [1, 2, 3, 4, 5];
let first = array.where(item => item > 2).first();
// 3
```

