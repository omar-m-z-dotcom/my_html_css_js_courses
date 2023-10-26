"use strict";
// Method One
// Create Your Object Here
let objMethodOne = {
    property: "Method One"
};

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = Object({
    property: "Method Two"
});

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.create({
    property: "Method Three"
});

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = new Object({
    property: "Method Four"
});

console.log(objMethodFour.property); // "Method Four"

// Method Five
// Create Your Object Here
let objMethodFive = Object.assign({}, { property: "Method Five" }, { propertyTwo: "Method Five" });

console.log(objMethodFive.property, objMethodFive.propertyTwo); // "Method Five"