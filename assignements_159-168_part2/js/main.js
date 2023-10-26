"use strict";

// let date = new Date(1980, 0, 1, 0, 0, 1);
// console.log(date);
// another way to write the above
let date = new Date();
date.setFullYear(1980);
date.setMonth(0);
date.setDate(1);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(1);
console.log(date);
// Needed Output

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"