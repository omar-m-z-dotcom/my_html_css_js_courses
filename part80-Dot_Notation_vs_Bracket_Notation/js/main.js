/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

let myVar = "country";

let user = {
  theName: "Osama",
  country: "Egypt",
  100: "one hundred"
};

console.log(user.theName); // theName
console.log(user.country); // country
console.log(user[0]); // undefined
console.log(user[1]); // undefined
console.log(user[2]); // undefined
console.log(user[100]); // one hundred
console.log(user.myVar); // undefined
console.log(user[myVar]); // Egypt