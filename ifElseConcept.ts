let flagOne: boolean = true;

if (flagOne) {
    console.log("This is true");
} else {
    console.log("This is false");
}

// compare with other variables
let x: number = 10, y: number = 20;
if (x > y) {
    console.log("x is greater than y");
} else {
    console.log("y is greater than x");
}

// < > <= >= == != === !==

// if - else if - else
let a: number = 100, b: number = 200, c: number = 300;
// find the greatest number
if (a > b && a > c) {
    console.log("a is greater");
} else if (b > c) {
    console.log("b is greater");
} else {
    console.log("c is greater");
}

// Ternary operator
let i: number = 10, j: number = 20;
let resultGreater: string = i > j ? "i is greater" : "j is greater";
console.log(resultGreater);

let browser: string = "chrome";
let browserType = (browser === "chrome") ? console.log("Chrome browser") : (browser === "firefox") ? console.log("Firefox browser") : console.log("IE browser");
console.log(browserType)
