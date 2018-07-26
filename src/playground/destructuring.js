//
// Object Destructuring
//

// const person = {
//   name: 'Jerry',
//   age: 19,
//   location: {
//     city: 'New York',
//     temp: 90
//   }
// };

// const {
//   name: firstName = 'Anonymous',
//   age
// } = person;

// console.log(`${firstName} is ${age}.`);

// const {
//   city,
//   temp: temperature
// } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {
//   name: publisherName = 'Self-Published'
// } = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

const address = [
  '1299 S Juniper Street',
  'Philadelphia',
  'Pennsylvania',
  '19147'
];

const [
  , // Skips first item
  city,
  state = 'New York'
  // was zip but is now ignored
] = address;

console.log(`You are in ${city}, ${state}!`);

const item = [
  'Coffee (hot)',
  '$2.00',
  '$2.50',
  '$2.75'
];

const [
  itemName,
  ,
  medium,
] = item;

console.log(`A medium ${itemName} costs ${medium}`);
