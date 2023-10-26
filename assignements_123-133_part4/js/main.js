"use strict";

let theNumber = 100020003000;
console.log(Number([...new Set([...theNumber.toString()].filter((x) => parseInt(x)))].join("")));
// Needed Output
// 123