/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This Is Div");

myElement.className = "product";
myAttr.value = "Testing";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-test", myAttr.value);

// Append Comment To Element
myElement.appendChild(myComment);

// Append Text To Element
myElement.appendChild(myText);

// Append Element To Body
document.body.appendChild(myElement);