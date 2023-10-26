let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr1.slice(arr1.indexOf("X"))
allArrs.unshift(arr2.slice(arr2.indexOf("F")).shift())
allArrs.push(arr2.slice(arr2.indexOf("F")).pop())
console.log(allArrs); // fxy