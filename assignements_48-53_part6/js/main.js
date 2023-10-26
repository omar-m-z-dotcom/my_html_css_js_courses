let start = 0;
let swappedName = "elZerO";

// Output
// "ELzERo"
for (let i = start; i < swappedName.length; i++) {
    if (swappedName[i] == swappedName[i].toLowerCase()) {
        swappedName = swappedName.replace(swappedName[i], swappedName[i].toUpperCase());
    } else if (swappedName[i] == swappedName[i].toUpperCase()) {
        swappedName = swappedName.replace(swappedName[i], swappedName[i].toLowerCase());
    }
}
console.log(swappedName);