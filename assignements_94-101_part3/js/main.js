"use strict";

document.getElementsByTagName("p")[0].remove();
let startDiv = document.createElement("div");
startDiv.classList.add("start");
startDiv.innerHTML = "Start";
let startTitle = document.createAttribute("title");
startDiv.setAttributeNode(startTitle);
startTitle.value = "Start Element";
let startData = document.createAttribute("data-value");
startDiv.setAttributeNode(startData);
startData.value = "start";
document.querySelector(".our-element").before(startDiv);
let endDiv = document.createElement("div");
endDiv.classList.add("end");
endDiv.innerHTML = "End";
let endTitle = document.createAttribute("title");
endDiv.setAttributeNode(endTitle);
endTitle.value = "End Element";
let endData = document.createAttribute("data-value");
endDiv.setAttributeNode(endData);
endData.value = "end";
document.querySelector(".our-element").after(endDiv);

// let textNode = document.createTextNode("Some text");
// document.querySelector(".our-element").setAttribute("id", textNode.textContent);