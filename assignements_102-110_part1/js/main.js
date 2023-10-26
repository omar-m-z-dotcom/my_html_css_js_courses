"use strict";

let numbers = prompt("Print Number From - To");
numbers = numbers.split("-");
numbers.forEach(function (number) {
    number = parseInt(number);
});
if (numbers[0] > numbers[1]) {
    let temp = numbers[0];
    numbers[0] = numbers[1];
    numbers[1] = temp;
}
for (let i = numbers[0]; i <= numbers[1]; i++) {
    document.body.innerHTML += i + "<br>";
}

// let secretNumber = "5";
// secretNumber[0] = "7";
// console.log(secretNumber); // 5