/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month [1-31]
  - getFullYear()
  - getMonth() => Zero Based [0-11]
  - getDay() => Day Of The Week Zero Based [0-6]
  - getHours() => [0-23]
  - getMinutes() => [0-59]
  - getSeconds() => [0-59]
*/

let dateNow = new Date();
let birthday = new Date("Oct 24, 82");
let dateDiff = dateNow - birthday;

console.log(dateDiff);
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

console.log(dateNow);
console.log(dateNow.getTime());
console.log(dateNow.getDate());
console.log(dateNow.getFullYear());
console.log(dateNow.getMonth());
console.log(dateNow.getDay());
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());