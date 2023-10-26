"use strict"

/*
  Generators
  - Delegate Generator
*/

function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  yield* generateNums();
  yield* generateLetters();
  yield* [4, 5, 6];
  yield* "DEF";
  // yield* { a: 7, b: 8, c: 9 }; // error not iterable
  // yield* class d { // error not iterable same for functions
  //   constructor() {
  //     this.e = 10;
  //     this.f = 11;
  //     this.g = 12;
  //   }
  // };
}

let generator = generateAll();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.return("Z")); // stops the generator and returns the value
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

for (let value of generator) {
  console.log(value);
}