/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a = 11] + [+b++ = 20] + [+c++ = 80] - [+a++ = 11] = 100
  a = 12
  b = 21
  c = 81
  [++a = 13] + [-b = -21] + [+c++ = 81] - [-a++ = -13] + [+a = 14] = 100
  a = 14
  b = 21
  c = 82
  [--c = 81] + [+b = 21] + [--a = 13] * [+b++ = 21] - [+b = 22] * [a = 13] + [--a = 12] - [+true = 1] = 100 
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(`${e}${f - 30}${+g - 1}`); // 2000
console.log(`${-d + f + (2 * e) + (+g * 3)}`); // 173