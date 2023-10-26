let checker = (zName) => {
    return (status) => {
        return (salary) =>
            status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
        ;
    };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Osama")("Not Available")(4000)); // Iam Not Avaialble
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble