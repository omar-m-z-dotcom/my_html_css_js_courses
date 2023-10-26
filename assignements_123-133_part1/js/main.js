"use strict";

let newSet = new Set([10]);
console.log(newSet);
newSet.add(20).add(newSet.size);
console.log(newSet);
let iterator = newSet.values();
while (true) {
    let result = iterator.next();
    if (result.value == 2) {
        console.log(result.value);
        break;
    }
}
// Needed Output
/*
Set(3) { 10, 20, 2 }
2
*/