/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

let element = document.getElementById("my-div");
let createdP = document.createElement("p");

element.remove(); // remove element

element.before(createdP); // insert before element
element.after(createdP); // insert after element
element.append(createdP); // insert as last child
element.prepend(createdP); // insert as first child
