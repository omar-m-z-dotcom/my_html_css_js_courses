let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions to check if the needle is in the haystack

// Solution 1
if (haystack.indexOf(needle) !== -1) {
    console.log("Solution 1: Found");
} else {
    console.log("Solution 1: Not Found");
}

// Solution 2
if (haystack.includes(needle)) {
    console.log("Solution 2: Found");
} else {
    console.log("Solution 2: Not Found");
}

// Solution 3
if (haystack.lastIndexOf(needle) !== -1) {
    console.log("Solution 3: Found");
} else {
    console.log("Solution 3: Not Found");
}