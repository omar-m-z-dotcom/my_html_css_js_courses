let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
/*
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/

for (let i = 0, j = 0; i < friends.length; i++) {
    if (!friends[i][0].toLowerCase().includes(letter.toLowerCase())) {
        console.log(`${j + 1} => ${friends[i]}`);
        j++;
    }
}