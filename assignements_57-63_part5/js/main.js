function multiply(...params) {
    let result = 0;
    for (let i = 0; i < params.length; i++) {
        if (typeof params[i] === "number" && result === 0) {
            result += params[i];
        } else if (typeof params[i] === "number" && result !== 0) {
            result *= params[i];
        }
    }
    console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000