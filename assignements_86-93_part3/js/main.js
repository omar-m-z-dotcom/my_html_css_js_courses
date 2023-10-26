"use strict";

let usdToEGP = 15.6;
let input = document.forms[0].getElementsByTagName('input')[0];
let result = document.querySelector('.result');
// let input = document.querySelector('input');
// let input = document.forms[0].dollar;
input.oninput = (event) => {
    if (Number.isInteger(parseInt(input.value)) && parseInt(input.value) > 0) {
        result.innerHTML = `${input.value} USD Dollar = {${(parseInt(input.value) * usdToEGP).toFixed(2)}} Egyptian Pound`;
    } else {
        result.innerHTML = '{0} USD Dollar = {0} Egyptian Pound';
    }
}