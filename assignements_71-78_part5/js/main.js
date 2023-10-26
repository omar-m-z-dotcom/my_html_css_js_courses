let nums = [2, 12, 11, 5, 10, 1, 99];

// 500

console.log(nums.reduce((acc, num) => num % 2 == 0 ? acc * num : acc + num, 1))