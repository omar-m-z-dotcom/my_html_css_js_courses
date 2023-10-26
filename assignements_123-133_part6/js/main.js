"use strict";

function replaceNumbers(array) {
    let numbersCount = 0;
    array.forEach(element => {
        if (typeof element === "number") {
            numbersCount++;
        }
    });
    let numbersArray = array.filter(element => typeof element === "number");
    array = array.filter(element => typeof element !== "number");
    array = numbersArray.concat(array);
    console.log(`array before copyWithin: ${array}`);
    if (numbersCount == 0) {
        return array;
    } else {
        return array.copyWithin(0, numbersCount, numbersCount * 2);
    }
}

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
console.log(replaceNumbers(chars));
// chars.splice()

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']


chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
console.log(replaceNumbers(chars));

// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

chars = ["Z", "Y", "A", "D", "E", 10, 1];
console.log(replaceNumbers(chars));

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]
chars = ["Z", "Y", "A", "D", "E"];
console.log(replaceNumbers(chars));
// Needed Output
// ["Z", "Y", "A", "D", "E"]