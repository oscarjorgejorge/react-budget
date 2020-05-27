//
//// Object
//

console.log("destructuring");

// const person = {
//   //   name: "Andrew",
//   age: 26,
//   location: {
//     city: "Madrid",
//     temp: 35,
//   },
// };

// const { age, name: firstName = "Oscar" } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${firstName} is ${age}, from ${temperature}.`);

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     // name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-published" } = book.publisher;

// console.log(`The publisher is ${publisherName}`);

//
//// Array
//

const address = ["1299 S Juniper Street", "Madrid", "España", "2020"];

const [, city, state] = address;

const item = ["Coffe (hot)", "$2.00", "$2.50", "$3.00"];

const [elem, , price2, price3] = item;

console.log(`You are in ${city}, ${state}`);
console.log(`You are in ${elem}, ${price2}`);
