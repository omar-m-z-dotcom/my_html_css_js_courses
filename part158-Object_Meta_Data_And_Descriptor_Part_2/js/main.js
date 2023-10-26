/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperties(myObject, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

console.log(myObject);

console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
console.log(Object.getOwnPropertyDescriptors(myObject));

// class Person {
//   // read more about symbols here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
//   symbol = Symbol("test");
//   symbol = "test"
//   constructor(name, age, address) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }
// }

// let person = new Person("John", 30, "USA");
// console.log(person);
// for (const prop in person) {
//   if (Object.hasOwnProperty.call(person, prop)) {
//     let element = person[prop];
//     console.log(prop, element);
//   }
// }
// console.log(person);
// setTimeout(() => {
//   delete person.address;
//   console.log(person);
// }, 5000);

// setTimeout(() => {
//   Object.defineProperty(person, "address", {
//     writable: true,
//     enumerable: true,
//     configurable: true,
//     value: "USA"
//   });
//   console.log(person);
// }, 10000);
// console.log(Object.getOwnPropertyDescriptors(person));
// console.log(Object.getOwnPropertyDescriptors(person).address.value);
// console.log(Object.getOwnPropertyDescriptors(person).address);
// console.log(Object.getOwnPropertyDescriptor(person, "address"));
// console.log(Object.getOwnPropertyDescriptor(person, "address").value);
// console.log(Object.getPrototypeOf(person));
// console.log(Object.getPrototypeOf(person) === Person.prototype);
// console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
// console.log(Object.getOwnPropertyNames(person));
// console.log(Object.getOwnPropertySymbols(person)); doesn't work with classes for some reason