"use strict";

function* genNumbers() {
    // yield* new Set([1, 2, 2, 2, 3, 4, 5]);
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
    // yield* new Set(["A", "B", "B", "B", "C", "D"]);
    yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll() {
    yield* new Set(genNumbers());
    yield* new Set(genLetters());
}

// function* genAll() {
//     yield* genNumbers();
//     yield* genLetters();
// }

let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}
console.log(generator.next()); // {value: undefined, done: true}