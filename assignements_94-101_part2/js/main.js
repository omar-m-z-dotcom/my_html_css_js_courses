"use strict";

function addDefaultStyle() {
    return `text-transform: capitalize;`;
}

// create the form
let form = document.createElement("form");
form.style.cssText = `
    display: flex;
    margin: auto;
    justify-content: space-between;
    margin-bottom: 20px;
    height: 100px;${addDefaultStyle()}`;

//add the form to the body
document.body.appendChild(form);

// create two inputs with name add-class and remove-class
let input1 = document.createElement("input");
input1.setAttribute("name", "add-class");
input1.setAttribute("type", "text");
input1.setAttribute("placeholder", "Add Classes");
input1.style.cssText = `
    display: block;
    width: calc((100% - 20px) / 2);${addDefaultStyle()}`;
let input2 = document.createElement("input");
input2.setAttribute("name", "remove-class");
input2.setAttribute("type", "text");
input2.setAttribute("placeholder", "Remove Classes");
input2.style.cssText = `
    display: block;
    width: calc((100% - 20px) / 2);${addDefaultStyle()}`;

// add the inputs to the form
form.appendChild(input1);
form.appendChild(input2);

// create the target div with id target-element and with text "current element"
let target = document.createElement("div");
target.setAttribute("id", "target-element");
target.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    background-color: lightgray;
    margin-bottom: 20px;${addDefaultStyle()}`;
let targetText = document.createTextNode("current element");
target.appendChild(targetText);

// add the target div to the body
document.body.appendChild(target);

// create the class viewer div with id class-viewer
let classViewer = document.createElement("div");
classViewer.setAttribute("id", "class-viewer");
classViewer.style.cssText = `
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    gap: 10px;
    min-height: 300px;
    flex-wrap: wrap;
    background-color: lightgray;
    margin-bottom: 20px;${addDefaultStyle()}`;

// add the class viewer div to the body
document.body.appendChild(classViewer);

// add a span with text "current element class lists" to the class viewer div
let classViewerText = document.createElement("span");
classViewerText.style.cssText = `
    position: absolute;
    background-color: transparent;
    width: fit-content;
    height: fit-content;
    top: 2%;
    left: 2%;${addDefaultStyle()}`;
let classViewerTextNode = document.createTextNode("current element class lists");
classViewerText.appendChild(classViewerTextNode);
classViewer.appendChild(classViewerText);


input1.onblur = () => {
    if (input1.value !== "") {
        if (input1.value.includes(" ")) {
            input1.value = input1.value.split(" ").forEach((item) => {
                target.classList.add(item.toLowerCase());
            });
        } else {
            target.classList.add(input1.value.toLowerCase());
        }
        input1.value = "";
        while (classViewer.getElementsByTagName("div").length > 0) {
            classViewer.removeChild(classViewer.getElementsByTagName("div")[0]);
        }
        // sort the class list
        let classList = target.classList;
        let classListArray = [];
        classList.forEach((item) => {
            classListArray.push(item);
        });
        classListArray.sort();
        // create a div for each class and add it to the class viewer div
        classListArray.forEach((item) => {
            let div = document.createElement("div");
            div.style.cssText = `
                display: flex;
                justify-content: center;
                align-items: center;
                width: fit-content;
                height: fit-content;
                padding: 10px;
                background-color: orangered;
                border: 1px solid transparent;
                border-radius: 6px;
                color: white;${addDefaultStyle()}`;
            let divText = document.createTextNode(item);
            div.appendChild(divText);
            classViewer.appendChild(div);
        });
    }
};

input2.onblur = () => {
    if (input2.value !== "") {
        if (input2.value.includes(" ")) {
            input2.value = input2.value.split(" ").forEach((item) => {
                target.classList.remove(item.toLowerCase());
            });
        } else {
            target.classList.remove(input2.value.toLowerCase());
        }
        input2.value = "";
        while (classViewer.getElementsByTagName("div").length > 0) {
            classViewer.removeChild(classViewer.getElementsByTagName("div")[0]);
        }
        // sort the class list
        let classList = target.classList;
        let classListArray = [];
        classList.forEach((item) => {
            classListArray.push(item);
        });
        classListArray.sort();
        // create a div for each class and add it to the class viewer div
        classListArray.forEach((item) => {
            let div = document.createElement("div");
            div.style.cssText = `
                display: flex;
                justify-content: center;
                align-items: center;
                width: fit-content;
                height: fit-content;
                padding: 10px;
                background-color: orangered;
                border: 1px solid transparent;
                border-radius: 6px;
                color: white;${addDefaultStyle()}`;
            let divText = document.createTextNode(item);
            div.appendChild(divText);
            classViewer.appendChild(div);
        });
    }
};
