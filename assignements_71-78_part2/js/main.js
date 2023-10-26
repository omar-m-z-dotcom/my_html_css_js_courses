let myString = "EElllzzzzzzzeroo";

// Elzero

console.log(myString.split("").filter((item, index, arr) => item !== arr[index + 1]).reduce((acc, item) => acc + item));