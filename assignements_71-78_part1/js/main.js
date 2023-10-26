let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

console.log(mix.map((item) => (typeof item === "string" ? item : "")).reduce((a, b) => a + b));