"use strict";

function* gen() {
    let i = 1;
    while (true) {
        yield 2 * (37 - 80 * i + 50 * i * i);
        i++;
    }
}

let generator = gen();
// pattern used 2 (37 - 80 n + 50 n^2)
console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
console.log(generator.next()); // {value: 8474, done: false}
console.log(generator.next()); // {value: 10414, done: false}