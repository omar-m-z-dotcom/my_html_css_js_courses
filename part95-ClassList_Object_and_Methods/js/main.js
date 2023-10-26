/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));
console.log(element.classList.item("3"));
element.classList.add("test");
console.log(element.classList);
element.classList.remove("test");
console.log(element.classList);
// element.firstElementChild.remove();

element.onclick = function () {
  element.classList.toggle("show");
};