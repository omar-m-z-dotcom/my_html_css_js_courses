let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

console.log(numsAndStrings.filter((item) => typeof item === "number").map((item) => -item));