"use strict"

let fontFamily, backgroundColor, fontSize,
    fontFamilyOptions = document.getElementsByName("fontFamily")[0].querySelectorAll("option"), backgroundColorOptions = document.getElementsByName("backgroundColor")[0].querySelectorAll("option"), fontSizeInput = document.getElementsByName("fontSize")[0];

if (localStorage.getItem("fontFamily")) {
    document.body.style.fontFamily = localStorage.getItem("fontFamily");
    fontFamily = localStorage.getItem("fontFamily");
    for (let i = 0; i < fontFamilyOptions.length; i++) {
        if (fontFamilyOptions[i].value != fontFamily) {
            fontFamilyOptions[i].setAttributeNode(document.createAttribute("selected"));
            break;
        }
    }
    console.log(`Font Family: ${fontFamily}`);
} else {
    fontFamily = fontFamilyOptions[0].value;
    document.body.style.fontFamily = fontFamily;
    fontFamilyOptions[0].setAttributeNode(document.createAttribute("selected"));
    localStorage.setItem("fontFamily", fontFamily);
}
if (localStorage.getItem("backgroundColor")) {
    document.body.style.backgroundColor = localStorage.getItem("backgroundColor");
    backgroundColor = localStorage.getItem("backgroundColor");
    for (let i = 0; i < backgroundColorOptions.length; i++) {
        if (backgroundColorOptions[i].value != backgroundColor) {
            backgroundColorOptions[i].setAttributeNode(document.createAttribute("selected"));
            break;
        }
    }
    console.log(`Background Color: ${backgroundColor}`);
} else {
    backgroundColor = backgroundColorOptions[0].value;
    document.body.style.backgroundColor = backgroundColor;
    backgroundColorOptions[0].setAttributeNode(document.createAttribute("selected"));
    localStorage.setItem("backgroundColor", backgroundColor);
}
if (localStorage.getItem("fontSize")) {
    fontSize = localStorage.getItem("fontSize");
    document.body.style.fontSize = `${fontSize}px`;
    if (fontSize == "30") {
        fontSizeInput.value = parseInt(fontSize) - 1;
    }
    fontSizeInput.value = parseInt(fontSize) + 1;
    console.log(`Font Size: ${fontSize}px`);
} else {
    fontSize = fontSizeInput.min;
    document.body.style.fontSize = `${fontSize}px`;
    fontSizeInput.value = fontSize;
    localStorage.setItem("fontSize", `${fontSize}`);
}

document.getElementsByTagName("p")[0].innerHTML = `Font Family: ${fontFamily}`;
document.getElementsByTagName("p")[1].innerHTML = `Background Color: ${backgroundColor}`;
document.getElementsByTagName("p")[2].innerHTML = `Font Size: ${fontSize}px`;

document.getElementsByName("saveButton")[0].onclick = () => {
    if (document.getElementsByName("fontSize")[0].value >= 16 && document.getElementsByName("fontSize")[0].value <= 30) {
        fontFamily = document.getElementsByName("fontFamily")[0].value;
        backgroundColor = document.getElementsByName("backgroundColor")[0].value;
        fontSize = document.getElementsByName("fontSize")[0].value;
        console.log(fontFamily, backgroundColor, fontSize);
        document.body.style.fontFamily = fontFamily;
        document.body.style.backgroundColor = backgroundColor;
        document.body.style.fontSize = `${fontSize}px`;
        localStorage.setItem("fontFamily", fontFamily);
        localStorage.setItem("backgroundColor", backgroundColor);
        localStorage.setItem("fontSize", `${fontSize}`);
        document.getElementsByTagName("p")[0].innerHTML = `Font Family: ${fontFamily}`;
        document.getElementsByTagName("p")[1].innerHTML = `Background Color: ${backgroundColor}`;
        document.getElementsByTagName("p")[2].innerHTML = `Font Size: ${fontSize}px`;
        for (let i = 0; i < fontFamilyOptions.length; i++) {
            if (fontFamilyOptions[i].value == fontFamily) {
                fontFamilyOptions[i].removeAttribute("selected");
                break;
            }
        }
        for (let i = 0; i < fontFamilyOptions.length; i++) {
            if (fontFamilyOptions[i].value != fontFamily) {
                fontFamilyOptions[i].setAttributeNode(document.createAttribute("selected"));
                break;
            }
        }
        for (let i = 0; i < backgroundColorOptions.length; i++) {
            if (backgroundColorOptions[i].value == backgroundColor) {
                backgroundColorOptions[i].removeAttribute("selected");
                break;
            }
        }
        for (let i = 0; i < backgroundColorOptions.length; i++) {
            if (backgroundColorOptions[i].value != backgroundColor) {
                backgroundColorOptions[i].setAttributeNode(document.createAttribute("selected"));
                break;
            }
        }
        if (fontSize == "30") {
            fontSizeInput.value = parseInt(fontSize) - 1;
        } else {
            fontSizeInput.value = parseInt(fontSize) + 1;
        }
    }
}