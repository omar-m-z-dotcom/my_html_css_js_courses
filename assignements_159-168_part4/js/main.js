"use strict";

let date1 = new Date(2000, 1, 4);
console.log(date1);
let date2 = new Date("2000-02-04T00:00:00");
console.log(date2);
let date3 = new Date(2000, 1, 4, 0, 0, 0, 0);
console.log(date3);
// Needed Output

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"