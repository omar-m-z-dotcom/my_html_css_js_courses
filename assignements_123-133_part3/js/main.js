"use strict";

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let myMap = new Map(Object.entries(myInfo));
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));
// myMap.set('workHours', 8);
// console.log(myMap);
// let iter = myMap.values();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// iter = myMap.keys();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// let mySet = new Set(Object.entries(myInfo));
// console.log(mySet);
// console.log(mySet.size);
// console.log(mySet.has("role"));

// Needed Output
// Map(3) { 'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt' }
// 3
// true