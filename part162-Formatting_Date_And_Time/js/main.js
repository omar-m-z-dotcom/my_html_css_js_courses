"use strict"
/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/

console.log(Date.parse("Oct 25 1982"));

let date1 = new Date(0);
console.log("date1 " + date1);

let date2 = new Date(404344800000);
console.log("date2 " + date2);

let date3 = new Date("Oct 25 1982");
console.log("date3 " + date3);

let date4 = new Date("Oct@25-1982");
console.log("date4 " + date4);

let date5 = new Date("10/25/1982");
console.log("date5 " + date5);

let date6 = new Date("10/25-1982");
console.log("date6 " + date6);

let date7 = new Date("10-25-1982");
console.log("date7 " + date7);

let date8 = new Date("10-25#1982");
console.log("date8 " + date8);

let date9 = new Date("1982-10-25");
console.log("date9 " + date9);

let date10 = new Date("1982 10");
console.log("date10 " + date10);

let date11 = new Date("1982-10");
console.log("date11 " + date11);

let date12 = new Date("1982@10");
console.log("date12 " + date12);

let date13 = new Date("1982");
console.log("date13 " + date13);

let date14 = new Date("82");
console.log("date14 " + date14);

let date15 = new Date(1982, 9, 25, 2, 10, 0);
console.log("date15 " + date15);

let date16 = new Date(1982, 9, 25);
console.log("date16 " + date16);

let date17 = new Date(1982, 9);
console.log("date17 " + date17);

let date18 = new Date("1982-10-25T06:10:00Z"); // with 2 hours form GMT Z stands for current time zone
console.log("date18 " + date18);

let date19 = new Date("1982-10-25T06:10:00"); // without +2 hours form GMT
console.log("date19 " + date19);

let date20 = new Date("1982-10-25T06:10:00-02:00"); // with +2 hours and +2 hours form GMT
console.log("date20 " + date20);