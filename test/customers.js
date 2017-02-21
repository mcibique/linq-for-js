import { order1, order2, order3, order4, order5, order6, order7, order8 } from './orders';

let customer1 = {
  id: 1,
  name: 'John',
  age: 15,
  orders: [ order1, order2 ]
};

let customer2 = {
  id: 2,
  name: 'Joe',
  age: 19,
  orders: [ order3 ]
};

let customer3 = {
  id: 3,
  name: 'Adele',
  age: 21,
  orders: []
};

let customer4 = {
  id: 4,
  name: 'Ben',
  age: 35,
  orders: [ order4, order5 ]
};

let customer5 = {
  id: 5,
  name: 'Jane',
  age: 24,
  orders: [ order6, order7, order8 ]
};

export { customer1, customer2, customer3, customer4, customer5 }

export default [ customer1, customer2, customer3, customer4, customer5 ];
