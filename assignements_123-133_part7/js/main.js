"use strict";

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

let numsThree = [...numsOne, ...numsTwo];
console.log(numsThree);
numsThree = numsOne.concat(...numsTwo);
console.log(numsThree);

numsOne = [1, 2, 3];
numsTwo = [4, 5, 6];

numsOne.push(...numsTwo);
console.log(numsOne);

// Needed Output
// [1, 2, 3, 4, 5, 6]