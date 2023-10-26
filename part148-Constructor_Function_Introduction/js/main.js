"use strict"
/*
  Constructor Function
*/

// function User(id, username, salary) {
//   this.i = id;
//   this.u = username;
//   this.s = salary + 1000;
// }
class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Hassan", 6000);
let userThree = new User(102, "Sayed", 7000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);

console.log(userTwo.i);
console.log(userTwo.u);
console.log(userTwo.s);

console.log(userThree.i);
console.log(userThree.u);
console.log(userThree.s);

// // mixin
// let sayHiMixin = {
//   sayHi() {
//     alert(`Hello ${this.u}`);
//   },
//   sayBye() {
//     alert(`Bye ${this.u}`);
//   }
// };

// let thanksMixin = {
//   sayThanks() {
//     alert(`Thanks ${this.u}`);
//   }
// };

// // usage:
// Object.setPrototypeOf(User.prototype, sayHiMixin);
// console.log(userOne);
// userOne.sayHi(); // Hello Elzero
// userOne.sayBye(); // Bye Elzero
// setTimeout(() => {
//   Object.setPrototypeOf(User.prototype, thanksMixin);
//   console.log(userOne);
//   userOne.sayThanks(); // Thanks Elzero
// }, 10000);
// setTimeout(() => {
//   Object.assign(User.prototype, sayHiMixin, thanksMixin);
//   userOne.sayHi();
//   console.log(userOne);
//   console.log(userOne.fullData());
//   User.sayHi = function () {
//     alert(`Hello from User ${this.u}`);
//   };
//   userOne.sayHi();
//   User.sayHi();
// }, 50000);
// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hassan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// };