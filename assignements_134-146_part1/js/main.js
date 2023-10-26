"use strict";

let IPv6 = "2001:db8:3333:4444:5555:6666:7777:8888"; // IPv6 address

let IPv6Regex = /^([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}$/ig; // IPv6 regex
console.log(IPv6.match(IPv6Regex));