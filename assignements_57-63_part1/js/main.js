function sayHello(theName, theGender) {
    if ((theGender === "Male") || (theGender === "Female")) {
        console.log("Hello " + (theGender == "Male" ? "Mr" : "Miss") + " " + theName);
    } else {
        console.log("Hello " + theName);
    }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"