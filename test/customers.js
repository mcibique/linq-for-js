let customer0 = {
  name: 'John',
  age: 15,
  orders: [
    { id: 1, items: [1, 7, 9], total: 500 },
    { id: 2, items: [4, 11], total: 75 }
  ]
};

let customer1 = {
  name: 'Joe',
  age: 19,
  orders: [
    { id: 3, items: [4], total: 125 }
  ]
};

let customer2 = {
  name: 'Adele',
  age: 21,
  orders: []
};

let customer3 = {
  name: 'Ben',
  age: 35,
  orders: [
    { id: 4, items: [1, 5], total: 60 },
    { id: 5, items: [10, 11, 14], total: 450 }
  ]
};

let customer4 = {
  name: 'Jane',
  age: 24,
  orders: [
    { id: 6, items: [5, 13, 44], total: 240 },
    { id: 7, items: [2, 7, 11, 12], total: 80 },
    { id: 8, items: [1, 3, 8], total: 195 }
  ]
};

export { customer0, customer1, customer2, customer3, customer4 }

export default [ customer0, customer1, customer2, customer3, customer4 ];
