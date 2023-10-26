// let myArray = ["E", "l", "z", ["e", "r"], "o"].flat();
// console.log(myArray);
let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero

console.log(myArray.reduce((acc, cur) => { Array.isArray(cur) ? acc.push(...cur) : acc.push(cur); return acc; }, []).reduce((acc, cur) => acc + cur));