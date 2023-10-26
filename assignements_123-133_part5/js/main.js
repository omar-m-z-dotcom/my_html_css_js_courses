"use strict";

let theName = "Elzero";
let theNameArray = theName.split("");
console.log(theNameArray);
theNameArray = Array.from(theName);
console.log(theNameArray);
theNameArray = [...theName];
console.log(theNameArray);
theNameArray = Array.of(...theName);
console.log(theNameArray);
theNameArray = theName.slice(0).split("");
console.log(theNameArray);

// Needed Output
['E', 'l', 'z', 'e', 'r', 'o']