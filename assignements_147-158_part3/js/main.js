"use strict";

// Edit The Class
class User {
    #c;
    constructor(username, card) {
        this.u = username;
        if (typeof card == "string") {
            for (let i = 0; i < card.length; i++) {
                if (card[i] == "-") {
                    card = card.replace("-", "");
                }
            }
            let cardNumberWithHyphens = "";
            for (let i = 0; i < card.length; i++) {
                if (i % 4 == 0 && i != 0) {
                    cardNumberWithHyphens += "-";
                    cardNumberWithHyphens += card[i];
                } else {
                    cardNumberWithHyphens += card[i];
                }
            }
            this.#c = cardNumberWithHyphens;
        } else {
            card = Number(card).toString();
            let cardNumberWithHyphens = "";
            for (let i = 0; i < card.length; i++) {
                if (i % 4 == 0 && i != 0) {
                    cardNumberWithHyphens += "-";
                    cardNumberWithHyphens += card[i];
                } else {
                    cardNumberWithHyphens += card[i];
                }
            }
            this.#c = cardNumberWithHyphens;
        }
    }
    get showData() {
        return `Hello ${this.u} Your Credit Card Number Is ${this.#c}`;
    }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined