"use strict";

let div1 = document.querySelector(".one");
let div2 = document.querySelector(".two");
let div1Text = div1.textContent;
let div2Text = div2.textContent;
let div1Title = div1.title;
let div2Title = div2.title;


let temp = div1Text;
div1.textContent = div2Text;
div2.textContent = temp + document.querySelectorAll("div").length;
temp = div1Title;
div1.title = div2Title;
div2.title = temp;

// let temp = div1.textContent;
// div1.textContent = div2.textContent;
// div2.textContent = temp + document.querySelectorAll("div").length;
// temp = div1.title;
// div1.title = div2.title;
// div2.title = temp;