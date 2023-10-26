/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(a, b, c) {
  let name, age, status;
  typeof a === "string" ? name = a : typeof b === "string" ? name = b : name = c;
  typeof a === "number" ? age = a : typeof b === "number" ? age = b : age = c;
  typeof a === "boolean" ? status = a : typeof b === "boolean" ? status = b : status = c;
  let hire = status ? "You Are Available For Hire" : "You Are Not Available For Hire";
  console.log(`Hello ${name}, Your Age Is ${age}, ${hire}`);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"