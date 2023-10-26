let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
/*
"1 => Sayed"
"2 => Mahmoud"
*/
j = 0;
while (counter < friends.length) {
    if (typeof friends[counter] == "string" && !(String(friends[counter]).charAt(index) === "A")) {
        console.log(`${(j++) + 1} => ${friends[counter]}`);
    };
    counter++;
}