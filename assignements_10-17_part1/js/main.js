// Add Variables Here
let numberOne = 10, numberTwo = 20;
// Ouput
console.log(String(numberOne) + String(numberTwo)); // Normal Concatenate => 1020
console.log(typeof (String(numberOne) + String(numberTwo))); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof (`${numberOne}${numberTwo}`)); // Template Literals Way => String

console.log(String(numberOne) + "\n" + String(numberTwo));
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberOne}
${numberTwo}`);
/*
  Template Literals Way
  20
  10
*/