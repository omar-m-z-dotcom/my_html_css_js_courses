"use strict";

// setTimeout(() => {
//     let start2 = performance.now();
//     console.log(`time out started in ${start2 - end3} Milliseconds.`);
//     let end2 = performance.now();
//     console.log(`time out done in ${(end2 - start2)} Milliseconds.`);
// }, 100);

let start = performance.now();

for (let i = 1; i <= 99999; i++) {
    console.log(i);
}

let end = performance.now();

console.log(`Loop Took ${end - start} Milliseconds.`);

// let end3 = performance.now();

// another way to do it

// let start = performance.mark("start");

// for (let i = 1; i <= 99999; i++) {
//     console.log(i);
// }

// let end = performance.mark("end");

// let performanceMeasure = performance.measure("Loop Took", "start", "end");
// console.log(`${performanceMeasure.name} ${performanceMeasure.duration} Milliseconds.`);

// Needed Output

// "Loop Took 1921 Milliseconds."