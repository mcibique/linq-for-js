import { order1, order2, order3, order4, order5, order6, order7, order8 } from './orders';

let customer0 = {
  name: 'John',
  age: 15,
  orders: [ order1, order2 ]
};

let customer1 = {
  name: 'Joe',
  age: 19,
  orders: [ order3 ]
};

let customer2 = {
  name: 'Adele',
  age: 21,
  orders: []
};

let customer3 = {
  name: 'Ben',
  age: 35,
  orders: [ order4, order5 ]
};

let customer4 = {
  name: 'Jane',
  age: 24,
  orders: [ order6, order7, order8 ]
};

export { customer0, customer1, customer2, customer3, customer4 }

export default [ customer0, customer1, customer2, customer3, customer4 ];
