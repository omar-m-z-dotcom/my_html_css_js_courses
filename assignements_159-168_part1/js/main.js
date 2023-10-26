"use strict";

let mybirthday = new Date("2000/2/4");
// console.log(mybirthday.getFullYear(), mybirthday.getMonth() + 1, mybirthday.getDate());
let now = new Date();
// console.log(now.getFullYear(), now.getMonth() + 1, now.getDate());
let diff = now - mybirthday;
let Seconds = diff / 1000;
let Minutes = Seconds / 60;
let Hours = Minutes / 60;
let Days = Hours / 24;
let Months = Days / 30;
let Years = Months / 12;
console.log(Seconds.toFixed(0) + " Seconds");
console.log(Minutes.toFixed(0) + " Minutes");
console.log(Hours.toFixed(0) + " Hours");
console.log(Days.toFixed(0) + " Days");
console.log(Months.toFixed(0) + " Months");
console.log(Years.toFixed(0) + " Years");


// Needed Output

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"