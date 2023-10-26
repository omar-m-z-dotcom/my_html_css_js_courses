/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split(",")
  .filter((ele) => isNaN(parseInt(ele)))
  .join("").split("")
  .filter((_, index, arr) => !(index == 0 || index == (arr.length - 1)))
  .map((ele) => ele === "_" ? " " : ele)
  .reduce((acc, ele) => acc + ele);

console.log(solution); // Elzero Web School