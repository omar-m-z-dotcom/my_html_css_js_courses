"use strict"

let counterDiv = document.createElement("div");
document.body.appendChild(counterDiv);
counterDiv.innerHTML = "10";

function countDown() {
    counterDiv.innerHTML -= 1;
    if (counterDiv.innerHTML === "0") {
        clearInterval(intervalID);
    }
}

let intervalID = setInterval(countDown, 1000);