"use strict";

for (let i = 0; i < document.getElementsByTagName('img').length; i++) {
    document.getElementsByTagName('img')[i].src = `https://elzero.org/wp-content/themes/elzero/imgs/logo.png`
    document.getElementsByTagName('img')[i].setAttribute('alt', 'Elzero Logo')
}

console.log(document.body);