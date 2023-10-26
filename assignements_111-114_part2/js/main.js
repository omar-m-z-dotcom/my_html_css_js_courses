"use strict"

if (sessionStorage.getItem("name")) {
    document.getElementById("name").value = sessionStorage.getItem("name");
}
if (sessionStorage.getItem("email")) {
    document.getElementById("email").value = sessionStorage.getItem("email");
}
if (sessionStorage.getItem("age")) {
    document.getElementById("age").value = sessionStorage.getItem("age");
}
if (sessionStorage.getItem("option")) {
    let option = sessionStorage.getItem("option");
    for (let i = 0; i < document.getElementById("option").getElementsByTagName("option").length; i++) {
        if (document.getElementById("option").getElementsByTagName("option")[i].value == option) {
            document.getElementById("option").getElementsByTagName("option")[i].setAttributeNode(document.createAttribute("selected"));
            break;
        }
    }
}

document.getElementById("form").onsubmit = function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let option = document.getElementById("option").value;
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("age", age);
    sessionStorage.setItem("option", option);
}
