"use strict";

let imgs = document.getElementsByTagName("img");
for (let index = 0; index < imgs.length; index++) {
    if (imgs[index].hasAttribute("alt") == true) {
        imgs[index].setAttribute("alt", "Elzero New");
    } else {
        imgs[index].setAttribute("alt", "old");
    }
}