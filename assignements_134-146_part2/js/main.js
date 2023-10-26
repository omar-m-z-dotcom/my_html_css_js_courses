"use strict";

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let regex = /Os\w*O/ig; // starts with Os and ends with O
console.log(specialNames.match(regex));

// Output
// ['Os10O', 'OsO', 'Os100O', 'Osa100O]