"use strict";

document.body.querySelectorAll("*").forEach(function (node) {
    node.addEventListener("click", function (event) {
        event.stopPropagation();
        console.log(`This Is ${node.tagName}`);
        // can be also written as
        // console.log("This Is " + node.nodeName);
    });
});