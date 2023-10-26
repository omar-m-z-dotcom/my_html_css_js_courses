"use strict";

let date = new Date();
date.setDate(0);
console.log(date);
console.log(`Previous Month Is ${date.toLocaleString('en-us', { month: 'long' })} And Last Day Is ${date.getDate()}`);

// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"