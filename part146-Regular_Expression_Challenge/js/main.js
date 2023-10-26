/*
  Regular Expression
  - Challenge
*/

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = /^(http(s)?:\/\/)?(www\.)?\w+\.\w+(:\d+\/.+)?$/ig; if single letter like s then no need to use ()?
let re = /^(https?:\/\/)?(www\.)?\w+\.\w+(:\d+)?(\/.+)?$/ig;
console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));