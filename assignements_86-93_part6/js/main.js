"use strict";
let form = document.querySelector("form");
form.onsubmit = (event) => {
    event.preventDefault();
    let elementsNum;
    let elementsText;
    let elementsType;
    if (Number.isInteger(parseInt(form.elements.value)) && parseInt(form.elements.value) > -1) {
        elementsNum = parseInt(form.elements.value);
    } else {
        return;
    }
    elementsText = form.texts.value;
    if (form.type.value !== "Div" && form.type.value !== "Section") {
        return;
    } else {
        elementsType = form.type.value;
    }
    if (form.lastElementChild.hasChildNodes()) {
        for (let i = 0, count = form.lastElementChild.childElementCount; i < count; i++) {
            form.lastElementChild.removeChild(form.lastElementChild.lastElementChild);
        }
    }
    for (let i = 0; i < elementsNum; i++) {
        let newElement = document.createElement(elementsType);
        let id = `id-${i + 1}`;
        newElement.setAttribute("id", id);
        let title = document.createAttribute("title");
        newElement.setAttributeNode(title);
        newElement.setAttribute("title", `Element`);
        newElement.innerText = elementsText;
        form.lastElementChild.appendChild(newElement);
    }
};