"use strict";

let phone = "+(995)-123 (4567)";

let regexp = /\+\(\d{3}\)-\d{3}\s{1}\(\d{4}\)/g;
console.log(phone.match(regexp));